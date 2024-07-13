import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { RiDeleteBin6Line } from "react-icons/ri";


type Props = {
    catchId?: string;
}

export default function DeleteButton({ catchId }: Props) {
    return (
        <>
            <Button type="submit" variant="destructive" className="bg-[#e53935] hover:bg-[#c62828]">
                <RiDeleteBin6Line className="w-5 h-5" />
            </Button>
            <Input name="id" value={catchId} type="hidden"></Input>
        </>

    )
}