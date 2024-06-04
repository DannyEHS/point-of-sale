import {
    Card,
    CardHeader,
    CardTitle,
    CardFooter
} from "~/components/ui/card"

type Props = {
    textTitle: string,
    textDescription: string,
    texContent: string,
    textFooter: string,
    iconContent: React.ReactElement,
    iconFooter: React.ReactElement,
}

export default function CardTopic({ textTitle, textFooter, iconContent, iconFooter }: Readonly<Props>) {
    return (
        <Card className="h-auto w-72 ">
            <CardHeader>
                <div className="flex flex-row items-center">
                    {iconContent}
                    <CardTitle>{textTitle}</CardTitle>
                </div>
            </CardHeader>
            <CardFooter >
                {iconFooter}
                {textFooter}
            </CardFooter>
        </Card>
    )
}