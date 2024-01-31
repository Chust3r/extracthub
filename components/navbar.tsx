import { ExtractHub } from '@/icons'
import Link from 'next/link'
import { Config } from './config'

const Navbar = () => {
	return (
		<nav className='flex justify-between w-full py-2'>
			<div className='flex gap-2'>
				<ExtractHub />
				<Link href='/'>
					<h2 className='text-xl font-medium animate-fade-right animate-delay-300'>
						Extract
						<span className='font-bold text-transparent bg-flow animate-flow bg-clip-text'>
							Hub
						</span>
					</h2>
				</Link>
			</div>
			<Config />
		</nav>
	)
}

export default Navbar
