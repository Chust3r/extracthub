import Link from 'next/link'
import { Button } from './ui/button'

const Hero = () => {
	return (
		<section className='relative flex h-[500px] w-full flex-col items-center justify-center gap-7 '>
			<span className='absolute -top-80 -z-[1] h-full w-3/4 bg-gradient-radial from-neutral-800 to-slate-500/50 opacity-20 blur-3xl'></span>

			<h1 className='relative text-7xl font-bold animate-fade-up animate-delay-300'>
				Extract<span className='text-green-500'>Hub</span>
				<span className='absolute w-10 h-10 bg-green-500 rounded-full blur-3xl'></span>
			</h1>

			<p className='max-w-[70ch] text-pretty text-base lg:text-xl text-foreground/50 text-center animate-fade-up animate-delay-500'>
				ExtractHub is a powerful web scraping tool that navigates the vast
				seas of information on the internet, efficiently harvesting valuable
				data for your needs.
			</p>
			<Link href='/scraper'>
				<Button
					className='custom animate-fade-up animate-delay-700'
					variant='secondary'
				>
					Scrap now
				</Button>
			</Link>
		</section>
	)
}

export default Hero
