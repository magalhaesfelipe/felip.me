import { useNavigate, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';

export const Footer = () => {
	const navigate = useNavigate();
	const location = useLocation();

	return (
		<div className=''>
			<main
				className={`${location.pathname === '/projects' ? 'border-t' : ''} relative h-40 border-b border-base-darker text-[11px] w-full grid grid-cols-[4%_1fr_1fr_1fr_4%]`}
			>
				<div className='border-r border-base-darker'></div>
				<div className='text-base flex justify-center items-center tracking-[0.15em]'></div>
				<div className='flex relative justify-center gap-13'></div>

				<div className='relative flex items-center justify-end z-0 text-[10px] tracking-[0.15em]'>
					{/* Bottom box */}
					{location.pathname === '/' && (
						<div className='absolute group isolate bottom-0 z-0 h-47 w-[60%] hover:brightness-110 right-0 flex justify-end cursor-pointer transition duration-300'>
							<div className='relative bg-bg-light pt-5 pb-0 flex flex-col gap-3 border border-r-transparent border-b-transparent  border-white/5 group-hover:border-white/25 before:absolute before:-top-px before:-left-px before:right-0 before:h-0.5 before:bg-white before:origin-left before:scale-x-0 before:transition-transform before:duration-700 before:ease-out hover:before:scale-x-100'>
								<span className='border-b border-white/5 text-[11px] pl-8 font-medium tracking-[0.15em]'>
									UPCOMING
								</span>
								<div className='leading-loose'>
									<div className='font-playfair leading-tight pl-8 w-[85%] text-highlight text-[22px] font-medium tracking-[0.1em]'>
										Tonegrid App Release
									</div>
									<span className='text-sm italic pl-8'>
										Nov 22 — Nov 23, 2026
									</span>
								</div>

								<button className='pl-8 cursor-pointer tracking-[0.15em] text-[11px] font-medium text-white/70 flex items-center gap-3'>
									VIEW DETAILS
									<Icon
										icon='akar-icons:arrow-right'
										className='size-3.5 group-hover:size-4 group-hover:translate-x-1.75 -translate-x-1.75 transition duration-400'
									/>
								</button>
							</div>
						</div>
					)}
				</div>
				<div className='border-l border-base-darker'></div>
			</main>

			{location.pathname === '/' && (
				<main className='h-40 border-b border-base-darker text-[11px] w-full grid grid-cols-[4%_1fr_1fr_1fr_4%]'>
					<div className='border-r border-base-darker'></div>
					<div className='text-base flex justify-center items-center tracking-[0.15em]'></div>
					<div className='flex relative justify-center gap-13'></div>
					<div className='flex items-center justify-end text-[10px] tracking-[0.15em]'></div>
					<div className='border-l border-base-darker'></div>
				</main>
			)}

			<main className='h-40 border-b border-base-darker text-[11px] w-full grid grid-cols-[4%_1fr_1fr_1fr_4%]'>
				<div className='border-r border-white/5'></div>
				<div className='text-base border-r border-base-darker flex text-[10px] justify-left tracking-[0.15em]'>
					{/* Linkedin */}
					<div className='flex items-center justify-center px-1.5 border-r border-white/5 flex-col gap-2'>
						<button
							title='My LinkedIn profile'
							className='hover:text-highlight-light [writing-mode:vertical-rl] [text-orientation:upright] cursor-pointer transition duration-100'
						>
							LINKEDIN
						</button>
						<div className='flex flex-col gap-4'>
							<Icon icon='akar-icons:linkedin-box-fill' className='size-4' />
						</div>
					</div>

					<div className='flex items-center justify-center px-1.5 border-r border-white/5 flex-col gap-2'>
						<button
							title='How to contact me'
							onClick={() => {
								if (location.pathname !== 'contact-me') {
									navigate('contact-me');
								}
							}}
							className='hover:text-highlight-light [writing-mode:vertical-rl] [text-orientation:upright] cursor-pointer transition duration-100'
						>
							CONTACT
						</button>
						<div className='flex flex-col gap-4'>
							<Icon icon='eva:email-fill' className='size-4' />
						</div>
					</div>

					<div className='flex items-center justify-center px-1.5 border-r border-white/5 flex-col gap-2'>
						<button
							title='My GitHub profile'
							className='hover:text-highlight-light [writing-mode:vertical-rl] [text-orientation:upright]  cursor-pointer transition duration-100'
						>
							GITHUB
						</button>
						<div className='flex flex-col gap-4'>
							<Icon icon='akar-icons:github-fill' className='size-4' />
						</div>
					</div>
				</div>
				<div className='flex border-r border-base-darker relative justify-center gap-13'></div>
				<div className='flex items-center justify-center text-[9px] tracking-[0.15em]'>
					© 2026 FELIPE MAGALHÃES. ALL RIGHTS RESERVED.
				</div>
				<div className='border-l border-white/5'></div>
			</main>
		</div>
	);
};
