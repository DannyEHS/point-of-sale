import * as React from "react"

import { ScrollArea } from "~/components/ui/dashboard/scrollArea"


interface Props {
	children: React.ReactNode
	Header: React.ReactNode
	as: 'div' | 'main' | 'section'
	className?: string
}

export default function MainLayout2({ children, Header, as, className }: Props) {
	const Component = as
    let template = `relative flex flex-col items-center justify-center ${className}`;
	return (
		<Component
			className={template}
		>
			<ScrollArea className="h-96 w-full">
				<div className="p-4">
					{Header}
					{children}
				</div>
			</ScrollArea>

		</Component>
	)
}
