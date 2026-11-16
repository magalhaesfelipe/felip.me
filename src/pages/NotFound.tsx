import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import image from '../assets/not_found_meme.jpg';

export const NotFound = () => {
	const navigate = useNavigate();
	return (
		<div
			className='flex w-full items-center justify-center gap-25 border-b
				border-white/5 px-[7%] py-15'
		>
			<img src={image} className='border-base-darker h-80 w-120 border-2' />
			<div className='flex flex-col items-center gap-5'>
				<h1 className='font-playfair text-9xl font-semibold'>404</h1>
				<span className='tracking-[0.15em] uppercase'>
					It seems you've reached a dead end, friend
				</span>
				<button
					onClick={() => {
						navigate('/');
					}}
					className='group hover:border-highlight flex cursor-pointer
						items-center justify-center gap-2 pt-10 text-sm font-normal
						tracking-wide transition duration-150'
				>
					<Icon
						icon='material-symbols:keyboard-arrow-right'
						className='size-5'
					/>
					<span
						className='group-hover:text-highlight group-hover:border-highlight
							border-base-darker border-b text-[16px] transition duration-150'
					>
						cd <strong className='ml-1.5 tracking-[0.15em]'>..</strong>
					</span>
				</button>
			</div>
		</div>
	);
};
