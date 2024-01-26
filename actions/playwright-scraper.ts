'use server'

import { chromium, Page } from 'playwright'

import { Config, InfoData, SResponse } from '@/types/scraper-types'

// → Get attribute form many elements

const getMultipleAtributeValue = async (
	page: Page,
	selector: string,
	attributes: string[],
	limit: number
) => {
	const data = await page.evaluate(
		({ s, a, l }) => {
			let _data_: any = []

			try {
				const elements = document.querySelectorAll(s)

				// → if the element doesnt exist return athis message

				if (elements.length === 0)
					return (_data_ = `The element does not exist, check your selector ${s}`)

				let xd: InfoData[] = []

				for (const el of Array.from(elements).slice(0, l)) {
					// → if there is only one attribute returns its value

					if (a.length === 1) {
						const attribute = a[0]

						if (attribute.includes('text')) {
							xd.push(el?.textContent)
						} else {
							xd.push(el?.getAttribute(attribute))
						}
					} else {
						const _xd: InfoData = {}

						for (const attribute of a) {
							if (attribute.includes('text')) {
								_xd[attribute] = el?.textContent
							} else {
								_xd[attribute] = el?.getAttribute(attribute)
							}
						}

						xd.push(_xd)
					}
				}

				_data_ = xd

				// → handle errors
			} catch (e) {
				_data_ = `${e}`
			}

			// → return data

			return _data_
		},
		{ s: selector, a: attributes, l: limit }
	)

	return data as InfoData
}

// → Get attribute from a element

const getAtributeValue = async (
	page: Page,
	selector: string,
	attributes: string[]
) => {
	const data = await page.evaluate(
		({ s, a }) => {
			let _data_: InfoData = {}

			try {
				const el = document.querySelector(s)

				// → if the element doesnt exist return athis message

				if (!el)
					return (_data_ = `The element does not exist, check your selector ${s}`)

				// → if there is no element return the default content

				if (a?.length === 0) {
					_data_ = el?.textContent
					return _data_
				}

				// → if there is only one attribute returns its value

				if (a.length === 1) {
					const attribute = a[0]

					if (attribute.includes('text')) {
						_data_ = el?.textContent
					} else {
						_data_ = el?.getAttribute(attribute)
					}

					return _data_
				}

				// → get all values of each one of the attributes

				for (const attribute of a) {
					if (attribute.includes('text')) {
						_data_[attribute] = el?.textContent
					} else {
						_data_[attribute] = el?.getAttribute(attribute)
					}
				}

				// → handle errors
			} catch (e) {
				_data_ = `${e}`
			}

			// → return data

			return _data_
		},
		{ s: selector, a: attributes }
	)

	return data as InfoData
}

// → Get data

const getData = async (page: Page, config: Config) => {
	const { selectors } = config

	// → Get all selectors

	const data: SResponse = {}

	if (Object.keys(selectors).length === 0) {
		data['msg'] = 'Please add selectors '

		return data
	}

	for (const key in selectors) {
		const {
			selector,
			attributes,
			limit = 5,
			multiple = false,
		} = selectors[key]

		let res: InfoData

		if (multiple) {
			res = await getMultipleAtributeValue(page, selector, attributes, limit)
		} else {
			res = await getAtributeValue(page, selector, attributes)
		}

		data[key] = res
	}

	// → Return data

	return data
}

export const scraper = async (url: string, config: Config) => {
	//→ Default config

	const browser = await chromium.launch({ headless: true, slowMo: 5000 })
	const context = await browser.newContext()

	const page = await context.newPage()

	//→ Go to URL

	await page.goto(url, {
		waitUntil: 'domcontentloaded',
	})

	// → Get data

	const data = await getData(page, config)

	// → Close all

	await context.close()
	await browser.close()

	return data
}
