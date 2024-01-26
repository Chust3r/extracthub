import { cn } from '@/lib/utils'

export const Vertical = ({ className = '', ...props }) => {
	return (
		<svg
			viewBox='-8 -7 42 36'
			strokeWidth={2.5}
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			className={cn('w-6 h-6', className)}
			{...props}
		>
			<path d='M23 11V3H3v8h20Z' strokeWidth='0' fill='none'></path>
			<path
				d='M23 17V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2ZM22 11H4'
				fill='none'
			></path>
		</svg>
	)
}
