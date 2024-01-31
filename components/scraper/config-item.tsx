'use client'

import { Attributes, Bolt, Cog, Multiple, Trash } from '@/icons'
import { FormValues } from '@/types/scraper-types'
import { UseFormReturn } from 'react-hook-form'
import { Button } from '../ui/button'
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Switch } from '../ui/switch'

interface ComponentProps {
	index: number
	form: UseFormReturn<FormValues, any, undefined>
	onRemove: () => void
}

const ConfigItem = ({ index, form, onRemove }: ComponentProps) => {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button variant='secondary' className='custom'>
					<Cog className='w-4 h-4' />
				</Button>
			</PopoverTrigger>
			<PopoverContent className='relative flex flex-col gap-4 overflow-hidden select-none'>
				<span className='w-full h-20 bg-gradient-radial from-gray-500/50 to-stone-500 opacity-50 absolute blur-3xl -z-[1] top-20'></span>
				<div className='flex items-center justify-between'>
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
									<FormLabel className='flex items-center gap-2'>
										<Attributes className='w-4 h-4' />
										<span>Attributes</span>
									</FormLabel>
									<FormControl>
										<Input
											placeholder='selector'
											{...field}
											className='custom'
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
								<FormItem className='flex col-span-5'>
									<FormLabel htmlFor='switch'>
										<FormDescription className='flex items-center gap-2'>
											<Multiple className='w-8 h-8' />
											<span>
												Enable multiple selection of items, return
												an Array
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
								<FormLabel className='flex items-center gap-2'>
									<Bolt className='w-4 h-4' />
									<span>Limit</span>
								</FormLabel>
								<FormControl>
									<Input
										placeholder='limit'
										{...field}
										className='custom'
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
