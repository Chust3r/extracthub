import { cn } from '@/lib/utils'

export const ExtractHub = ({ className = '', ...props }) => {
	return (
		<svg
			className={cn('w-7 h-7 rotate-180', className)}
			{...props}
			width='25px'
			height='25px'
			viewBox='0 0 128.00 128.00'
			aria-hidden='true'
			role='img'
			class='iconify iconify--noto'
			preserveAspectRatio='xMidYMid meet'
			fill='#ffffff'
		>
			<g id='SVGRepo_bgCarrier' stroke-width='0' />

			<g
				id='SVGRepo_tracerCarrier'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>

			<g id='SVGRepo_iconCarrier'>
				<path
					d='M98.89 36.51c1.23 0 2.24-1 2.24-2.24V17.55c0-1.24-1.01-2.24-2.24-2.24H29.1c-1.24 0-2.24 1-2.24 2.24v100.97c0 1.24 1 2.24 2.24 2.24h69.8c1.23 0 2.24-1 2.24-2.24V101.8c0-1.24-1.01-2.24-2.24-2.24H53.24V77.51h35.12c1.23 0 2.24-1 2.24-2.24V58.55c0-1.24-1.01-2.24-2.24-2.24H53.24v-19.8h45.65z'
					fill='#ffffff'
				/>
			</g>
		</svg>
	)
}
