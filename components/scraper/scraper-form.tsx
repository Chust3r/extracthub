'use client'
import {
	Form,
	FormField,
	FormItem,
	FormControl,
	FormMessage,
} from '@/components/ui/form'
import * as yup from 'yup'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form'
import { store, updateStore } from '@/stores/scrapper-store'
import { adapater } from '@/lib/scraper-adapter'
import { Tag, Key, Plus } from '@/icons'
import { scraper } from '@/actions/playwright-scraper'
import { FormValues, Field } from '@/types/scraper-types'
import { useStore } from '@nanostores/react'
import ConfigItem from './config-item'
import Navbar from '../navbar'

const defaultValues: Field[] = [
	{
		key: 'title',
		selector: 'title',
		attributes: 'text',
		multiple: false,
		limit: 5,
	},
]

const schemaValidation = yup.object().shape({
	url: yup.string().url('Enter a valid URL').required('Field required'),
	selectors: yup
		.array()
		.of(
			yup.object().shape({
				key: yup.string().required('Field required'),
				selector: yup.string().required('Field required'),
				attributes: yup.string().required('Field required'),
				multiple: yup.boolean().required(),
				limit: yup
					.number()
					.integer('Only integer numbers')
					.default(5)
					.required()
					.typeError('Only numbers'),
			})
		)
		.required(),
})

const ScraperForm = () => {
	const { isLoading } = useStore(store)

	const form = useForm<FormValues>({
		defaultValues: {
			url: '',
			selectors: defaultValues,
		},
		resolver: yupResolver(schemaValidation),
	})

	const { control, handleSubmit } = form

	const { fields, append, remove } = useFieldArray({
		name: 'selectors',
		control,
	})

	const addNewField = () => {
		append({
			key: '',
			selector: '',
			attributes: 'text',
			limit: 5,
			multiple: false,
		})
	}

	const onSubmit: SubmitHandler<FormValues> = async (values) => {
		updateStore({ isLoading: true })

		const { URL, selectors } = adapater(values)

		const data = await scraper(URL, { selectors })

		updateStore({ data, isLoading: false })
	}

	return (
		<section className='relative h-fit max-h-full px-3 overflow-hidden overflow-y-auto	'>
			<Navbar />
			<Form {...form}>
				<form
					onSubmit={handleSubmit(onSubmit)}
					autoComplete='off'
					className='flex flex-col h-full gap-4'
				>
					<div className='flex gap-3 '>
						<FormField
							name='url'
							render={({ field }) => (
								<FormItem className='flex-1'>
									<FormControl>
										<Input
											placeholder='Your URL'
											{...field}
											className='custom'
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button
							disabled={isLoading}
							className='text-white bg-green-500'
						>
							{isLoading ? (
								<span className='loader !w-4 !h-4'></span>
							) : (
								<span>Scrap</span>
							)}
						</Button>
					</div>
					<div className='flex flex-col gap-2 pb-5 '>
						<div className='grid items-center w-full grid-cols-10 gap-3 text-sm font-medium'>
							<p className='flex items-center w-full col-span-4 gap-2'>
								<Tag className='w-3 h-3' />
								<span>Name</span>
							</p>
							<p className='flex items-center w-full col-span-5 gap-2'>
								<Key className='w-3 h-3' />
								<span>Selector</span>
							</p>
							<Button
								type='button'
								variant='secondary'
								onClick={addNewField}
								className='max-w-full custom'
							>
								<Plus className='w-4 h-4' />
							</Button>
						</div>
						{fields.map((f, i) => (
							<div key={f.id} className='grid w-full grid-cols-10 gap-3'>
								<FormField
									name={`selectors.${i}.key`}
									render={({ field }) => (
										<FormItem className='col-span-4'>
											<FormControl>
												<Input
													placeholder='name'
													{...field}
													className='custom'
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									name={`selectors.${i}.selector`}
									render={({ field }) => {
										return (
											<FormItem className='col-span-5'>
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
								<ConfigItem
									form={form}
									index={i}
									onRemove={() => remove(i)}
								/>
							</div>
						))}
					</div>
				</form>
			</Form>
		</section>
	)
}

export default ScraperForm
