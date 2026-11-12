import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

export const TheDeceivingLayout = () => {
	const navigate = useNavigate();

	return (
		<div>
			<header className='h-15 border-b border-white/5'></header>
			<main
				className='h-full relative isolate z-10 w-full grid grid-cols-[4%_1fr_2.5fr_1fr_4%]
  after:absolute after:inset-x-0 after:bottom-0 after:z-20 after:border-b after:border-base-darker after:pointer-events-none'
			>
				<div className='border-r border-white/5'></div>
				<div></div>

				<div className='px-10 pt-15 pb-30 flex flex-col gap-6'>
					{/* Title */}
					<div className='mb-5'>
						<h1 className='text-highlight text-5xl font-playfair'>
							The Deceptive Layout
						</h1>
						<span className='text-[13px] pl-1 tracking-widest'>
							NOV 11, 2026
						</span>
					</div>

					<span className='leading-6.5 tracking-[0.02em] text-[16px]'>
						How a seemingly simple layout got me to use recursion to get it
						done. My platform Elit Wallpapers needed to render image categories
						and sub-categories, but that, proved to be a challenge.
					</span>

					<div>
						<h3 className='font-medium mb-6 text-2xl text-highlight'>
							What I Needed
						</h3>
						<p className='leading-6.5 tracking-[0.02em] text-[16px]'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum. Sed
							ut perspiciatis unde omnis iste natus error sit voluptatem
							accusantium doloremque laudantium.
						</p>
					</div>

					<div>
						<h3 className='font-medium mb-6 text-2xl text-highlight'>
							First Try
						</h3>
						<p className='leading-6.5 tracking-[0.02em] text-[16px]'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum. Sed
							ut perspiciatis unde omnis iste natus error sit voluptatem
							accusantium doloremque laudantium.
						</p>
					</div>

					<div>
						<h3 className='font-medium mb-6 text-2xl text-highlight'>
							The Idea
						</h3>
						<p className='leading-6.5 tracking-[0.02em] text-[16px]'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum. Sed
							ut perspiciatis unde omnis iste natus error sit voluptatem
							accusantium doloremque laudantium.
						</p>
					</div>

					<div className='mt-10'>
						<span>― Magalhães, Felipe</span>
					</div>

					<div className='flex items-center gap-1'>
						<Icon
							icon='material-symbols:keyboard-arrow-right'
							className='size-5'
						/>
						<button
							onClick={() => navigate('/articles')}
							className='cursor-pointer border-b-2 hover:border-highlight hover:text-highlight border-white/10 px-1 transition duration-300'
						>
							cd <strong className='tracking-[0.15em]'>..</strong>
						</button>
					</div>
				</div>
				<div></div>
				<div></div>
			</main>
		</div>
	);
};
