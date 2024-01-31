import { Github } from '@/icons'
import Link from 'next/link'
import { Button } from './ui'

const Hero = () => {
	return (
		<section className='relative flex h-[31.25rem] w-full flex-col items-center justify-center gap-7 max-w-6xl mx-auto'>
			<span className='absolute -top-80 -z-[1] h-full w-3/4 bg-gradient-radial from-neutral-800 to-slate-500/50 opacity-20 blur-3xl'></span>

			<span className='absolute left-0 -z-[1] h-full w-96 bg-gradient-radial from-neutral-800 to-slate-500/50 rotate-90 blur-3xl opacity-20'></span>

			<h1 className='relative font-bold text-7xl animate-fade-up animate-delay-300'>
				Extract
				<span className='text-transparent bg-flow animate-flow bg-clip-text'>
					Hub
				</span>
				<span className='absolute w-10 h-10 rounded-full bg-flow animate-flow blur-3xl'></span>
			</h1>

			<p className='max-w-[70ch] text-pretty text-base lg:text-xl text-foreground/50 text-center animate-fade-up animate-delay-500'>
				ExtractHub is a powerful web scraping tool that navigates the vast
				seas of information on the internet, efficiently harvesting valuable
				data for your needs.
			</p>

			<Link href='/scraper' tabIndex={-1}>
				<Button
					className='w-24 h-10 pl-2 bg-transparent border-none shinny animate-fade-up animate-delay-700 custom'
					variant='ghost'
				>
					<span className='absolute z-[2] flex items-center justify-center h-[96%] w-[98%] rounded-md ml-[.5625rem] bg-neutral-900/80'>
						Scrap now
					</span>
				</Button>
			</Link>
			<Link
				href='https://github.com/Chust3r/json-scrapper'
				target='_blank'
				tabIndex={-1}
				className='absolute top-0 right-0 m-3'
			>
				<Github />
			</Link>
		</section>
	)
}

export default Hero
