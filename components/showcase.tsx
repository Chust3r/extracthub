import Image from 'next/image'
import React from 'react'
import img1 from '@/public/images/1.png'
import Ticker from './ticker'
import {
	Adidas,
	Amazon,
	Dev,
	Google,
	Nike,
	Npm,
	Wordpress,
	Youtube,
} from '@/icons'
const Showcase = () => {
	return (
		<section className='w-full py-5 max-w-6xl mx-auto flex flex-col gap-20 px-9'>
			<Image
				src={img1}
				alt=''
				width={1080}
				height={519}
				quality={100}
				className='overflow-hidden rounded-md mx-auto intersect:animate-fade-up intersect:delay-1000'
				priority
			/>

			<div className='flex flex-col md:flex-row gap-5 md:gap-10 w-full justify-between'>
				<h2 className='text-4xl  w-full md:w-[80ch] text-balance font-medium intersect:animate-fade-right intersect:animate-delay-300'>
					Who said that <span className='text-primary'>extracting</span>{' '}
					data is boring?
				</h2>
				<p className='text-pretty text-foreground/70 intersect:animate-fade-left intersect:animate-delay-300'>
					ExtractHub stands out as an innovative platform due to its
					advanced data extraction capabilities, offering users seamless
					access to a wealth of structured information across diverse
					sources. Its user-friendly interface and powerful features make
					data extraction a swift and efficient process, setting it apart
					in the realm of web scraping tools
				</p>
			</div>

			<div>
				<Ticker >
					<Youtube className='w-14 h-14' />
					<Google className='w-14 h-14' />
					<Amazon className='w-28 h-14' />
					<Dev className='w-14 h-14' />
					<Wordpress className='w-14 h-14' />
					<Adidas className='w-14 h-14' />
					<Nike className='w-14 h-14' />
					<Npm className='w-14 h-14' />
				</Ticker>
			</div>
		</section>
	)
}

export default Showcase
