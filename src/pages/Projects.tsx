import { Icon } from '@iconify/react';
import { LogoTonegrid } from '../assets/LogoTonegrid.tsx';

export const Projects = () => {
	return (
		<div className='w-full h-[110%]'>
			<header className='grid h-15 border-b border-white/5 grid-cols-[7%_1fr_7%] w-full'>
				<div className='border-r border-white/5'></div>
				<div className='flex justify-center items-center text-inter font-light tracking-[0.15em]'>
					SOME OF MY WORKS
				</div>
				<div className='border-l border-white/5'></div>
			</header>
			<main
				className='h-full relative  isolate z-10 w-full grid grid-cols-[7%_1fr_7%]
  after:absolute after:inset-x-0 after:bottom-0 after:z-20 after:border-b after:border-base-darker after:pointer-events-none'
			>
				<div className='border-r  border-white/5'></div>
				<div className='pt-[7%] p-[10%] flex justify-center'>
					<div className='grid w-full grid-cols-3 gap-10 *:border *:border-white/5'>
						{/* Elit Wallpapers */}
						<div className='px-5 py-10 group hover:scale-105 hover:-translate-y-2 transition duration-400 flex flex-col items-center gap-20'>
							<div className='flex flex-col px-3 gap-2 items-center'>
								<h3 className='font-playfair group-hover:text-highlight-light transition duration-400 font-semibold text-[17px] tracking-[0.2em]'>
									TONEGRID
								</h3>

								<span className='text-center text-[12px] uppercase tracking-[0.15em]'>
									Pretty heatmap tracker for desktops and the web
								</span>
							</div>

							<LogoTonegrid className='size-30 text-base group-hover:text-highlight transition-colors duration-400' />

							<a
								href='https://tonegrids.com'
								target='_blank'
								rel='noopener noreferrer'
								className='cursor-pointer w-[90%] tracking-[0.04em] text-sm hover:border-white/20 hover:text-highlight-light transition duration-400 py-5 flex justify-center border border-white/5'
							>
								tonegrids.com
							</a>
						</div>

						{/* Elit Wallpapers */}
						<div className='px-5 py-10  hover:scale-105 group hover:-translate-y-2 transition duration-400 flex flex-col items-center gap-20'>
							<div className='flex flex-col px-3 gap-2 items-center'>
								<h3 className='font-playfair font-semibold group-hover:text-highlight-light transition duration-400  text-[17px] tracking-[0.2em]'>
									ELIT WALLPAPERS
								</h3>

								<span className='text-center text-[12px] uppercase tracking-[0.15em]'>
									A high quality, minuciously curated, wallpapers platform
								</span>
							</div>

							<div className='group-hover:text-highlight transition duration-400'>
								<Icon icon='boxicons:image-alt' className='size-30'></Icon>
							</div>

							<a
								href='https://elitwallpapers.com'
								target='_blank'
								rel='noopener noreferrer'
								className='cursor-pointer w-[90%] tracking-[0.04em] text-sm hover:border-white/20 hover:text-highlight-light transition duration-400 py-5 flex justify-center border border-white/5'
							>
								elitwallpapers.com
							</a>
						</div>

						{/* Mangazine  */}
						<div className='px-5 py-10  hover:scale-105 group hover:-translate-y-2 transition duration-400 flex flex-col items-center gap-20'>
							<div className='flex flex-col px-3 gap-2 items-center'>
								<h3 className='font-playfair font-semibold group-hover:text-highlight-light transition duration-400  text-[17px] tracking-[0.2em]'>
									MANGAZINE
								</h3>

								<span className='text-center text-[12px] uppercase tracking-[0.15em]'>
									A reading media platform. Track your favorite reads
								</span>
							</div>

							<div className='group-hover:text-highlight transition duration-400'>
								<Icon icon='carbon:book' className='size-30'></Icon>
							</div>

							<a
								href='https://mangazineprotocol.netlify.app'
								target='_blank'
								rel='noopener noreferrer'
								className='cursor-pointer w-[90%] tracking-[0.04em] text-sm hover:border-white/20 hover:text-highlight-light transition duration-400 py-5 flex justify-center border border-white/5'
							>
								mangazineprotocol.netlify.app
							</a>
						</div>
					</div>
				</div>
				<div className='border-l border-white/5'></div>
			</main>
		</div>
	);
};
