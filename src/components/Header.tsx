import { useNavigate, useLocation } from 'react-router-dom';

export const Header = () => {
	const navigate = useNavigate();
	const location = useLocation();

	return (
		<section className='h-24.75 border-b **:font-medium border-base-darker **:border-base-darker  w-full grid grid-cols-[4%_1fr_1fr_1fr_4%]'>
			<div className='border-r'></div>

			<button
				onClick={() => {
					if (location.pathname !== '/') navigate('/');
				}}
				className='text-highlight text-2xl cursor-pointer border-r flex items-center font-playfair tracking-[0.15em]'
			>
				FELIPE MAGALHÃES
			</button>

			<ul className='flex relative items-center border-r *:hover:text-highlight *:transition *:duration-150 *:cursor-pointer tracking-[0.25em] text-[11px] justify-center gap-13'>
				<li
					onClick={() => {
						if (location.pathname === '/') return;
						navigate('/');
					}}
					style={{
						color: location.pathname === '/' ? 'var(--color-highlight)' : '',
					}}
				>
					HOME{' '}
				</li>

				<li
					onClick={() => {
						if (location.pathname === '/works') return;
						navigate('/works');
					}}
					style={{
						color:
							location.pathname === '/works' ? 'var(--color-highlight)' : '',
					}}
				>
					WORKS{' '}
				</li>

				<li
					onClick={() => {
						if (location.pathname === '/articles') return;
						navigate('/articles');
					}}
					style={{
						color:
							location.pathname === '/articles' ? 'var(--color-highlight)' : '',
					}}
				>
					ARTICLES{' '}
				</li>
			</ul>

			<div className='flex items-center justify-end tracking-[0.20em]'>
				<button
					onClick={() => {
						if (location.pathname !== 'contact-me') navigate('/contact-me');
					}}
					className='border cursor-pointer text-[11px] border-base-darker hover:bg-highlight hover:text-base-darker py-3 px-7 transition duration-150'
				>
					INQUIRE
				</button>
			</div>

			<div className='border-l border-base-darker'></div>
		</section>
	);
};
