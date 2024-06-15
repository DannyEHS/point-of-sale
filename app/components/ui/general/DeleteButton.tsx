import { Button } from "~/components/ui/button"
import { FaRegTrashAlt } from "react-icons/fa";

export default function DeleteButton() {
    return (
        <Button variant="destructive" className="hover:bg-[#B22222]">
            <FaRegTrashAlt />
        </Button>
    )
}