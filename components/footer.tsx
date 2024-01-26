import React from 'react'
import BackgroundPattern from './background-pattern'

const Footer = () => {
	return (
		<footer className='flex justify-center py-10 text-xs font-medium text-foreground/70 relative '>
			<BackgroundPattern className='rotate-180' />
			<span className='absolute -z-[1] h-14 w-1/2 bg-gradient-radial from-neutral-800 to-slate-500/50 opacity-20 blur-3xl animate-pulse'></span>
			<p className='flex items-center justify-center'>
				© 2023 Extract<span className='text-primary'>Hub</span> - All rights
				reserved.
			</p>
		</footer>
	)
}

export default Footer
