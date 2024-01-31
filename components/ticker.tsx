import React from 'react'

interface Props {
	children: React.ReactNode
}

const Ticker = ({ children }: Props) => {
	return (
		<div className='w-full mx-auto ticker grayscale intersect:animate-fade-up animate-delay-700 intersect-once'>
			<div className='ticker-slide'>{children}</div>
			<div className='ticker-slide'>{children}</div>
		</div>
	)
}

export default Ticker
