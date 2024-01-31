import Image from 'next/image'
import React from 'react'
import img1 from '@/public/images/1.png'
import img2 from '@/public/images/2.png'
import Ticker from './ticker'
import {
	Adidas,
	Amazon,
	Dev,
	Google,
	Medium,
	Nike,
	Npm,
	Wordpress,
	Youtube,
} from '@/icons'
import ShinnyWrapper from './shinny-wrapper'

const Showcase = () => {
	return (
		<section className='flex flex-col w-full max-w-6xl gap-20 py-5 mx-auto px-9'>
			<ShinnyWrapper
				className='mx-auto overflow-hidden rounded-md intersect:animate-fade-up intersect:delay-1000 intersect-once'
				style={{
					'--duration': '30s',
				}}
			>
				<Image
					src={img1}
					alt=''
					width={1080}
					height={519}
					quality={100}
					priority
					sizes='(min-width:18.75rem)'
					className='hidden overflow-hidden rounded-md md:block'
				/>
				<Image
					src={img2}
					alt=''
					width={1080}
					height={519}
					quality={100}
					priority
					sizes='(min-width:18.75rem)'
					className='block overflow-hidden rounded-md md:hidden'
				/>
			</ShinnyWrapper>

			<div className='flex flex-col justify-between w-full gap-5 md:flex-row md:gap-10'>
				<h2 className='text-4xl text-foreground/70  w-full md:w-[80ch] text-balance font-medium intersect:animate-fade-right intersect:animate-delay-300 intersect-once'>
					Who said that{' '}
					<span className='text-transparent bg-flow animate-flow bg-clip-text'>
						extracting
					</span>{' '}
					data is boring?
				</h2>
				<p className='text-pretty text-foreground/50 intersect:animate-fade-left intersect:animate-delay-300 intersect-once'>
					ExtractHub revolutionizes data extraction from the web, providing
					a comprehensive solution that navigates the digital landscape
					with efficiency. Seamlessly collecting, organizing, and
					delivering valuable insights, ExtractHub empowers your analytics
					with speed, precision, and ease, making information discovery a
					seamless journey.
				</p>
			</div>

			<Ticker>
				<Medium className='w-14 h-14' />
				<Youtube className='w-14 h-14' />
				<Google className='w-14 h-14' />
				<Amazon className='w-28 h-14' />
				<Dev className='w-14 h-14' />
				<Wordpress className='w-14 h-14' />
				<Adidas className='w-14 h-14' />
				<Nike className='w-14 h-14' />
				<Npm className='w-14 h-14' />
			</Ticker>

			<h3 className='ml-auto text-3xl font-medium text-foreground/70 intersect:animate-fade-left intersect:animate-delay-300 text-balance intersect-once'>
				Extract data from{' '}
				<span className='text-transparent uppercase bg-flow animate-flow bg-clip-text'>
					anywhere
				</span>
			</h3>
		</section>
	)
}

export default Showcase
