import Image from 'next/image'
import React from 'react'
import img1 from '@/public/images/1.png'

const Showcase = () => {
	return (
		<section className='w-full py-5'>
			<Image
				src={img1}
				alt=''
				width={1024}
				height={473}
				className='mx-auto overflow-hidden border rounded-md'
			/>
		</section>
	)
}

export default Showcase
