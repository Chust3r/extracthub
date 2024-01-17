'use client'
import ScraperForm from '@/components/scraper/scraper-form'
import Codeblock from '@/components/codeblock/codeblock'
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from '@/components/ui/resizable'

const Scraper = () => {
	return (
		<ResizablePanelGroup
			direction='horizontal'
			className='h-full min-h-[500px] relative overflow-hidden w-full'
		>
			<span className='w-3/4 h-96 -top-52 bg-gradient-radial from-neutral-800 to-slate-500/80 opacity-20 absolute blur-3xl -z-[1]'></span>
			<span className='w-3/4 h-96 bottom-0 bg-gradient-radial from-stone-800/50 to-stone-500/70 opacity-20 absolute blur-3xl -z-[1] '></span>
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
