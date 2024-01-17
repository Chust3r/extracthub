import { cn } from '@/lib/utils'

export const Check = ({ className = '', ...props }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			strokeWidth={1.5}
			stroke='currentColor'
			className={cn('w-5 h-5', className)}
			{...props}
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='m4.5 12.75 6 6 9-13.5'
			/>
		</svg>
	)
}

export default Check
