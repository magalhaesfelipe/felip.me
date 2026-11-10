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
				<div className='absolute z-20 inset-0 bg-black/10' />

				<div className='absolute z-30 uppercase w-[90%] text-[13px] font-normal top-7 left-[7%] text-base-dark tracking-[0.15em] transition duration-500 group-hover:translate-y-1.5 '>
					<span>
						HI, I'M{' '}
						<strong className='font-playfair font-bold'>
							FELIPE MAGALHÃES
						</strong>
						, A TECH ENTHUSIAST AND SOFTWARE ENGINEER.
					</span>

					<div className='flex items-center gap-1 mb-2'>
						<span className='flex gap-1 items-center'>
							Creator of
							<strong className='bg-bg-light text-white font-semibold px-0.5 rounded-sm'>
								{' '}
								Tonegrids
							</strong>
							<strong className='bg-bg-light text-white font-semibold px-0.5 tracking-normal rounded-sm'>
								Elit Wallpapers
							</strong>
							<strong className='bg-bg-light text-white font-semibold rounded-sm px-0.5'>
								Mangazine
							</strong>
						</span>
					</div>

					<p className=''>Working at Pax Primavera</p>
					<p>
						Recent work Vite DevTools Nuxt DevTools Devframe pulls.review
						Furifont
					</p>
					<p>Core team of Vue Nuxt Vite</p>
					<p>Maintaining Shiki Twoslash ESLint Stylistic </p>
					<div className='mt-5 text-highlight uppercase'>
						<strong className='text-base-dark font-normal uppercase'>
							Dreaming up cool ideas and making them come true is where my
							passion lies. I am enthusiastic about building tools that help
							myself and others to be more productive and enjoy the process of
							crafting. You can find my full projects list here.
						</strong>
						I give talks and write blog posts about open source, coding, etc. I
						am co-hosting a podcast No Coding Today (in Mandarin). Occasionally,
						I do live coding streams on YouTube and 哔哩哔哩. From time to time,
						I make some generative-art, interactivity experiments on
						100.antfu.me. Outside of programming, I enjoy doing photography and
						traveling. I post photos on this page. In case you are interested,
						here are the hardware/software I use. Find me on GitHub Bluesky
						Discord Server Twitter 中文推 日本語 Or mail me at hiantfu.me
					</div>
				</div>
			</div>
		</div>
	);
};
