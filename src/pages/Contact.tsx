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
			className='after:border-base-darker relative isolate z-10 grid h-full
				min-h-0 w-full grid-cols-[7%_1fr_1fr_1fr_7%] grid-rows-[minmax(0,1fr)]
				overflow-hidden after:pointer-events-none after:absolute after:inset-x-0
				after:bottom-0 after:z-20 after:border-b'
		>
			<div className='border-r border-white/5'></div>

			{/* Left ruler column */}
			<div
				className='relative h-full min-h-0 overflow-hidden border-r
					border-white/5'
			>
				<div
					className='absolute inset-y-2 right-0 flex w-5 flex-col gap-30
						overflow-hidden *:shrink-0 *:border-b *:border-white/5'
				>
					{Array.from({ length: 40 }, (_, i) => (
						<div key={i} className='w-full' />
					))}
				</div>
			</div>

			{/* Middle column */}
			<div
				className='grid min-h-0 grid-rows-[1fr_1.5fr] gap-2 border-r
					border-white/5 py-15'
			>
				<div className='flex flex-col justify-center gap-15'>
					<h1
						className='font-playfair pb-3 text-center text-2xl font-medium
							tracking-[0.15em] text-white/60'
					>
						FIND ME ON
					</h1>

					<ul
						className='text-highlight flex w-full flex-col items-center gap-3
							text-[13px] *:flex *:w-[95%] *:items-center *:justify-center
							*:border *:border-white/5 *:px-2 *:py-4 *:tracking-widest'
					>
						<li
							className='hover:text-highlight cursor-pointer transition
								duration-400 hover:border-white/15'
						>
							<a href={githubLink} rel='noopener noreferrer' target='_blank'>
								GITHUB
							</a>
						</li>
						<li
							className='hover:text-highlight cursor-pointer transition
								duration-400 hover:border-white/15'
						>
							<a href={linkedinLink} rel='noopener noreferrer' target='_blank'>
								LINKEDIN
							</a>
						</li>
						<li
							className='hover:text-highlight cursor-pointer transition
								duration-400 hover:border-white/15'
						>
							<a href={emailLink} rel='noopener noreferrer' target='_blank'>
								yvy.05@proton.me
							</a>
						</li>
					</ul>

					<div className='flex w-full justify-center'>
						<button
							onClick={() => {
								navigate('/');
							}}
							className='group hover:border-highlight ml-1.5 flex cursor-pointer
								items-center justify-center gap-0.5 border-b pr-1.5 pb-1 text-sm
								font-normal tracking-wide transition duration-150'
						>
							<Icon
								icon='material-symbols:keyboard-arrow-right'
								className='size-4'
							/>
							<span className='group-hover:text-highlight'>cd ..</span>
						</button>
					</div>
				</div>
				<div />
			</div>

			{/* Right ruler column */}
			<div className='relative h-full min-h-0 overflow-hidden'>
				<div
					className='absolute inset-y-2 left-0 flex w-5 flex-col gap-30
						overflow-hidden *:shrink-0 *:border-b *:border-white/5'
				>
					{Array.from({ length: 40 }, (_, i) => (
						<div key={i} className='w-full' />
					))}
				</div>
			</div>
		</main>
	);
};
