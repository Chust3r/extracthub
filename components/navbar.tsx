import Link from 'next/link'
import React from 'react'
import { Config } from './config'

const Navbar = () => {
	return (
		<nav className='flex justify-between p-3 w-full'>
			<Link href='/'>
				<h2 className='text-xl font-medium'>
					Extract
					<span className='text-green-500'>Hub</span>
				</h2>
			</Link>
			<Config />
		</nav>
	)
}

export default Navbar
