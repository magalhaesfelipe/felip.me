import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

export const Articles = () => {
	const navigate = useNavigate();

	return (
		<main
			className='h-full relative isolate z-10 w-full grid grid-cols-[7%_1fr_1fr_1fr_7%]
  after:absolute after:inset-x-0 after:bottom-0 after:z-20 after:border-b after:border-base-darker after:pointer-events-none'
		>
			<div className='border-r border-white/5'>
				<button
					onClick={() => {
						navigate('/');
					}}
					className='font-normal tracking-wide hover:text-highlight hover:border-white/20 transition duration-300 cursor-pointer gap-0 flex justify-center items-center h-15 w-full border-r-transparent border-b border-r border-white/5'
				>
					<Icon
						icon='material-symbols:keyboard-arrow-right'
						className='size-5'
					/>
					<span>cd ..</span>
				</button>
			</div>
			<div className='h-full flex relative justify-baseline py-2 '>
				<div className='h-full flex flex-col gap-30  w-5 *:border-b *:border-white/5'>
					{Array.from({ length: 9 }, (_, i) => i).map((_, i) => (
						<div key={i} className='w-full'></div>
					))}
				</div>
			</div>

			<div className='grid grid-rows-[1fr_1.5fr] gap-2'>
				<div className='flex flex-col justify-center gap-15'>
					<h1 className='text-2xl font-playfair text-highlight font-medium tracking-[0.15em] text-center pb-3'>
						ARTICLES
					</h1>

					<ul className='w-full flex *:tracking-widest text-highlight flex-col items-center gap-3'>
						{/* ARTICLE 1 */}
						<button
							onClick={() => navigate('the-deceptive-layout')}
							className='relative group py-4 px-2 w-[95%] flex text-[13px] justify-center items-center border border-white/5 cursor-pointer hover:text-highlight hover:border-white/15 transition duration-400'
						>
							THE DECEIVING LAYOUT
							<div className='absolute flex border-white/20 border items-center -right-94.75 p-2 invisible opacity-0 w-0 h-0 -translate-y-1.5 group-hover:visible group-hover:opacity-100 group-hover:h-30 group-hover:w-85 group-hover:translate-y-1 transition duration-500'>
								<div className='absolute flex items-center h-full left-1 w-1 '>
									<div className='w-10 h-2 absolute border-y border-white/20 -left-11 bg-bg'></div>
								</div>
								<span>
									How a seemingly simple layout got me to use recursion to get
									it done. My platform Elit Wallpapers needed to render image
									categories and sub-categories, but that, proved to be a
									challenge.
								</span>
							</div>
						</button>

						{/* ARTICLE 2 */}
						<button
							onClick={() => navigate('the-deceiving-layout')}
							className='relative group py-4 px-2 w-[95%] flex text-[13px] justify-center items-center border border-white/5 cursor-pointer hover:text-highlight hover:border-white/15 transition duration-400'
						>
							THE GRID PROBLEM
							<div className='absolute flex border-white/20 border items-center -left-94.75 p-2 invisible opacity-0 w-0 h-0 -translate-y-1.5 group-hover:visible group-hover:opacity-100 group-hover:h-30 group-hover:w-85 group-hover:translate-y-1 transition duration-500'>
								<span>
									How a seemingly simple layout got me to use recursion to get
									it done. My platform Elit Wallpapers needed to render image
									categories and sub-categories, but that, proved to be a
									challenge.
								</span>
								<div className='absolute flex items-center h-full right-1 w-1'>
									<div className='w-10 h-2 absolute border-y border-white/20 -right-11 bg-bg'></div>
								</div>
							</div>
						</button>
					</ul>
				</div>
				<div></div>
			</div>

			<div className='h-full w-full py-2 border-r border-white/5 flex justify-end'>
				<div className='h-full flex flex-col gap-30 w-5 *:border-b *:border-white/5'>
					{Array.from({ length: 9 }, (_, i) => i).map((_, i) => (
						<div key={i} className='w-full'></div>
					))}
				</div>
			</div>
		</main>
	);
};
