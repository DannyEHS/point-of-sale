import { Button } from "~/components/ui/button"
import { Link } from "@remix-run/react";

import { CiEdit } from "react-icons/ci";

type Props = {
    route: string;
}

export default function EditButton({ route } : Props) {
    return (
        <Link to={route}>
            <Button className="bg-[#007BFF] hover:bg-[#0A74DA]">
                <CiEdit />
            </Button>

        </Link>
    )
}