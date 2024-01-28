import Image from 'next/image'

const Bento = () => {
	return (
		<div className='grid grid-cols-12 gap-4 max-h-fit h-[600px]'>
			<div className='relative col-span-5 overflow-hidden rounded-md intersect:animate-fade-right intersect:animate-delay-300'>
				<div className='w-full h-full bg-neutral-800/30 animate-pulse'></div>
			</div>
			<div className='relative col-span-7 overflow-hidden rounded-md intersect:animate-fade-left intersect:animate-delay-300'>
				<div className='w-full h-full bg-neutral-800/30 animate-pulse'></div>
			</div>
			<div className='relative col-span-7 overflow-hidden rounded-md intersect:animate-fade-right intersect:animate-delay-500'>
				<div className='w-full h-full bg-neutral-800/30 animate-pulse'></div>
			</div>
			<div className='relative col-span-5 overflow-hidden rounded-md intersect:animate-fade-left intersect:animate-delay-700'>
				<div className='w-full h-full bg-neutral-800/30 animate-pulse'></div>
			</div>
		</div>
	)
}

export default Bento
