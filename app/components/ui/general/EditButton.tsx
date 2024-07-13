import { Button } from "~/components/ui/button"
import { Link } from "@remix-run/react";

import { RiDraftLine } from "react-icons/ri";


type Props = {
    route: string;
}

export default function EditButton({ route } : Props) {
    return (
        <Link to={route}>
            <Button className="bg-[#ff9800] hover:bg-[#fb8c00]">
            <RiDraftLine className="w-5 h-5"/>
            </Button>

        </Link>
    )
}