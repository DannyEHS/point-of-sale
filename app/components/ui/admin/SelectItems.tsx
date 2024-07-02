import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "~/components/ui/select";

type Props = {
    data?: {
        id: string;
        name: string;
    }[];
    placeHolder: string;
    name?: string | any;
    value?: string;
};

export default function SelectItems({ data, placeHolder, name, value }: Props) {

    
    return (
        <Select name={name} value={value}>
            <SelectTrigger className="w-96 m-3">
                <SelectValue placeholder={placeHolder} />
            </SelectTrigger>
            <SelectContent>
                {data && data.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                        {category.name}
                    </SelectItem>
                ))}
                {!data && (
                    <SelectItem value="Sin info">Sin info</SelectItem>
                )}
            </SelectContent>
        </Select>
    );
}
