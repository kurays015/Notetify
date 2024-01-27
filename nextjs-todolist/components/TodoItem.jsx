import { CardContent, CardDescription } from "@/components/ui/card";
import { DatePicker } from "./DatePicker";
import { ShowMore } from "./ShowMore";

export default function TodoItem({ title, description, _id, index }) {
  return (
    <CardContent className="px-4">
      <div className="flex items-center justify-between mb-2">
        <h5 className="text-start customSm:text-sm customSm:max-w-[50%]">
          {title}
        </h5>
        <div className="flex items-center">
          <DatePicker />
          <ShowMore id={_id} index={index} />
        </div>
      </div>
      <CardDescription className="text-start text-xs">
        {description}
      </CardDescription>
    </CardContent>
  );
}
