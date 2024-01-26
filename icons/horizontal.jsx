import { cn } from '@/lib/utils'

export const Horizontal = ({ className = '', ...props }) => {
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
			<path d='M12 3h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-9' fill='none'></path>
			<path
				d='M3 17V5a2 2 0 0 1 2-2h7a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2Z'
				fill='none'
			></path>
		</svg>
	)
}
