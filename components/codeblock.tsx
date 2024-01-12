'use client'

import './codeblock.css'
import { store } from '@/stores/scrapper-store'
import { useStore } from '@nanostores/react'
import Code from 'react-syntax-highlighter'
import { a11yDark as style } from 'react-syntax-highlighter/dist/esm/styles/prism'

const Codeblock = () => {
	const { isLoading, data } = useStore(store)

	return (
		<div className='bg-neutral-900 relative p-2 w-full h-full'>
			{isLoading && (
				<div className='absolute w-full h-full bg-neutral-900/50 inset-0 flex items-center justify-center'>
					<span className='loader'></span>
				</div>
			)}

			<Code
				language='json'
				style={style}
				wrapLines
				wrapLongLines
				showLineNumbers
				customStyle={{
					height: '100%',
					background: 'transparent',
					fontSize: '13px',
					overflowY: 'auto',
					overflowX: 'clip',
					zIndex: 10,
				}}
			>
				{JSON.stringify(data, null, 3)}
			</Code>
		</div>
	)
}

export default Codeblock
