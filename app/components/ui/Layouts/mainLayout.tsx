
interface Props {
	children: React.ReactNode
	Header: React.ReactNode
	as: 'div' | 'main' | 'section'
	className?: string
}

export default function MainLayout({ children, Header, as, className }: Props) {
	const Component = as
    let template = `relative flex flex-col items-center justify-center ${className}`;
	return (
		<Component
			className={template}
		>
            
			{Header}
			{children}
		</Component>
	)
}
