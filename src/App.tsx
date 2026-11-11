import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { RootLayout } from './pages/RootLayout';
import { Articles } from './pages/Articles';
import { TheDeceivingLayout } from './pages/articles/TheDeceivingLayout';

export const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<RootLayout />}>
					<Route path='/' element={<Home />} />
					<Route path='/contact-me' element={<Contact />} />
					<Route path='/articles' element={<Articles />} />
					<Route
						path='/articles/the-deceiving-layout'
						element={<TheDeceivingLayout />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
