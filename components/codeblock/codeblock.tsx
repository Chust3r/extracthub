'use client'

import { ScraperStore, updateStore } from '@/stores/scrapper-store'
import { ConfigStore} from '@/stores/config-store'
import { useStore } from '@nanostores/react'
import Code from 'react-syntax-highlighter'
import { a11yDark as style } from 'react-syntax-highlighter/dist/esm/styles/prism'
import CopyToClipboard from '../copy-to-clipboard'
import { useEffect } from 'react'
import CodebloLoader from './codeblock-loader'

const Codeblock = () => {
	const { isLoading, data } = useStore(ScraperStore)
	const { showLineNumbers, wrapLongLines } = useStore(ConfigStore)

	useEffect(() => {
		return () => {
			updateStore({ isLoading: false, data: {} })
		}
	}, [])

	return (
		<section className='relative w-full h-full px-2 py-3 bg-neutral-900'>
			
			<div className='absolute top-0 left-0 flex gap-2 m-3'>
				<span className='w-3 h-3 rounded-full bg-neutral-800' />
				<span className='w-3 h-3 rounded-full bg-neutral-800' />
				<span className='w-3 h-3 rounded-full bg-neutral-800' />
			</div>

			<CodebloLoader isLoading={isLoading} />

			<CopyToClipboard
				text={JSON.stringify(data, null, 3)}
				className='absolute top-0 right-0 m-3'
			/>

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
