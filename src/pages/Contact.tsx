export const Contact = () => {
	const githubLink = 'https://github.com/magalhaesfelipe';
	const linkedinLink =
		'https://www.linkedin.com/in/felipe-magalh%C3%A3es-b2b36a2b6/';
	const emailLink = 'yvy.05@proton.me';

	return (
		<main
			className='h-full relative isolate z-10 w-full grid grid-cols-[4%_1fr_1fr_1fr_4%]
  after:absolute after:inset-x-0 after:bottom-0 after:z-20 after:border-b after:border-base-darker after:pointer-events-none'
		>
			<div className=''></div>
			<div className='h-full flex justify-end py-2 border-r border-white/5'>
				<div className='h-full flex flex-col gap-30  w-5 *:border-b *:border-white/5'>
					{Array.from({ length: 9 }, (_, i) => i).map((_, i) => (
						<div key={i} className='w-full'></div>
					))}
				</div>
			</div>

			<div className='grid grid-rows-[1fr_1.5fr] gap-2 border-r border-white/5'>
				<div className='flex flex-col justify-center gap-15'>
					<h1 className='text-2xl font-playfair text-highlight font-medium tracking-[0.15em] text-center pb-3'>
						FIND ME ON
					</h1>

					<ul className='w-full flex *:tracking-widest text-highlight flex-col items-center gap-3'>
						<li className='py-4 px-2 w-[95%] flex text-[13px] justify-center items-center border border-white/5 cursor-pointer hover:text-highlight hover:border-white/15 transition duration-400'>
							<a href={githubLink} rel='noopener noreferrer' target='_blank'>
								GITHUB
							</a>
						</li>
						<li className='py-4 px-2 w-[95%] flex justify-center text-[13px] items-center border border-white/5 cursor-pointer hover:text-highlight hover:border-white/15 transition duration-400'>
							<a href={linkedinLink} rel='noopener noreferrer' target='_blank'>
								LINKEDIN
							</a>
						</li>

						<li className='py-4 px-2 w-[95%] flex justify-center text-[13px] items-center border border-white/5 cursor-pointer hover:text-highlight hover:border-white/15 transition duration-400'>
							<a href={emailLink} rel='noopener noreferrer' target='_blank'>
								yvy.05@proton.me
							</a>
						</li>
					</ul>
				</div>
				<div></div>
			</div>
			<div className='h-full py-2'>
				<div className='h-full flex flex-col gap-30  w-5 *:border-b *:border-white/5'>
					{Array.from({ length: 9 }, (_, i) => i).map((_, i) => (
						<div key={i} className='w-full'></div>
					))}
				</div>
			</div>
		</main>
	);
};
