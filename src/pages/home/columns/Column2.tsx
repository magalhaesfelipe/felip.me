import imageMiddleColumn from '../../../assets/image-2.jpg';

export const Column2 = () => {
	return (
		<div className='flex relative **:text-highlight border-r border-base-darker font-medium text-[12px] justify-center gap-13 **:transition **:duration-250'>
			<div className='absolute group overflow-hidden w-full z-30 top-15 right-[-35%] h-full shadow-[0_-2px_10px_rgba(0,0,0,0.9)]'>
				<img
					src={imageMiddleColumn}
					alt=''
					className='absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110'
				/>
				<div className='absolute z-20 inset-0 bg-black/50' />

				<div className='absolute z-30 uppercase w-[93%] text-[13px] font-normal top-7 left-[5%] text-base-dark tracking-[0.1em] transition duration-500 group-hover:translate-y-1.5'>
					<span>
						HI, I'M{' '}
						<strong className='font-playfair font-bold'>
							FELIPE MAGALHÃES
						</strong>
						, A TECH ENTHUSIAST AND SOFTWARE ENGINEER.
					</span>

					<br />
					<br />

					{/* Paragraph 2 - Projects list */}
					<div className='[&_a]:px-1 [&_a]:cursor-pointer    [&_a]:bg-black/60 [&_a]:hover:bg-black/30'>
						<span className='tracking-normal'>
							Creator of{' '}
							<a href='http://elitwallpapers.com' target='_blank'>
								Elit Wallpapers
							</a>
							,
							<a href='http://tonegrid.com' target='_blank'>
								Tonegrid
							</a>
							,
							<br />
							<a href='http://mangazine.com' target='_blank'>
								Mangazine
							</a>
							,
							<span>
								The Toge Theme (
								<a
									href='https://github.com/magalhaesfelipe/toge-theme-neovim'
									target='_blank'
								>
									Neovim
								</a>
								/
								<a
									href='https://marketplace.visualstudio.com/items?itemName=FelipeMagalhaes.toge&ssr=false#overview'
									target='_blank'
								>
									VSCode
								</a>
								)
							</span>
							.
						</span>

						<p className='tracking-normal'>
							Working at <a>Pax Primavera</a>
						</p>

						<p className='tracking-normal'>
							Recent work{' '}
							<a href='https://tonegrid.com' target='_blank'>
								Tonegrid
							</a>
							,{' '}
							<a href='https://thenorthsocialpath.com' target='_blank'>
								The North Social Path
							</a>
						</p>

						<p className='tracking-normal'>
							Part of{' '}
							<a href='https://github.com/RGM-79NGM' target='_blank'>
								RGM-79N
							</a>
						</p>
					</div>

					<br />
					<br />

					<span>
						<strong className='font-normal'>
							I enjoy the process of crafting. From the initial idea to real
							people using and being better off with something I helped to
							build.{' '}
							<strong className='font-normal'>
								I'm enthusiastic about optimizing this process so the time
								between start-finish is minimal. You can find some of my
								projects here.
							</strong>
						</strong>
					</span>
					<br />
					<br />
					<br />

					<span className='[&_a]:text-base-darker'>
						I write articles{' '}
						<a
							href='http://felip.me/articles'
							target='_blank'
							className='bg-white/60 hover:bg-white/80'
						>
							here
						</a>{' '}
						about code, productivity, and whatever I'm invested into at the
						moment. Occasionally, I do live coding streams on twitch(
						occasionally, really).
					</span>
					<br />
					<br />
					<br />

					<span>
						Outside of programming, I enjoy working on business ideas, studying
						financial markets, reading books, doing math, or watching space
						documentaries. In case you are interested, here are things I use on
						my work setup.
					</span>

					<br />
					<br />

					<div className='[&_a]:text-base-darker [&_a]:bg-white/60 [&_a]:hover:bg-white/80 '>
						<span>Find me on</span>
						<br />
						<span className='flex gap-1'>
							<a href='https://github.com/magalhaesfelipe' target='_blank'>
								GitHub
							</a>
							<a
								href='https://www.linkedin.com/in/felipe-magalh%C3%A3es-b2b36a2b6'
								target='_blank'
							>
								LinkedIn
							</a>
							<a href='' target='_blank'>
								Discord Server
							</a>
						</span>

						<br />

						<span className='flex flex-col items-start'>
							Or mail me at
							<a href='' target='_blank'>
								yvy.05@proton.me
							</a>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};
