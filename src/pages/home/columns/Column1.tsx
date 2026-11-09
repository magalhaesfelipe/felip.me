import imageColumnOne from '../../../assets/image-9.jpg';

export const Column1 = () => {
	return (
		<div className='text-highlight relative border-r border-base-darker flex flex-col gap-3 pt-14 font-medium '>
			<div className='text-base-dark items-center gap-5 tracking-[0.25em] relative flex text-[11px]'>
				<div className='w-7 border-b border-base-dark'></div>
				<h4>FEATURED ARTICLES</h4>
			</div>
			<div className='flex flex-col gap-7'>
				<h1 className='font-playfair text-6xl w-[35%] flex flex-col'>
					<strong className='text-base text-5xl'>The</strong>
					Deceptive Layout.
				</h1>
				<p className='text-base text-[15px] w-[63%] font-[300] leading-6 font-inter tracking-[0.05em]'>
					How a seemingly simple layout got me to use recursion to get it done.
					My platform Elit Wallpapers needed to render image categories and
					sub-categories, but that, proved to be a challenge.
				</p>
			</div>
			<div className='absolute overflow-hidden group bottom-[-3%] w-[590px] left-0'>
				<img
					src={imageColumnOne}
					alt=''
					className=' inset-0 w-full h-96 object-cover transition-transform duration-700 ease-out group-hover:scale-110'
				/>
			</div>
		</div>
	);
};
