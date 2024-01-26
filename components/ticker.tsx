import React from 'react'

interface Props {
	children: React.ReactNode
}

const Ticker = ({ children }: Props) => {
	return (
		<div className='ticker w-full mx-auto grayscale intersect:animate-fade-up animate-delay-700'>
			<div className='ticker-slide'>{children}</div>
			<div className='ticker-slide'>{children}</div>
		</div>
	)
}

export default Ticker
