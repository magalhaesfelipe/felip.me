import imageMiddleColumn from '../../../assets/image-2.jpg';

export const Column2 = () => {
	return (
		<div className='flex relative  border-r border-base-darker font-medium text-[12px] justify-center gap-13'>
			<div className='absolute group overflow-hidden w-full z-10 top-15 right-[-35%] h-full shadow-[0_-2px_10px_rgba(0,0,0,0.9)]'>
				<img
					src={imageMiddleColumn}
					alt=''
					className='absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110'
				/>
				<div className='absolute z-20 inset-0 bg-black/10' />
				<span className='absolute z-30  w-[80%] text-[13px] font-[400] top-7 left-[7%] text-base tracking-[0.15em] transition duration-500 group-hover:translate-y-1.5 '>
					HI I'M <strong className='font-playfair font-bold'>FELIPE</strong>, A
					SOFTWARE ENGINEER CURRENTLY WORKING WITH WEB-DEVELOPMENT
				</span>
			</div>
		</div>
	);
};
