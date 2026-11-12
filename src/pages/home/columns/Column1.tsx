import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import imageColumnOne from '../../../assets/image-9.jpg';

export const Column1 = () => {
	const navigate = useNavigate();

	return (
		<div className='text-highlight relative z-30 group left-0 border-r border-base-darker flex flex-col gap-3 pt-14 font-medium '>
			<button
				title='See full article'
				onClick={() => navigate('/articles/the-deceptive-layout')}
				className='absolute cursor-pointer z-10 hover:bg-bg bg-base-darker right-8 transition duration-500 group-hover:visible group-hover:opacity-100 group-hover:translate-y-1.5 invisible opacity-0 -translate-y-1.5 ease-in-out top-10 flex items-center border-base-darker border justify-center  text-highlight size-8 rounded-full'
			>
				<Icon icon='akar-icons:arrow-right' />
			</button>

			<div className='text-base-dark items-center gap-5 tracking-[0.25em] relative flex text-[11px]'>
				<div className='w-7 border-b border-base-dark'></div>
				<h4>FEATURED ARTICLE</h4>
			</div>

			<div className='flex flex-col gap-7 pb-8'>
				<h1 className='font-playfair text-6xl w-[35%] flex flex-col'>
					<strong className='text-base text-5xl'>The</strong>
					Deceptive Layout.
				</h1>
				<p className='text-base text-[15px] w-[63%] xl:w-[95%] font-light leading-6 font-inter tracking-[0.05em]'>
					How a seemingly simple layout got me to use recursion to get it done.
					My platform Elit Wallpapers needed to render image categories and
					sub-categories, but that, proved to be a challenge.
				</p>
			</div>

			<div className='overflow-hidden group w-130 lg:w-130 xl:w-[125%]'>
				<img
					src={imageColumnOne}
					alt=''
					className='w-full h-75 lg:h-75 xl:h-96 object-cover transition-transform duration-700 ease-out group-hover:scale-110'
				/>
			</div>
		</div>
	);
};
