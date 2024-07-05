import { Checkbox } from "~/components/ui/checkbox";

type Props = {
    text: string;
    name: string;
}

export default function CheckBoxRoutes({ text, name }: Props) {

    return (
        <div className="flex items-center space-x-2">
            <Checkbox id={name} name="routes" value={name}  />
            <label htmlFor={name} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                {text}
            </label>
        </div>
    )
}
