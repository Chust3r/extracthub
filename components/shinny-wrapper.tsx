import { cn } from '@/lib/utils'
import React from 'react'

interface Props {
	children: React.ReactNode
	className?: string
	style?: Record<string, string> | React.CSSProperties
}

const ShinnyWrapper = ({ children, className, style }: Props) => {
	return (
		<div
			className={cn('w-fit h-fit p-[1px] shinny ', className)}
			tabIndex={-1}
			role='img'
			style={style}
		>
			{children}
		</div>
	)
}

export default ShinnyWrapper
