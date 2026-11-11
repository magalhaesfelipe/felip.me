import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { RootLayout } from './pages/RootLayout';

export const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<RootLayout />}>
					<Route path='/' element={<Home />} />
					<Route path='/contact-me' element={<Contact />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
