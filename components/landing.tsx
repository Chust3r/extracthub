import BackgroundPattern from './background-pattern'

const Landing = () => {
	return (
		<section className='relative flex h-[500px] w-full flex-col items-center justify-center gap-7 '>
			<BackgroundPattern />
			<span className='absolute -top-80 -z-[1] h-full w-3/4 bg-gradient-radial from-neutral-800 to-slate-500/50 opacity-20 blur-3xl'></span>

			<h1 className='relative text-6xl font-bold'>
				Extract<span className='text-green-500'>Hub</span>
				<span className='absolute w-10 h-10 bg-green-500 rounded-full blur-3xl'></span>
			</h1>

			<p className='max-w-[70ch] text-pretty text-lg lg:text-xl text-foreground/50 text-center'>
				ExtractHub is a powerful web scraping tool that navigates the vast
				seas of information on the internet, efficiently harvesting valuable
				data for your needs.
			</p>
		</section>
	)
}

export default Landing
