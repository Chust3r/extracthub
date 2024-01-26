'use client'
import ScraperForm from '@/components/scraper/scraper-form'
import Codeblock from '@/components/codeblock/codeblock'
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from '@/components/ui/resizable'
import { useStore } from '@nanostores/react'
import { store } from '@/stores/config-store'

const Scraper = () => {
	const { orientation } = useStore(store)
	

	return (
		<ResizablePanelGroup
			direction={orientation}
			className='h-full min-h-[500px] relative overflow-hidden'
		>
			<ResizablePanel className='min-w-[600px]'>
				<ScraperForm />
			</ResizablePanel>
			<ResizableHandle withHandle />
			<ResizablePanel className='min-w-[250px]'>
				<Codeblock />
			</ResizablePanel>
		</ResizablePanelGroup>
	)
}

export default Scraper
