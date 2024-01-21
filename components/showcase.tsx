import Image from 'next/image'
import React from 'react'
import img1 from '@/public/images/1.png'

const Showcase = () => {
	return (
		<section className='w-full py-5 max-w-6xl mx-auto flex flex-col gap-16 '>
			<Image
				src={img1}
				alt=''
				width={1080}
				height={519}
				quality={100}
				className='overflow-hidden rounded-md mx-auto'
				priority
			/>

			<div className='flex flex-col md:flex-row gap-5 md:gap-10 w-full justify-between px-9'>
				<h2 className='text-3xl  w-full md:w-[80ch] text-balance font-medium '>
					Who said that extracting data is boring?
				</h2>
				<p className=' text-pretty text-foreground/70'>
					ExtractHub stands out as an innovative platform due to its
					advanced data extraction capabilities, offering users seamless
					access to a wealth of structured information across diverse
					sources. Its user-friendly interface and powerful features make
					data extraction a swift and efficient process, setting it apart
					in the realm of web scraping tools
				</p>
			</div>
		</section>
	)
}

export default Showcase
