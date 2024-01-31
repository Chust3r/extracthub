import { cn } from '@/lib/utils'

export const Plus = ({ className = '', ...props }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			strokeWidth='1.5'
			stroke='currentColor'
			className={cn('w-6 h-6', className)}
			{...props}
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M12 4.5v15m7.5-7.5h-15'
			/>
		</svg>
	)
}

