import { map } from 'nanostores'

interface Store {
	showLineNumbers: boolean
	wrapLongLines: boolean
	orientation: 'horizontal' | 'vertical'
}

export const store = map<Store>({
	showLineNumbers: true,
	wrapLongLines: false,
	orientation: 'vertical',
})

type storeKey = keyof Store

export const updateStore = (key: storeKey, value: any) => {
	store.setKey(key, value)
}
