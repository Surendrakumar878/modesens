import { Input,InputGroup,InputRightElement,Button } from '@chakra-ui/react'
import React from 'react';

function PasswordShowInput() {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
  
    return (
      <InputGroup size='md' style={{marginTop:"10px"}}>
        <Input
        width='298px' height="43px" style={{border:"1px solid",borderRadius:"0px"}}
          pr='4.5rem'
          type={show ? 'text' : 'password'}
          placeholder='Password'
        />
        <InputRightElement width='4.5rem'>
          <Button h='1.75rem' size='sm' onClick={handleClick}>
            {show ? 'Hide' : 'Show'}
          </Button>
        </InputRightElement>
      </InputGroup>
    )
  }

  export default PasswordShowInput;