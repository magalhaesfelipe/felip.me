import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

export const Contact = () => {
	const navigate = useNavigate();
	const githubLink = 'https://github.com/magalhaesfelipe';
	const linkedinLink =
		'https://www.linkedin.com/in/felipe-magalh%C3%A3es-b2b36a2b6/';
	const emailLink = 'mailto:yvy.05@proton.me';

	return (
		<main
			className='relative isolate z-10 w-full h-full min-h-0 overflow-hidden grid grid-cols-[7%_1fr_1fr_1fr_7%] grid-rows-[minmax(0,1fr)]
  after:absolute after:inset-x-0 after:bottom-0 after:z-20 after:border-b after:border-base-darker after:pointer-events-none'
		>
			<div className='min-h-0 border-r border-white/5'>
				<button
					title='Go back'
					onClick={() => {
						navigate('/');
					}}
					className='font-normal tracking-wide hover:text-highlight hover:border-white/20 transition duration-300 cursor-pointer flex justify-center items-center h-15 w-full border-r-transparent gap-0.5 border-b border-r border-white/5'
				>
					<Icon icon='ic:baseline-keyboard-arrow-right' className='size-5' />
					<span>
						cd <strong className='tracking-[0.15em]'>..</strong>
					</span>
				</button>
			</div>

			{/* Left ruler column */}
			<div className='relative h-full min-h-0 overflow-hidden border-r border-white/5'>
				<div className='absolute inset-y-2 right-0 w-5 overflow-hidden flex flex-col gap-30 *:shrink-0 *:border-b *:border-white/5'>
					{Array.from({ length: 40 }, (_, i) => (
						<div key={i} className='w-full' />
					))}
				</div>
			</div>

			{/* Middle column */}
			<div className='min-h-0 py-15 grid grid-rows-[1fr_1.5fr] gap-2 border-r border-white/5'>
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
				<div />
			</div>

			{/* Right ruler column */}
			<div className='relative h-full min-h-0 overflow-hidden'>
				<div className='absolute inset-y-2 left-0 w-5 overflow-hidden flex flex-col gap-30 *:shrink-0 *:border-b *:border-white/5'>
					{Array.from({ length: 40 }, (_, i) => (
						<div key={i} className='w-full' />
					))}
				</div>
			</div>
		</main>
	);
};
