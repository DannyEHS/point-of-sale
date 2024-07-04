import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"

export default function Header(){
    return (
        <header className="sticky top-0 z-50 flex h-14 lg:h-[60px] min-h-[60px] items-center justify-between gap-2 border-b  bg-[#fafbfb] px-6 dark:bg-gray-800/40">
            {/* Hacer el titile dinámico */}
            <h1 className="text-lg font-semibold text-gray-800 md:text-2x1">Title</h1>
            <div className="flex items-center">
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            </div>
        </header>
    )   
}