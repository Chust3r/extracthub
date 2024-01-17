'use client'

import { Switch } from '../ui/switch'
import { PopoverContent, PopoverTrigger } from '@radix-ui/react-popover'
import { Popover } from '../ui/popover'
import { Button } from '../ui/button'
import { Attributes, Bolt, Check, Cog, Hashtag } from '@/icons'
import { store, updateStore } from '@/stores/codeblock-store'
import { useStore } from '@nanostores/react'
import { cn } from '@/lib/utils'

export const ConfigCodeblok = () => {
	const { showLineNumbers, wrapLongLines } = useStore(store)

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button variant='outline' size='icon' className='custom'>
					<Cog className='w-4 h-4' />
				</Button>
			</PopoverTrigger>
			<PopoverContent className='relative flex flex-col gap-2 p-4 m-2 overflow-hidden border rounded-md select-none bg-neutral-900 w-60'>
				<span className='w-full h-20 bg-gradient-radial from-gray-500/50 to-stone-500 opacity-50 absolute blur-3xl z-[1] -top-14'></span>
				<div className='flex items-center justify-between mb-2'>
					<p className='font-medium'>Config</p>
				</div>

				<div className='z-10 flex items-center justify-between'>
					<label
						htmlFor='switch-show-line-numbers'
						className={cn(
							'text-sm font-medium text-foreground duration-300 cursor-pointer',
							{
								'text-green-500': showLineNumbers,
							}
						)}
					>
						Show line numbers
					</label>
					<Switch
						id='switch-show-line-numbers'
						checked={showLineNumbers}
						onCheckedChange={(v) => updateStore('showLineNumbers', v)}
					/>
				</div>

				<div className='z-10 flex items-center justify-between'>
					<label
						htmlFor='switch-wrap-long-lines'
						className={cn(
							'text-sm font-medium text-foreground duration-300 cursor-pointer',
							{
								'text-green-500': wrapLongLines,
							}
						)}
					>
						Wrap long lines
					</label>
					<Switch
						id='switch-wrap-long-lines'
						checked={wrapLongLines}
						onCheckedChange={(v) => updateStore('wrapLongLines', v)}
					/>
				</div>
			</PopoverContent>
		</Popover>
	)
}
