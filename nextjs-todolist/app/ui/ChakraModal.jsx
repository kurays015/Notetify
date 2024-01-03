import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputRightElement,
  IconButton,
  InputGroup,
  Menu,
  MenuButton,
  MenuList,
  MenuGroup,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { IoIosArrowDropdown } from "react-icons/io";

import useAuthContext from "../hooks/useAuthContext";
import { useEffect, useState } from "react";

export default function ChakraModal() {
  const [userAccess, setUserAccess] = useState(null);

  const {
    homeLogin,
    showPassword,
    setShowPassword,
    isActive,
    finalRef,
    passwordRef,
    handleReset,
    initialRef,
    isOpen,
    onClose,
    loginLoading,
    handleLogin,
    registerLoading,
    handleRegister,
    logout,
    logoutLoading,
  } = useAuthContext();

  return (
    <>
      <Menu autoSelect={false}>
        <MenuButton>
          <IoIosArrowDropdown className="text-gray-800 text-2xl" />
        </MenuButton>
        <MenuList>
          <MenuItem onClick={homeLogin}>Login</MenuItem>
          <MenuDivider />
          <MenuItem onClick={() => logout()}>Logout</MenuItem>
        </MenuList>
      </Menu>

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
            <ModalBody>
              <FormControl position="relative">
                <FormLabel>Email</FormLabel>
                <Input
                  ref={initialRef}
                  placeholder="email"
                  disabled={loginLoading}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    disabled={loginLoading}
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
              <div className="mt-3 flex flex-col items-center gap-3">
                <p className="text-[.8rem] md:text-base">
                  Don&apos;t have an account yet?
                  <span
                    className="text-slate-500 cursor-pointer text-[.8rem] md:text-base ml-2"
                    onClick={handleReset}
                  >
                    Register
                  </span>
                </p>
              </div>
            </ModalBody>

            <ModalFooter>
              <Button
                isLoading={loginLoading}
                loadingText="Logging in..."
                colorScheme="blue"
                disabled={loginLoading}
                mr={3}
                onClick={handleLogin}
              >
                Login
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      ) : (
        //register below
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
            <ModalBody>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  ref={initialRef}
                  placeholder="enter your email"
                  disabled={registerLoading}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    disabled={registerLoading}
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
              <div className="mt-3 flex flex-col items-center gap-3 text-[.8rem] md:text-base">
                <p>
                  Already have an account yet?
                  <span
                    className="text-slate-500 cursor-pointer text-[.8rem] md:text-base ml-2"
                    onClick={handleReset}
                  >
                    Login
                  </span>
                </p>
              </div>
            </ModalBody>

            <ModalFooter>
              <Button
                colorScheme="blue"
                mr={3}
                onClick={handleRegister}
                disabled={registerLoading}
                loadingText="registering..."
                isLoading={registerLoading}
              >
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
