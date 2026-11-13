import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { myProjects } from '../constants/my_projects.ts';

export const Projects = () => {
	const navigate = useNavigate();

	return (
		<div className='w-full h-[110%]'>
			<header className='grid h-15 border-b border-white/5 grid-cols-[7%_1fr_7%] w-full'>
				{/* Go back button */}
				<button
					onClick={() => {
						navigate('/');
					}}
					className='font-normal text-sm tracking-wide hover:text-highlight hover:border-white/20 transition duration-300 cursor-pointer gap-0 flex justify-center pr-2 items-center h-15 w-full border-r-transparent border-b border-r border-white/5'
				>
					<Icon
						icon='material-symbols:keyboard-arrow-right'
						className='size-4'
					/>
					<span>cd ..</span>
				</button>

				<div className='flex relative justify-center items-center text-inter font-light tracking-[0.15em]'>
					<div className='uppercase flex items-center cursor-pointer tracking-[0.25em] font-medium text-xl font-playfair absolute h-full left-0'>
						Felipe Magalhães
					</div>
					<span>SOME OF MY WORKS</span>
				</div>
				<div className='border-l border-white/5'></div>
			</header>
			<main
				className='h-full relative  isolate z-10 w-full grid grid-cols-[7%_1fr_7%]
  after:absolute after:inset-x-0 after:bottom-0 after:z-20 after:border-b after:border-base-darker after:pointer-events-none'
			>
				<div className='border-r  border-white/5'></div>
				<div className='pt-[5%] p-[10%] flex justify-center'>
					<div className='grid w-full grid-cols-3 gap-5 *:border *:border-white/5'>
						{/* Cards */}
						{myProjects.map((project, i) => {
							return (
								<div
									key={i}
									className='p-5 grid rounded-[20px] [corner-shape:bevel] grid-rows-[1fr_1.5fr_1fr] gap-1 items-center justify-center group hover:scale-105 hover:-translate-y-2 transition duration-400'
								>
									<div className='flex flex-col px-3 gap-2 items-center'>
										<h3 className='uppercase font-playfair text-highlight-dark  group-hover:text-highlight-light transition duration-400 font-semibold text-[17px] tracking-[0.2em]'>
											{project?.title || '-'}
										</h3>

										<span className='text-center text-[12px] uppercase tracking-[0.15em]'>
											{project?.description || '-'}
										</span>
									</div>

									{/* Icon */}
									<div className='flex justify-center items-center py-3'>
										{project?.isCustomIcon ? (
											<project.icon className='size-32 group-hover:text-highlight transition duration-400' />
										) : (
											<Icon
												icon={project.icon as string}
												className='size-30 group-hover:text-highlight transition-colors duration-400'
											/>
										)}
									</div>

									{/* Buttons */}
									<div className='flex flex-col justify-center w-full items-center gap-3'>
										{project?.websiteLink && (
											<a
												href={project?.websiteLink}
												target='_blank'
												rel='noopener noreferrer'
												className='cursor-pointer w-[90%] tracking-[0.04em] text-sm hover:border-white/20 hover:text-highlight-light transition duration-400 py-2 flex justify-center border border-white/5'
											>
												{project?.websiteLink || '-'}
											</a>
										)}
										{project?.repoLinks?.map((rl, i) => (
											<a
												key={i}
												href={rl?.url}
												target='_blank'
												rel='noopener noreferrer'
												className='cursor-pointer w-[90%] tracking-[0.04em] text-sm hover:border-white/20 hover:text-highlight-light transition duration-400 py-2 flex justify-center border border-white/5'
											>
												{rl?.label || '-'}
											</a>
										))}
									</div>
								</div>
							);
						})}
					</div>
				</div>
				<div className='border-l border-white/5'></div>
			</main>
		</div>
	);
};
