'use client'
import {
	Form,
	FormField,
	FormItem,
	FormControl,
	FormMessage,
} from '@/components/ui/form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button } from './ui/button'
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form'
import { Input } from './ui/input'
import { store, updateStore } from '@/stores/scrapper-store'
import { adapater } from '@/lib/scraper-adapter'
import Trash from '@/icons/trash'
import Hashtag from '@/icons/hashtag'
import Key from '@/icons/key'
import Plus from '@/icons/plus'
import { scraper } from '@/actions/playwright-scraper'
import { FormValues, Field } from '@/types/scraper-types'
import { useStore } from '@nanostores/react'
import ConfigItem from './config-item'

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
				limit: yup.number().required(),
			})
		)
		.required(),
})

const classInput = 'bg-neutral-900/50 backdrop-blur border'

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
		<Form {...form}>
			<form
				onSubmit={handleSubmit(onSubmit)}
				autoComplete='off'
				className='flex flex-col gap-4 p-5 overflow-y-auto overflow-hidden h-full'
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
										className={classInput}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button disabled={isLoading} className='text-white bg-green-500'>
						{isLoading ? (
							<span className='loader !w-4 !h-4'></span>
						) : (
							<span>Scrap</span>
						)}
					</Button>
				</div>

				<div className='flex flex-col gap-2'>
					<div className='grid grid-cols-10 gap-3 w-full items-center font-medium text-sm'>
						<p className='w-full col-span-4 flex gap-2 items-center'>
							<Hashtag className='w-3 h-3' />
							<span>Name</span>
						</p>
						<p className='w-full col-span-5 flex gap-2 items-center'>
							<Key className='w-3 h-3' />
							<span>Selector</span>
						</p>
						<Button
							type='button'
							variant='secondary'
							onClick={addNewField}
							className={`max-w-full ${classInput}`}
						>
							<Plus className='w-4 h-4' />
						</Button>
					</div>

					{fields.map((f, i) => (
						<div key={f.id} className='grid grid-cols-10 gap-3 w-full'>
							<FormField
								name={`selectors.${i}.key`}
								render={({ field }) => (
									<FormItem className='col-span-4'>
										<FormControl>
											<Input
												placeholder='name'
												{...field}
												className={classInput}
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
													className={classInput}
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
	)
}

export default ScraperForm
