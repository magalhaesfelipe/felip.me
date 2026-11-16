import { Outlet } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export const RootLayout = () => {
	return (
		<div className='h-dvh w-dbw'>
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
};
