// import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Column1 } from './home/columns/Column1';
import { Column2 } from './home/columns/Column2';
import { Column3 } from './home/columns/Column3';

export const Home = () => {
	return (
		<div className=' w-dbw'>
			<Header />
			<main
				className='relative isolate z-10 w-full grid grid-cols-[4%_1fr_1fr_1fr_4%]
  '
			>
				{/* <main className='h-full border-b relative isolate z-10 border-base-darker w-full grid grid-cols-[4%_1fr_1fr_1fr_4%]'> */}
				<div className='border-r border-base-darker'></div>

				{/* COLUMN 1 */}
				<Column1 />

				{/* COLUMN 2 */}
				<Column2 />

				{/* COLUMN 3 */}
				<Column3 />
				<div className='border-l border-base-darker'></div>
			</main>
		</div>
	);
};
