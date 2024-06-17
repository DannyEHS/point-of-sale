import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { FaRegTrashAlt } from "react-icons/fa";

type Props = {
    catchId?: string;
}

export default function DeleteButton({ catchId }: Props) {
    return (
        <>
            <Button type="submit" variant="destructive" className="hover:bg-[#B22222]">
                <FaRegTrashAlt />
            </Button>
            <Input name="id" value={catchId} type="hidden"></Input>
        </>

    )
}