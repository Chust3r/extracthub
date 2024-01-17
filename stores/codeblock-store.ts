import { map } from 'nanostores'

interface Store {
	showLineNumbers: boolean
	wrapLongLines: boolean
}

export const store = map<Store>({
	showLineNumbers: true,
	wrapLongLines: false,
})

type storeKey = keyof Store

export const updateStore = (key: storeKey, value: boolean) => {
	store.setKey(key, value)
}
