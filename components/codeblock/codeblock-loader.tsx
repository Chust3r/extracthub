const CodeblockLoader = ({ isLoading = false }: { isLoading: boolean }) => {
	if (!isLoading) return null
	return (
		<div className='absolute inset-0 flex items-center justify-center w-full h-full'>
			<span className='loader'></span>
		</div>
	)
}

export default CodeblockLoader
