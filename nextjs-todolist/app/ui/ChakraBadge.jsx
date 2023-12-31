import { Badge } from "@chakra-ui/react";

export default function ChakraBadge({ isCompleted }) {
  return (
    <Badge
      variant="outline"
      colorScheme={`${isCompleted ? "green" : "red"}`}
      textTransform="none"
    >
      {isCompleted ? "Completed" : "Not Completed"}
    </Badge>
  );
}
