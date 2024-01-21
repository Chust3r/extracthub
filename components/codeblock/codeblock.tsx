'use client'

import { store } from '@/stores/scrapper-store'
import { store as codeStore, updateStore } from '@/stores/config-store'
import { useStore } from '@nanostores/react'
import Code from 'react-syntax-highlighter'
import { a11yDark as style } from 'react-syntax-highlighter/dist/esm/styles/prism'
import CopyToClipboard from '../copy-to-clipboard'


const Codeblock = () => {
	const { isLoading, data } = useStore(store)
	const { showLineNumbers, wrapLongLines } = useStore(codeStore)

	return (
		<section className='relative w-full h-full px-2 py-3 bg-gradient-radial from-neutral-900/60'>
			{isLoading && (
				<div className='absolute inset-0 flex items-center justify-center w-full h-full'>
					<span className='loader'></span>
				</div>
			)}

			<div className='absolute flex justify-end w-full h-auto gap-1 px-4'>
				<CopyToClipboard text={JSON.stringify(data, null, 3)} />
			</div>

			<Code
				language='json'
				style={style}
				wrapLines
				wrapLongLines={wrapLongLines}
				showLineNumbers={showLineNumbers}
				customStyle={{
					height: '100%',
					background: 'transparent',
					fontSize: '14px',
					zIndex: 10,
				}}
			>
				{JSON.stringify(data, null, 3)}
			</Code>
		</section>
	)
}

export default Codeblock
