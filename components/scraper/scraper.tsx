'use client'
import Codeblock from '@/components/codeblock/codeblock'
import ScraperForm from '@/components/scraper/scraper-form'
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from '@/components/ui/resizable'
import { ConfigStore } from '@/stores/config-store'
import { useStore } from '@nanostores/react'

const Scraper = () => {
	const { orientation } = useStore(ConfigStore)

	return (
		<ResizablePanelGroup
			direction={orientation}
			className='h-full min-h-[500px] relative overflow-hidden'
		>
			<ResizablePanel minSize={30}>
				<ScraperForm />
			</ResizablePanel>
			<ResizableHandle withHandle />
			<ResizablePanel minSize={15}>
				<Codeblock />
			</ResizablePanel>
		</ResizablePanelGroup>
	)
}

export default Scraper
