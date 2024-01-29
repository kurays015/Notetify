import { CardContent, CardDescription } from "@/components/ui/card";
import { DatePicker } from "./DatePicker";
import { ShowMore } from "./ShowMore";

export default function TodoItem({ title, description, _id, index, status }) {
  return (
    <CardContent className="p-4 customSm:w-full text-start">
      <div className="flex items-center justify-between">
        <h5>Title: {title}</h5>
        <ShowMore id={_id} index={index} status={status} />
      </div>
      <CardDescription className="text-start text-xs my-3">
        <span className="mr-2">
          Description: <br />
          {description}
        </span>
      </CardDescription>
      <div className="text-start text-xs">
        <span className="mr-2">Date:</span>
        <DatePicker />
      </div>
    </CardContent>
  );
}
