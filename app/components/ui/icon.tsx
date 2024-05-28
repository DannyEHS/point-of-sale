import { CiHome } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { RiAdminLine } from "react-icons/ri";
import { MdOutlineInventory2 } from "react-icons/md";

const iconsMap = {
    home: CiHome,
    cart: CiShoppingCart,
    admin: RiAdminLine,
    inventory: MdOutlineInventory2
}

export type IconName = keyof typeof iconsMap

interface IconProps {
    value: IconName
}

export function IconComponent( { value }: IconProps) {
    const Icon = iconsMap[value]
    return <Icon/>
}