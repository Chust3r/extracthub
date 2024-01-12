import { map } from 'nanostores'

interface Store {
	data?: {}
	isLoading: boolean
}

export const store = map<Store>({
	data: {},
	isLoading: false,
})

export const updateStore = ({ data, isLoading = false }: Store) => {
	store.setKey('data', data || store.get().data)
	store.setKey('isLoading', isLoading)
}
