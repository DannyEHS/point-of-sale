import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "~/components/ui/select"

type Props = {
    itemsText: string,
}

export default function SelectItems({ itemsText } : Props) {
    return (
        <Select>
            <SelectTrigger className="w-96 m-3">
                <SelectValue placeholder="Rol" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="light">{itemsText}</SelectItem>
                <SelectItem value="dark">{itemsText}</SelectItem>
                <SelectItem value="system">{itemsText}</SelectItem>
            </SelectContent>
        </Select>
    )
}