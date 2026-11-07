import imageMiddleColumn from '../assets/image-2.jpg';
import imageColumnOne from '../assets/image-9.jpg';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export const Home = () => {
	return (
		<div className='h-dvh w-dbw'>
			<Header />

			<main className='h-full border-b border-base-darker w-full grid grid-cols-[4%_1fr_1fr_1fr_4%]'>
				<div className='border-r border-base-darker'></div>

				{/* COLUMN 1 */}
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
							How a seemingly simple layout got me to use recursion to get it
							done. My platform Elit Wallpapers needed to render image
							categories and sub-categories, but that, proved to be a challenge.
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

				{/* COLUMN 2 */}
				<div className='flex relative  border-r border-base-darker font-medium text-[12px] justify-center gap-13'>
					<div className='absolute group overflow-hidden w-full z-10 top-15 right-[-30%] h-full shadow-[0_-2px_10px_rgba(0,0,0,0.9)]'>
						<img
							src={imageMiddleColumn}
							alt=''
							className='absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110'
						/>
						<div className='absolute z-20 inset-0 bg-black/10' />
						<span className='absolute z-30  w-[80%] text-[13px] font-[400] top-7 left-[7%] text-base tracking-[0.15em] transition duration-500 group-hover:translate-y-1.5 '>
							HI I'M <strong className='font-playfair font-bold'>FELIPE</strong>
							, A SOFTWARE ENGINEER CURRENTLY WORKING WITH WEB-DEVELOPMENT
						</span>
					</div>
				</div>

				{/* COLUMN 3 */}
				<div className='flex items-center justify-end'>
					<button className='border border-base-darker hover:border-white py-2 px-6'>
						INQUIRIES
					</button>
				</div>
				<div className='border-l border-base-darker'></div>
			</main>

			<Footer />
		</div>
	);
};
