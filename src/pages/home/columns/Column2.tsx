import imageMiddleColumn from '../../../assets/image-2.jpg';

export const Column2 = () => {
	return (
		<div className='flex relative border-r border-base-darker font-medium text-[12px] justify-center gap-13'>
			<div className='absolute group overflow-hidden w-full z-30 top-15 right-[-35%] h-full shadow-[0_-2px_10px_rgba(0,0,0,0.9)]'>
				<img
					src={imageMiddleColumn}
					alt=''
					className='absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110'
				/>
				<div className='absolute z-20 inset-0 bg-black/50' />

				<div className='absolute z-30 uppercase w-[93%] text-[13px] font-normal top-7 left-[5%] text-base-dark tracking-[0.1em] transition duration-500 group-hover:translate-y-1.5'>
					<span className='text-highlight'>
						HI, I'M{' '}
						<strong className='font-playfair font-bold'>
							FELIPE MAGALHÃES
						</strong>
						, A TECH ENTHUSIAST AND SOFTWARE ENGINEER.
					</span>

					<br />
					<br />
					{/* PROJECTS LIST */}
					<span className='text-highlight tracking-normal *:px-1'>
						Creator of{' '}
						<span className='bg-black/60 text-highlight hover:text-bg text-center px-1 font-semibold cursor-pointer transition duration-300'>
							Elit Wallpapers
						</span>
						,
						<span className='bg-black/60 text-highlight hover:text-bg text-center font-medium cursor-pointer transition duration-300'>
							Tonegrid
						</span>
						,
						<br />
						<span className='bg-black/60 text-highlight hover:text-bg text-center font-medium cursor-pointer transition duration-300'>
							Mangazine
						</span>
						,
						<span className='bg-black/60 text-highlight hover:text-bg text-center font-medium cursor-pointer transition duration-300'>
							The Toge Theme(Neovim/VSCode)
						</span>
						.
					</span>

					<p className='text-highlight tracking-normal'>
						Working at{' '}
						<span className='px-1 bg-black/60 hover:text-bg text-center font-medium cursor-pointer transition duration-300'>
							Pax Primavera
						</span>
					</p>

					<p className='text-highlight tracking-normal'>
						Recent work{' '}
						<span className='px-1 bg-black/60 hover:text-bg text-center font-medium cursor-pointer transition duration-300'>
							Tonegrid
						</span>
						,
						<span className='px-1 ml-0.5 bg-black/60 hover:text-bg text-center font-medium cursor-pointer transition duration-300'>
							The North Social Path
						</span>
					</p>

					<p className='text-highlight tracking-normal'>
						Part of{' '}
						<span className='px-1 bg-black/60 hover:text-bg text-center font-medium cursor-pointer transition duration-300'>
							RGM-79N
						</span>
					</p>
					<br />
					<br />

					<span className='text-highlight uppercase'>
						<strong className='text-highlight font-normal uppercase'>
							I enjoy the process of crafting. From the initial idea to real
							people using and being better off with something I helped to
							build.{' '}
							<strong className='text-highlight-light font-normal uppercase'>
								I'm enthusiastic about optimizing this process so the time
								between start-finish is minimal. You can find some of my
								projects here.
							</strong>
						</strong>
					</span>
					<br />
					<br />
					<br />

					<span className='text-highlight'>
						I write articles{' '}
						<strong className='bg-black/60 text-highlight px-1 cursor-pointer'>
							here
						</strong>{' '}
						about code, productivity, and whatever I'm invested into at the
						moment. Occasionally, I do live coding streams on twitch(
						occasionally, really).
					</span>
					<br />
					<br />
					<br />

					<span className='mt-2 text-highlight'>
						Outside of programming, I enjoy working on business ideas, studying
						financial markets, reading books, doing math, or watching space
						documentaries. In case you are interested, here are things I use on
						my work setup.
					</span>
					<br />
					<br />

					<span className='text-highlight'>Find me on</span>
					<br />
					<span className='text-highlight flex gap-1'>
						<div className='bg-white/60 text-base-darker px-1 cursor-pointer'>
							GitHub
						</div>
						<div className='bg-white/60 text-base-darker px-1 cursor-pointer'>
							LinkedIn
						</div>
						<div className='bg-white/60 text-base-darker px-1 cursor-pointer'>
							Discord Server
						</div>
					</span>
					<br />

					<span className='text-highlight flex flex-col items-start'>
						Or mail me at
						<div className='bg-white/60 text-base-darker px-1 cursor-pointer'>
							yvy.05@proton.me
						</div>
					</span>
				</div>
			</div>
		</div>
	);
};
