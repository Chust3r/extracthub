import { map } from 'nanostores'

interface Store {
	showLineNumbers: boolean
	wrapLongLines: boolean
	orientation: 'horizontal' | 'vertical'
}

export const ConfigStore = map<Store>({
	showLineNumbers: false,
	wrapLongLines: false,
	orientation: 'horizontal',
})

type storeKey = keyof Store

export const updateStore = (key: storeKey, value: any) => {
	ConfigStore.setKey(key, value)
}
