export const Footer = () => {
	return (
		<>
			<main className='h-40 border-b border-base-darker text-[11px] w-full grid grid-cols-[4%_1fr_1fr_1fr_4%]'>
				<div className='border-r border-base-darker'></div>
				<div className='text-base flex justify-center items-center tracking-[0.15em]'></div>
				<div className='flex relative justify-center gap-13'></div>
				<div className='flex items-center justify-end text-[10px] tracking-[0.15em]'></div>
				<div className='border-l border-base-darker'></div>
			</main>

			<main className='h-40 border-b border-base-darker text-[11px] w-full grid grid-cols-[4%_1fr_1fr_1fr_4%]'>
				<div></div>
				<div className='text-base border-r border-base-darker flex gap-10 justify-center items-center tracking-[0.15em]'>
					<span>GITHUB</span>
					<span>LINKEDIN</span>
					<span>CONTACT</span>
				</div>
				<div className='flex border-r border-base-darker relative justify-center gap-13'></div>
				<div className='flex items-center justify-center text-[10px] tracking-[0.15em]'>
					© 2026 FELIPE MAGALHÃES. ALL RIGHTS RESERVED.
				</div>
				<div></div>
			</main>
		</>
	);
};
