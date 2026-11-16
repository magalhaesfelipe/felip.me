import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { myProjects } from '../constants/my_projects.ts';

export const Projects = () => {
	const navigate = useNavigate();

	return (
		<div className='w-full'>
			<main
				className='relative  isolate z-10 w-full grid grid-cols-[7%_1fr_7%]
  after:absolute after:inset-x-0 after:bottom-0 after:z-20 after:border-b after:border-base-darker after:pointer-events-none'
			>
				<div></div>

				<div className='pt-[5%] p-[10%] flex justify-center'>
					<div className='grid w-full grid-cols-3 gap-5 *:border *:border-white/5'>
						{/* Cards */}
						{myProjects.map((project, i) => {
							return (
								<div
									key={i}
									className='p-5 grid rounded-[20px] [corner-shape:bevel] grid-rows-[1fr_1.5fr_1fr] gap-1 items-center justify-center group/outer hover:scale-105 hover:-translate-y-2 transition duration-400'
								>
									<div className='flex flex-col px-3 gap-2 items-center'>
										<h3 className='uppercase font-playfair text-highlight-dark  group-hover/outer:text-highlight-light transition duration-400 font-semibold text-[17px] tracking-[0.2em]'>
											{project?.title || '-'}
										</h3>

										<span className='text-center text-[12px] uppercase tracking-[0.15em]'>
											{project?.description || '-'}
										</span>
									</div>

									{/* Icon */}
									<div className='flex justify-center items-center py-3'>
										{project?.isCustomIcon ? (
											<project.icon className='size-32 group-hover/outer:text-highlight transition duration-400' />
										) : (
											<Icon
												icon={project.icon as string}
												className='size-30 group-hover/outer:text-highlight transition-colors duration-400'
											/>
										)}
									</div>

									{/* Buttons */}
									<div className='flex flex-col transition duration-400 rounded-[10px] [corner-shape:bevel]'>
										{project?.websiteLink && (
											<a
												href={project?.websiteLink?.url}
												target='_blank'
												rel='noopener noreferrer'
												className='cursor-pointer tracking-[0.04em] text-sm hover:text-highlight-light transition duration-400 py-2 flex justify-center'
											>
												{project?.websiteLink?.label || '-'}
											</a>
										)}

										{project?.repoLinks?.map((rl, i) => (
											<a
												key={i}
												href={rl?.url}
												target='_blank'
												rel='noopener noreferrer'
												className='cursor-pointer tracking-[0.04em] text-sm hover:text-highlight-light transition duration-400 py-2 flex justify-center'
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
