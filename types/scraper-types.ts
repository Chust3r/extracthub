export interface Config {
	selectors: {
		[key: string]: {
			selector: string
			attributes: string[]
			multiple?: boolean
			limit?: number
		}
	}
	multiple?: boolean
	limit?: number
}

export interface SResponse {
	[key: string]: string | null | {}
}

export type InfoData = { [key: string]: string | null } | string | null

export interface FormValues {
	url: string
	selectors: Field[]
}

export interface Field {
	key: string
	selector: string
	attributes: string
	multiple: boolean
	limit: number
}

export interface Selectors {
	[key: string]: {
		selector: string
		attributes: string[]
		multiple?: boolean
		limit?: number
	}
}
