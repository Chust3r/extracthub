import { cn } from '@/lib/utils'

interface Props {
	className?: string
}

const BackgroundPattern = ({ className }: Props) => {
	return (
		<svg
			className={cn(
				'absolute inset-0 -z-10 h-full w-full stroke-white/5 [mask-image:radial-gradient(75%_90%_at_top_center,white,transparent)]',
				className
			)}
			aria-hidden='true'
		>
			<defs>
				<pattern
					id='hero'
					width='45'
					height='45'
					x='50%'
					y='-1'
					patternUnits='userSpaceOnUse'
				>
					<path d='M.5 200V.5H200' fill='none'></path>
				</pattern>
			</defs>
			<rect
				width='100%'
				height='100%'
				strokeWidth='0'
				fill='url(#hero)'
			></rect>
		</svg>
	)
}

export default BackgroundPattern
