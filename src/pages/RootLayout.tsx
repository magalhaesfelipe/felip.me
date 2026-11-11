import { Outlet } from 'react-router-dom';
import { Footer } from '../components/Footer';

export const RootLayout = () => {
	return (
		<div className='h-dvh w-dbw'>
			<Outlet />
			<Footer />
		</div>
	);
};
