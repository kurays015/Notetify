import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputRightElement,
  IconButton,
  InputGroup,
} from "@chakra-ui/react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import axios from "../api/axios";
import useAuthContext from "../hooks/useAuthContext";

export default function ChakraModal() {
  const [showPassword, setShowPassword] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [error, setError] = useState("");
  const passwordRef = useRef(null);
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const { accessToken, setAccessToken } = useAuthContext();

  const handleReset = () => {
    setIsActive(prev => !prev);
    setShowPassword(false);
    passwordRef.current.value = "";
    initialRef.current.value = "";
  };

  const handleLogin = async () => {
    try {
      const { data: accessToken } = await axios.post("/auth/login", {
        email: initialRef.current.value,
        password: passwordRef.current.value,
      });
      if (accessToken) {
        console.log(accessToken);
        localStorage.setItem("accessToken", accessToken);
      }
    } catch (err) {
      setError(err?.response.data);
      console.log(err.response.data);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setAccessToken(token);
  }, []);

  console.log("user is valid", accessToken);

  return (
    <>
      <Button onClick={onOpen} h="30px" fontSize=".8rem">
        Login
      </Button>
      {isActive ? (
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent mx="3">
            <ModalHeader textAlign="center">Welcome back!</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl position="relative">
                <FormLabel>Email</FormLabel>
                <Input ref={initialRef} placeholder="email" />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    ref={passwordRef}
                    placeholder="password"
                    type={`${showPassword ? "text" : "password"}`}
                  />
                  <InputRightElement>
                    <IconButton
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                      variant="ghost"
                      onClick={() => setShowPassword(prev => !prev)}
                      icon={showPassword ? <IoIosEye /> : <IoIosEyeOff />}
                    />
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <div className="mt-3 flex items-center gap-3">
                <p className="text-[.8rem] md:text-base">
                  Don't have an account yet?
                </p>
                <span
                  className="text-slate-500 cursor-pointer text-[.8rem] md:text-base"
                  onClick={handleReset}
                >
                  Register
                </span>
                <span>{error}</span>
              </div>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={handleLogin}>
                Login
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      ) : (
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent mx="3">
            <ModalHeader textAlign="center">Create your account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input ref={initialRef} placeholder="enter your email" />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    ref={passwordRef}
                    placeholder="password"
                    type={`${showPassword ? "text" : "password"}`}
                  />
                  <InputRightElement>
                    <IconButton
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                      variant="ghost"
                      onClick={() => setShowPassword(prev => !prev)}
                      icon={showPassword ? <IoIosEye /> : <IoIosEyeOff />}
                    />
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <div className="mt-3 flex items-center gap-3 text-[.8rem] md:text-base">
                Already have an account yet?
                <span
                  className="text-slate-500 cursor-pointer text-[.8rem] md:text-base"
                  onClick={handleReset}
                >
                  Login
                </span>
              </div>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3}>
                Register
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}
