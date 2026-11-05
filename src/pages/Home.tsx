import { Header } from '../components/Header';

export const Home = () => {
	return (
		<div className='h-dvh w-dbw'>
			<Header />

			<main className='h-full border-b border-base-darker w-full grid grid-cols-[4%_1fr_1fr_1fr_4%]'>
				<div className='border-r border-base-darker'></div>
				<span className='text-highlight text-2xl border-r border-base-darker  flex items-center font-playfair font-medium tracking-[0.15em]'>
					FELIPE MAGALHÃES
				</span>
				<ul className='flex items-center border-r border-base-darker font-medium tracking-[0.15em] text-[12px] justify-center gap-13'>
					<li className='hover:text-highlight transition duration-150'>
						PROJECTS{' '}
					</li>
					<li> ARTICLES </li>
				</ul>
				<div className='flex items-center justify-end'>
					<button className='border border-base-darker hover:border-white py-2 px-6'>
						INQUIRIES
					</button>
				</div>
				<div className='border-l border-base-darker'></div>
			</main>
		</div>
	);
};
