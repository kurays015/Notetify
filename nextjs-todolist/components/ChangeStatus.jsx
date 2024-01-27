import { DropdownMenuCheckboxItem } from "./ui/dropdown-menu";

export default function ChangeStatus({ status }) {
  return (
    <div>
      {status.map(({ name, checked, onCheckedChange }) => (
        <DropdownMenuCheckboxItem
          key={name}
          checked={checked}
          onCheckedChange={onCheckedChange}
          // onClick={if i click this, the title and description will pass to another card/container and filter the previouse card/container}
        >
          {name}
        </DropdownMenuCheckboxItem>
      ))}
    </div>
  );
}
