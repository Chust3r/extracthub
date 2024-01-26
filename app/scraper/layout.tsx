import BackgroundPattern from '@/components/background-pattern'

interface Props {
	children: React.ReactNode
}

const ScraperLayout = ({ children }: Props) => {
	return (
		<main className='flex flex-col relative h-screen'>
			<BackgroundPattern />
			<span className='w-3/4 h-96 -top-52 bg-gradient-radial from-neutral-800 to-slate-500/80 opacity-20 absolute blur-3xl -z-[1]'></span>
			<span className='w-3/4 h-96 bottom-0 bg-gradient-radial from-stone-800/50 to-stone-500/70 opacity-20 absolute blur-3xl -z-[1] '></span>

			{children}
		</main>
	)
}

export default ScraperLayout
