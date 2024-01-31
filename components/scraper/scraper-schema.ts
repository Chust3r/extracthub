import * as yup from 'yup'

export const schemaValidation = yup.object().shape({
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
