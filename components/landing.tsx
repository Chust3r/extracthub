import React from 'react'

const Landing = () => {
	return (
		<section className='w-full h-[500px] flex flex-col gap-7 items-center justify-center relative'>
			<span className='w-3/4 h-screen -top-52 bg-gradient-radial from-neutral-800 to-slate-500/50 opacity-20 absolute blur-3xl -z-[1]'></span>
			<h2 className='text-6xl font-bold '>JSON Scraper</h2>
			<h3 className='max-w-[70ch] text-pretty text-foreground/50 text-2xl'>
				Scraping data is like collecting seashells on the digital shore
			</h3>
		</section>
	)
}

export default Landing
