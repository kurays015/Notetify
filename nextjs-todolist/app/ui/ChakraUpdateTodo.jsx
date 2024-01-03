"use client";
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
import useCrudContext from "../hooks/useCrudContext";

export default function ChakraUpdateTodo({ _id }) {
  const {
    isOpen,
    onClose,
    updateTodoRef,
    updateDesRef,
    handleUpdateTodos,
    updateTodoLoading,
    error,
  } = useCrudContext();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Update Todo</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl mb={4}>
            <FormLabel htmlFor="todo" className="text-gray-700 font-bold">
              Todo:
            </FormLabel>
            <Input
              disabled={updateTodoLoading}
              ref={updateTodoRef}
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
              disabled={updateTodoLoading}
              ref={updateDesRef}
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
            isLoading={updateTodoLoading}
            loadingText="Updating..."
            colorScheme="blue"
            onClick={() => handleUpdateTodos(_id)}
          >
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
