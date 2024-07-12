"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"

type Props = {
  textTitle: string,
  textDescription: string,
  texContent: string,
  textFooter: string | React.ReactNode,
  iconContent: React.ReactElement,
  children?: React.ReactNode,
  className?: string,
}

export default function CardPOS({className, textTitle, textDescription, iconContent, children}: Readonly<Props>) {
  return (
    <Card className={className}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
            <CardTitle >{textTitle}</CardTitle>
            {iconContent}
        </div>
        <CardDescription>{textDescription}</CardDescription>
      </CardHeader>
      <CardContent className="pb-5">
        {children}
      </CardContent>
    </Card>
  )
}