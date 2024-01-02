"use client";
import { useRef, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import useAddTodos from "../hooks/useAddTodos";
import useAuthContext from "../hooks/useAuthContext";

export default function FormModalButton() {
  const [error, setError] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const todoRef = useRef();
  const descriptionRef = useRef();
  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);

  const {
    mutateAsync: submitTodo,
    isPending,
    isSuccess,
    isError,
  } = useAddTodos();

  async function handleSave() {
    if (todoRef.current.value === "" || descriptionRef.current.value === "") {
      setError("All fields are required");
      return;
    }
    await submitTodo({
      todo: todoRef.current.value,
      description: descriptionRef.current.value,
    });
    setIsOpen(false);
  }

  return (
    <>
      <Button
        onClick={onOpen}
        colorScheme="blue"
        rightIcon={<FaPlus />}
        fontWeight="bold"
        fontSize={{ base: ".9rem" }}
        borderRadius="md"
        boxShadow="md"
        _hover={{ bg: "blue.400" }}
      >
        Add Todo
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Todo</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl mb={4}>
              <FormLabel htmlFor="todo" className="text-gray-700 font-bold">
                Todo:
              </FormLabel>
              <Input
                disabled={isPending}
                ref={todoRef}
                type="text"
                name="todo"
                id="todo"
                placeholder="Add your todo..."
                border="1px"
                borderColor="gray.300"
                rounded="md"
                focusBorderColor="blue.500"
                _focus={{ outline: "none" }}
              />
            </FormControl>
            <FormControl mb={6}>
              <FormLabel
                htmlFor="description"
                className="text-gray-700 font-bold"
              >
                Description:
              </FormLabel>
              <Textarea
                disabled={isPending}
                ref={descriptionRef}
                id="description"
                placeholder="Enter description"
                rows="4"
                border="1px"
                borderColor="gray.300"
                rounded="md"
                resize="none"
                focusBorderColor="blue.500"
                _focus={{ outline: "none" }}
              />
            </FormControl>
            <div className="text-center text-red-500">{error}</div>
          </ModalBody>
          <ModalFooter display="flex" gap="3">
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
            <Button
              isLoading={isPending}
              loadingText="Adding"
              colorScheme="blue"
              onClick={handleSave}
              disabled={isPending}
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
