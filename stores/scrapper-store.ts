import { map } from 'nanostores'

interface Store {
	data?: {}
	isLoading: boolean
}

export const ScraperStore = map<Store>({
	data: {},
	isLoading: false,
})

export const updateStore = ({ data, isLoading = false }: Store) => {
	ScraperStore.setKey('data', data || ScraperStore.get().data)
	ScraperStore.setKey('isLoading', isLoading)
}
