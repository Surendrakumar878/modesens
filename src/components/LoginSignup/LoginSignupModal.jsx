import { color, Input } from "@chakra-ui/react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./loginsignup.css";
// import PasswordShowInput from "./PasswordShowInput";
import { PinInput, PinInputField, HStack } from "@chakra-ui/react";
import { InputGroup, InputRightElement } from "@chakra-ui/react";
import Spinner from "react-bootstrap/Spinner";
import { authentification } from "../../firebase";
import { signInWithPhoneNumber } from "firebase/auth";
import swal from "sweetalert";
import { getAuth, RecaptchaVerifier } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { login, postLoginSuccess } from "../../Redux/AuthReducer/action";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function LoginSignupModal(props) {
  const [openLogin, setOpenLogin] = useState("signup");
  const [mobileVerify, setMobileVerify] = useState(false);
  const [signupLoading, setSignupLoading] = useState(false);
  const [verifyOTP, setverifyOTP] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [Password, setPass] = useState("");
  const [data, setdata] = useState("");
  const [otpentry, setOtpentry] = useState("");
  const [mobile, setMobile] = useState("");
  const location = useLocation();
  // console.log(location)
  // console.log(otpentry);
  const navigate = useNavigate();
  const token = useSelector((store) => store.AuthReducer.token);
  console.log(token);
  const handleModalChange = () => {
    if (openLogin == "signup") {
      setOpenLogin("login");
    } else {
      setOpenLogin("signup");
    }
  };

  // ------------------------------------------------function for captchaverfication invisible-----------------------------------

  function checkrecaptcha() {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
      },
      authentification
    );
  }

  function RequestOTP() {
    if (mobile == "" || email == "" || Password == "") {
      return swal({
        title: "Please fill all the fields!",
        text: "It seems you don't fill all the fields",
        icon: "warning",
      });
    }
    setSignupLoading(true);
    let phoneNumber = `+91${mobile}`;
    console.log(phoneNumber);
    checkmobile(mobile);
    checkrecaptcha();
    let appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(authentification, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        swal({
          title: "OTP Sent !",
          text: `OTP successfully sent on ${phoneNumber}`,
          icon: "success",
          button: "OK",
        });
        setSignupLoading(false);
        setMobileVerify(true);
      })
      .catch((error) => {
        console.log(error);
        setMobileVerify(false);
        setSignupLoading(false);
        swal({
          title: "Error in Sending OTP",
          text: "Please check Entered Mobile Number or try after some time",
          icon: "error",
          button: "OK",
        });
      });
  }

  const returnfetchuser = () => {
    return fetch(`https://mocker-api.onrender.com/users`).then((res) =>
      res.json()
    );
  };

  function checkmobile(m) {
    let datauser;
    returnfetchuser().then((res) => {
      var userAvailable = res.filter((el) => {
        //  console.log(el);
        return Number(el.mobile) == Number(m);
      });

      // console.log(userAvailable.length)
      if (userAvailable.length > 0) {
        //console.log(Loginstate);
        setdata(true);
      } else {
        setdata(false);
      }
    });
  }

  function verifyotp() {
    setverifyOTP(true);
    let confirmationResult = window.confirmationResult;

    confirmationResult
      .confirm(otpentry)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        swal({
          title: "Mobile Number Verified",
          text: `+91${mobile} is successfully verified`,
          icon: "success",
          buttons: false,
        });

        setTimeout(() => {
          if (data == true) {
            navigate(`${location.pathname}`);
            setverifyOTP(false);
            swal({
              title: "Already Registered !",
              icon: "warning",
              text: "It seems you are already signed up! login now.",
            });
            setEmail("");
            setMobile("");
            setOtpentry("");
            setPass("");
            setOpenLogin("login");
            // props.onHide();
          } else {
            SignMeUp();
            setverifyOTP(false);
          }
        }, 2000);

        // ...
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
        setverifyOTP(false);
        swal({
          title: "Wrong OTP !",
          text: "Entered OTP is wrong, please enter correct OTP",
          icon: "error",
          button: "OK",
        });
      });
  }

  function SignMeUp() {
    let username = "";
    // let Password = Password;
    let id = mobile;

    let userinfo = {
      id: mobile,
      username: "",
      mobile: mobile,
      email: email,
      password: Password,
    };

    // console.log(userinfo)
    dispatch(login(userinfo))

        swal({
          title: "Signed Up",
          text: "Signed up successfully enjoy shopping !",
          icon: "success",
        });
        // LoginUser(userinfo);
        // setLoading(false);
        props.onHide();
        navigate(`${location.pathname}`);

  }

  function Checklogin() {
    axios
      .get("https://mocker-api.onrender.com/users")
      .then((res) => {
        let useravailable = res.data.filter((el) => {
          localStorage.setItem("emailId",el.email)
          return el.email == email && el.password == Password;
        });
        console.log(useravailable);
        if (useravailable.length > 0) {
          dispatch(postLoginSuccess(useravailable));
          props.onHide();
          swal({
            title: "Logged In!",
            text: "Congratulations! Loggied in Successfully!",
            icon: "success",
          });setLoginLoading(false)
        } else {
          swal({
            title: "Incorrect Email or Password!",
            text: "It seems you are not signed up. Sign up Now or entered wrong credentials!",
            icon: "error",
          });
          setEmail("");
          setPass("");
          setOpenLogin("signup");
          setLoginLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        props.onHide();
        swal({
          title: "Log in falied!",
          text: "Loggied in failed! check your data or signup",
          icon: "error",
        });
      });
  }

  return (
    <Modal
      {...props}
      size="xl"
      style={{ padding: "0px 0px", margin: "0px 0px" }}
      aria-labelledby="contained-modal-title-vcenter"
    >
      <div id="recaptcha-container"></div>
      <Modal.Body style={{ backgroundColor: "#000000" }}>
        <div className="login_signup_div">
          <div className="login_signup_div_left">
            <img
              src="https://i.postimg.cc/wMH0GsC0/loginsignupleftimg.jpg"
              alt=""
            />
          </div>

          <div className="login_signup_div_side_parent">
            <div
              style={{
                width: "100%",
                height: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "right",
              }}
            >
              <svg
                onClick={props.onHide}
                style={{ cursor: "pointer" }}
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="#333"
                viewBox="0 0 320 512"
              >
                <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
              </svg>
            </div>
            <img
              src="https://i.postimg.cc/7hFL7SGx/1670760238004-removebg-preview.jpg"
              className="logo_responsive"
              alt=""
            />
            {openLogin == "signup" ? (
              <div className="login_signup_div_side">
                <p
                  style={{
                    marginTop: "40px",
                    color: "#1E1F21",
                    fontSize: "22px",
                  }}
                >
                  Create an account
                </p>
                <p style={{ marginTop: "10px", fontSize: "16px" }}>
                  Unleash your shopping power.
                </p>
                <p style={{ marginTop: "0px", fontSize: "16px" }}>
                  Check ModeSens before you buy.
                </p>

                <div
                  style={{
                    fontSize: "18px",
                    marginTop: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <Input
                    placeholder="Email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    width="298px"
                    height="43px"
                    style={{
                      marginTop: "10px",
                      border: "1px solid",
                      borderRadius: "0px",
                    }}
                  />
                  <InputGroup size="md" style={{ marginTop: "10px" }}>
                    <Input
                      value={Password}
                      onChange={(e) => {
                        setPass(e.target.value);
                      }}
                      width="298px"
                      height="43px"
                      style={{ border: "1px solid", borderRadius: "0px" }}
                      pr="4.5rem"
                      type={show ? "text" : "Password"}
                      placeholder="Password"
                    />
                    <InputRightElement width="4.5rem">
                      <Button
                        h="1.75rem"
                        size="sm"
                        style={{ backgroundColor: "black", border: "none" }}
                        onClick={handleClick}
                      >
                        {show ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <Input
                    placeholder="Mobile number"
                    value={mobile}
                    onChange={(e) => {
                      setMobile(e.target.value);
                    }}
                    type="number"
                    width="298px"
                    height="43px"
                    style={{
                      marginTop: "10px",
                      border: "1px solid",
                      borderRadius: "0px",
                    }}
                  />
                  {signupLoading ? (
                    <button
                      disabled="true"
                      style={{
                        marginTop: "10px",
                        width: "298px",
                        height: "43px",
                        backgroundColor: "#000",
                        color: "#fff",
                      }}
                    >
                      {" "}
                      <Spinner
                        animation="border"
                        variant="light"
                        role="status"
                      ></Spinner>
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        RequestOTP();
                      }}
                      style={{
                        marginTop: "10px",
                        width: "298px",
                        height: "43px",
                        backgroundColor: "#000",
                        color: "#fff",
                      }}
                    >
                      Send OTP
                    </button>
                  )}
                </div>
                {mobileVerify ? (
                  <div>
                    <p
                      style={{
                        marginTop: "20px",
                        marginBottom: "10px",
                        fontSize: "16px",
                      }}
                    >
                      Verify OTP
                    </p>
                    <HStack>
                      <PinInput
                        value={otpentry}
                        onChange={(e) => {
                          setOtpentry(e);
                        }}
                      >
                        <PinInputField style={{ border: "1px solid #000" }} />
                        <PinInputField style={{ border: "1px solid #000" }} />
                        <PinInputField style={{ border: "1px solid #000" }} />
                        <PinInputField style={{ border: "1px solid #000" }} />
                        <PinInputField style={{ border: "1px solid #000" }} />
                        <PinInputField style={{ border: "1px solid #000" }} />
                      </PinInput>
                    </HStack>
                    {verifyOTP ? (
                      <button
                        disabled="true"
                        style={{
                          marginTop: "10px",
                          width: "298px",
                          height: "43px",
                          backgroundColor: "#000",
                          color: "#fff",
                        }}
                      >
                        {" "}
                        <Spinner
                          animation="border"
                          variant="light"
                          role="status"
                        ></Spinner>
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          setverifyOTP(true);
                          verifyotp();
                        }}
                        style={{
                          marginTop: "10px",
                          width: "298px",
                          height: "43px",
                          backgroundColor: "#000",
                          color: "#fff",
                        }}
                      >
                        Verify OTP & Sign Up
                      </button>
                    )}{" "}
                  </div>
                ) : (
                  ""
                )}

                <p
                  onClick={handleModalChange}
                  style={{
                    cursor: "pointer",
                    marginTop: "20px",
                    fontSize: "16px",
                    textDecoration: "underline",
                    textDecorationColor: "#8e8e8e",
                  }}
                >
                  Already have an account? Please log in.
                </p>
              </div>
            ) : (
              <div className="login_signup_div_side">
                <p
                  style={{
                    marginTop: "50px",
                    color: "#1E1F21",
                    fontSize: "22px",
                  }}
                >
                  Log in
                </p>
                <p style={{ marginTop: "10px", fontSize: "16px" }}>
                  Unleash your shopping power.
                </p>
                <p style={{ marginTop: "0px", fontSize: "16px" }}>
                  Check ModeSens before you buy.
                </p>

                <div
                  style={{
                    marginTop: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <Input
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    placeholder="Email"
                    width="298px"
                    height="43px"
                    style={{
                      marginTop: "10px",
                      border: "1px solid",
                      borderRadius: "0px",
                    }}
                  />
                  <InputGroup size="md" style={{ marginTop: "10px" }}>
                    <Input
                      value={Password}
                      onChange={(e) => {
                        setPass(e.target.value);
                      }}
                      width="298px"
                      height="43px"
                      style={{ border: "1px solid", borderRadius: "0px" }}
                      pr="4.5rem"
                      type={show ? "text" : "Password"}
                      placeholder="Password"
                    />
                    <InputRightElement width="4.5rem">
                      <Button
                        h="1.75rem"
                        size="sm"
                        style={{ backgroundColor: "black", border: "none" }}
                        onClick={handleClick}
                      >
                        {show ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  {loginLoading ? (
                    <button
                      disabled="true"
                      style={{
                        marginTop: "10px",
                        width: "298px",
                        height: "43px",
                        backgroundColor: "#000",
                        color: "#fff",
                      }}
                    >
                      {" "}
                      <Spinner
                        animation="border"
                        variant="light"
                        role="status"
                      ></Spinner>
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        setLoginLoading(true);
                        Checklogin();
                      }}
                      style={{
                        marginTop: "10px",
                        width: "298px",
                        height: "43px",
                        backgroundColor: "#000",
                        color: "#fff",
                      }}
                    >
                      Log in
                    </button>
                  )}{" "}
                </div>

                <p
                  onClick={handleModalChange}
                  style={{
                    cursor: "pointer",
                    marginTop: "20px",
                    fontSize: "16px",
                    textDecoration: "underline",
                    textDecorationColor: "#8e8e8e",
                  }}
                >
                  Don't have an account? Please sign in.
                </p>
              </div>
            )}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default LoginSignupModal;
