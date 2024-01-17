import { useState } from 'react'
import { Button } from './ui/button'
import { Clipboard, Check } from '@/icons'
import { cn } from '@/lib/utils'
import { clipboard } from '@/lib/clipboard'

interface Props {
	className?: string
	text: string
}

const CopyToClipboard = ({ className, text }: Props) => {
	const [isCopied, setIsCopied] = useState(false)

	const onCopy = async () => {
		setIsCopied(true)

		await clipboard(text)

		setTimeout(() => {
			setIsCopied(false)
		}, 1000)
	}

	return (
		<Button
			variant='outline'
			className={cn(className, 'custom')}
			size='icon'
			onClick={onCopy}
			disabled={isCopied}
		>
			<Clipboard
				className={cn('w-4 h-4 duration-500 absolute', {
					'scale-0': isCopied,
				})}
			/>
			<Check
				className={cn(
					'w-4 h-4 duration-500 stroke-green-400 scale-0 absolute',
					{
						'scale-1': isCopied,
					}
				)}
			/>
		</Button>
	)
}

export default CopyToClipboard
