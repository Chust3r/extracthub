import Link from 'next/link'
import React from 'react'
import { Config } from './config'
import { ExtractHub } from '@/icons'

const Navbar = () => {
	return (
		<nav className='flex justify-between py-2 w-full'>
			<div className='flex gap-2'>
				<ExtractHub/>
				<Link href='/'>
					<h2 className='text-xl font-medium animate-fade-right animate-delay-300'>
						Extract
						<span className='text-green-500'>Hub</span>
					</h2>
				</Link>
			</div>
			<Config />
		</nav>
	)
}

export default Navbar
