import { cn } from '@/lib/utils'

export const Medium = ({ className = '', ...props }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 1770 1000'
			className={cn('w-5 h-5', className)}
			{...props}
			fill='white'
		>
			<circle cx='500' cy='500' r='500' />
			<ellipse ry='475' rx='250' cy='501' cx='1296' />
			<ellipse cx='1682' cy='502' rx='88' ry='424' />
		</svg>
	)
}
