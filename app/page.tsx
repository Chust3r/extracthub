import BackgroundPattern from '@/components/background-pattern'
import Footer from '@/components/footer'
import Landing from '@/components/hero'
import Showcase from '@/components/showcase'

const Page = () => {
	return (
		<>
			<main className='flex flex-col w-full h-full pb-10'>
				<BackgroundPattern/>
				<Landing />
				<Showcase />
			</main>
			<Footer/>
		</>
	)
}

export default Page
