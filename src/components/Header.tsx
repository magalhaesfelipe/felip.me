export const Header = () => {
	return (
		<section className='h-24.75 border-b border-base-darker w-full grid grid-cols-[4%_1fr_1fr_1fr_4%]'>
			<div className='border-r border-base-darker'></div>

			<span className='text-highlight text-2xl border-r border-base-darker  flex items-center font-playfair font-medium tracking-[0.15em]'>
				FELIPE MAGALHÃES
			</span>

			<ul className='flex items-center border-r border-base-darker font-medium tracking-[0.15em] text-[12px] justify-center gap-13'>
				<li> PROJECTS </li>
				<li> ARTICLES </li>
			</ul>

			<div className='flex items-center justify-end'>
				<button className='border-2 border-transparent hover:border-white py-2 px-6'>
					INQUIRIES
				</button>
			</div>

			<div className='border-l border-base-darker'></div>
		</section>
	);
};
