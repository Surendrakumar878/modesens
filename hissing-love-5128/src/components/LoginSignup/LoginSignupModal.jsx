import { color, Input } from "@chakra-ui/react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./loginsignup.css";
import PasswordShowInput from "./PasswordShowInput";
import { PinInput, PinInputField, HStack } from "@chakra-ui/react";
import Spinner from "react-bootstrap/Spinner";

function LoginSignupModal(props) {
  const [openLogin, setOpenLogin] = useState("signup");
  const [mobileVerify, setMobileVerify] = useState(false);
  const [signupLoading, setSignupLoading] = useState(false);
  const [verifyOTP, setverifyOTP] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);

  const handleModalChange = () => {
    if (openLogin == "signup") {
      setOpenLogin("login");
    } else {
      setOpenLogin("signup");
    }
  };

  return (
    <Modal
      {...props}
      size="xl"
      style={{ padding: "0px 0px", margin: "0px 0px" }}
      aria-labelledby="contained-modal-title-vcenter"
    >
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
            <img src="https://i.postimg.cc/7hFL7SGx/1670760238004-removebg-preview.jpg" className="logo_responsive" alt="" />
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
                    marginTop: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <Input
                    placeholder="Email"
                    width="298px"
                    height="43px"
                    style={{
                      marginTop: "10px",
                      border: "1px solid",
                      borderRadius: "0px",
                    }}
                  />
                  <PasswordShowInput />
                  <Input
                    placeholder="Mobile number"
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
                        setMobileVerify(true);
                        setSignupLoading(true);
                      }}
                      style={{
                        marginTop: "10px",
                        width: "298px",
                        height: "43px",
                        backgroundColor: "#000",
                        color: "#fff",
                      }}
                    >
                      Sign Up
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
                      <PinInput>
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
                    placeholder="Email"
                    width="298px"
                    height="43px"
                    style={{
                      marginTop: "10px",
                      border: "1px solid",
                      borderRadius: "0px",
                    }}
                  />
                  <PasswordShowInput />
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
