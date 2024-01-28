'use client'

import { Switch } from './ui/switch'
import { PopoverContent, PopoverTrigger } from '@radix-ui/react-popover'
import { Popover } from './ui/popover'
import { Button } from './ui/button'
import { Cog, Horizontal, Vertical } from '@/icons'
import { store, updateStore } from '@/stores/config-store'
import { useStore } from '@nanostores/react'
import { cn } from '@/lib/utils'

export const Config = () => {
	const { showLineNumbers, wrapLongLines, orientation } = useStore(store)

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button variant='outline' size='icon' className='custom'>
					<Cog className='w-4 h-4' />
				</Button>
			</PopoverTrigger>
			<PopoverContent className='relative z-10 flex flex-col gap-3 p-4 m-2 overflow-hidden border rounded-md select-none bg-neutral-900 w-60'>
				<span className='w-full h-20 bg-gradient-radial from-gray-500/50 to-stone-500 opacity-50 absolute blur-3xl z-[1] -top-14'></span>
				<div className='flex items-center justify-between mb-2'>
					<p className='font-medium'>Editor Config</p>
				</div>

				<div className='flex flex-col'>
					<span className='text-sm font-medium text-foreground'>
						Layout
					</span>
					<div className='flex'>
						<Button
							variant='ghost'
							className='border-none'
							size='icon'
							onClick={() => updateStore('orientation', 'vertical')}
						>
							<Vertical
								className={cn('w-8 h-8', {
									'stroke-primary': orientation === 'vertical',
								})}
							/>
						</Button>
						<Button
							variant='ghost'
							className='border-none'
							size='icon'
							onClick={() => updateStore('orientation', 'horizontal')}
						>
							<Horizontal
								className={cn('w-8 h-8', {
									'stroke-primary': orientation === 'horizontal',
								})}
							/>
						</Button>
					</div>
				</div>

				<div className='z-10 flex items-center justify-between'>
					<label
						htmlFor='switch-show-line-numbers'
						className='text-sm font-medium duration-300 cursor-pointer text-foreground'
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
						className='text-sm font-medium text-foreground duration-300 cursor-pointer'
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


