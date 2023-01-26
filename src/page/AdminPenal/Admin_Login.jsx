import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    Box, Button,Heading,Input,Stack,} from "@chakra-ui/react";

    export default function Admin_Login() {
        const [name, setName] = useState("");
        const [userId, setUserId] = useState("");
        const [userpassword, setUserpassword] = useState("");
       
         const navigate = useNavigate();
        const handleSubmitU = (e) => {
            //Default
            e.preventDefault();
           
            
              if (userId === "cool@gmail.com" && userpassword === "cool") {
                alert("successfull");
                 navigate("/admin")
                setName("")
                setUserId("")
                setUserpassword("")
                localStorage.setItem("username", JSON.stringify(name));

                // window.location.href = "index.html"
              } else {
                alert("user dose not exist");
                setName("")
                setUserId("")
                setUserpassword("")
              }
            }
          
          
  return (
    <Box  bg={"white"} align="center" w={{lg:"90%",md:"50%",sm:"100%"}} pl={{lg:"",sm:"100px"}} m="5%"  spacing="120px"   >
    <Stack >
    <Heading> Log in to your Admin Account</Heading>
    <form w={{ lg: '50%', sm: '50%', md: '75%' }}  onSubmit={handleSubmitU}>
    <Input
     w={{ lg: '50%', sm: '50%', md: '75%' }}
        variant="flushed"
        type="text "
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <Input
       w={{ lg: '50%', sm: '50%', md: '75%' }}
        variant="flushed"
        type="text "
        placeholder="userId"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <br />
      <Input
       w={{ lg: '50%', sm: '50%', md: '75%' }}
        variant="flushed"
        type="text "
        placeholder="password"
        value={userpassword}
        onChange={(e) => setUserpassword(e.target.value)}
      />

      <Heading m={5} align="center" fontSize={20} color={"teal"}>
        forgot password
      </Heading>

      <Button m={5}  w={80} type="submit">
        LOGIN
      </Button>
    </form>
  </Stack>
  </Box>
  )
}