import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RootLayout } from './pages/RootLayout';
import { Home } from './pages/Home';
import { Works } from './pages/Works';
import { Articles } from './pages/Articles';
import { Contact } from './pages/Contact';
import { TheDeceivingLayout } from './pages/articles/TheDeceptiveLayout';

export const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<RootLayout />}>
					<Route path='/' element={<Home />} />
					<Route path='/contact-me' element={<Contact />} />
					<Route path='/articles' element={<Articles />} />
					<Route path='/works' element={<Works />} />
					<Route
						path='/articles/the-deceptive-layout'
						element={<TheDeceivingLayout />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
