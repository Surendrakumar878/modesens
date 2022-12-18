import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, Button, useDisclosure, Box
  } from '@chakra-ui/react'
  import "./modal.css"

function BasicUsage() {
 
    const { isOpen, onOpen, onClose } = useDisclosure()
    
    return (
      <>
        <Button onClick={onOpen}>Quick View</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
         
            <ModalCloseButton />
            <Box className='box'>
                <Box></Box>
                <Box></Box>
            </Box>
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default BasicUsage