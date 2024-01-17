import { Heart } from '@/icons'
import React from 'react'

const Footer = () => {
	return (
		<footer className='flex justify-center py-5 text-xs font-medium text-foreground/50'>
			<p className='flex items-center justify-center gap-2'>
				<span>Made with</span>
				<span>
					<Heart className='w-3 h-3 fill-red-500 stroke-red-500' />
				</span>
				<span>by Chuster</span>
			</p>
		</footer>
	)
}

export default Footer
