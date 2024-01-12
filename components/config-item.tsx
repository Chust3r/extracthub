'use client'

import { Button } from './ui/button'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import {
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	FormControl,
	FormDescription,
} from './ui/form'
import Cog from '@/icons/cog'
import { Input } from './ui/input'
import { UseFormReturn } from 'react-hook-form'
import { FormValues } from '@/types/scraper-types'
import Attributes from '@/icons/attributes'
import { Switch } from './ui/switch'
import Trash from '@/icons/trash'
import Multiple from '@/icons/multiple'
import Bolt from '@/icons/bolt'

interface ComponentProps {
	index: number
	form: UseFormReturn<FormValues, any, undefined>
	onRemove: () => void
}

const classInput = 'bg-neutral-900/50 backdrop-blur border'

const ConfigItem = ({ index, form, onRemove }: ComponentProps) => {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant='secondary'
					className='bg-neutral-900/50 backdrop-blur border'
				>
					<Cog className='w-4 h-4' />
				</Button>
			</PopoverTrigger>
			<PopoverContent className='flex flex-col gap-4 relative overflow-hidden'>
				<span className='w-full h-20 bg-gradient-radial from-green-500/50 to-primary opacity-20 absolute blur-3xl -z-[1] top-20'></span>
				<div className='flex justify-between items-center'>
					<p className='font-medium'>Advanced config</p>
					<Button variant='secondary' onClick={onRemove}>
						<Trash className='w-4 h-4' />
					</Button>
				</div>
				<Form {...form}>
					<FormField
						name={`selectors.${index}.attributes`}
						render={({ field }) => {
							return (
								<FormItem className='col-span-5'>
									<FormLabel className='flex gap-2 items-center'>
										<Attributes className='w-4 h-4' />
										<span>Attributes</span>
									</FormLabel>
									<FormControl>
										<Input
											placeholder='selector'
											{...field}
											className={classInput}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)
						}}
					/>
					<FormField
						name={`selectors.${index}.multiple`}
						render={({ field }) => {
							return (
								<FormItem className='col-span-5 flex'>
									<FormLabel htmlFor='switch'>
										<FormDescription className='flex items-center gap-2'>
											<Multiple className='w-8 h-8' />
											<span>
												Enable multiple selection of items, default
												limit is 5
											</span>
										</FormDescription>
									</FormLabel>

									<FormControl>
										<Switch
											id='switch'
											checked={field.value}
											onCheckedChange={field.onChange}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)
						}}
					/>
				</Form>

				<FormField
					name={`selectors.${index}.limit`}
					render={({ field }) => {
						return (
							<FormItem className='col-span-5'>
								<FormLabel className='flex gap-2 items-center'>
									<Bolt className='w-4 h-4' />
									<span>Limit</span>
								</FormLabel>
								<FormControl>
									<Input
										placeholder='limit'
										{...field}
										className={classInput}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)
					}}
				/>
			</PopoverContent>
		</Popover>
	)
}

export default ConfigItem
