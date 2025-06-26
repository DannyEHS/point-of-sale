import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "~/components/ui/tooltip";

type Props = {
    element?: React.ReactElement;
    text?: string;
};

export default function TooltipInfo({ element, text }: Props) {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    {element}
                </TooltipTrigger>
                <TooltipContent>
                    {text && <p>{text}</p>}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
