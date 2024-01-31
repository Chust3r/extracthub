import BackgroundPattern from './background-pattern'

const Footer = () => {
	return (
		<footer className='relative flex justify-center py-10 text-xs font-medium text-foreground/70 '>
			<BackgroundPattern className='rotate-180' />
			<span className='absolute -z-[1] h-14 w-1/2 bg-gradient-radial from-neutral-800 to-slate-500/50 opacity-20 blur-3xl animate-pulse'></span>
			<div className='flex gap-2'>
				<p className='items-center justify-center '>
					© 2023 ExtractHub
				</p>
				<p>All rights reserved.</p>
			</div>
		</footer>
	)
}

export default Footer
