import { FormValues, Selectors } from '@/types/scraper-types'

export const adapater = ({ url, selectors }: FormValues) => {
	const _selectors: Selectors = {}

	for (const _selector of selectors) {
		const { key, selector, attributes, limit, multiple } = _selector

		_selectors[key] = {
			selector,
			attributes: attributes?.split(','),
			limit,
			multiple,
		}
	}

	return {
		URL: url,
		selectors: _selectors,
	}
}
