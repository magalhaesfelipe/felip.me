import { useState } from 'react';
import image1 from '../../../assets/image-6.jpg';

export const Column3 = () => {
	const [expandedProject, setExpandedProject] = useState('');

	return (
		<div className='grid grid-flow-row auto-rows-auto items-start w-full grid-cols-[50%] justify-end gap-10 py-15'>
			<div className='flex flex-col group'>
				<button className='text-xs tracking-[0.20em] font-[300] border-b border-base-darker hover:border-white py-2 px-6'>
					ELIT WALLPAPERS
				</button>
				<div className='grid text-sm w-full grid-cols-3 * *:w-4 *:h-5 *:border-r *:border-base-darker'>
					<p> </p>
					<p> </p>
					<p> </p>
				</div>
				<div className='border-x-14 h-70  border-highlight'>
					<img
						src={image1}
						alt=''
						className='h-full w-full object-cover border-x border-base-dark p-3 bg-highlight transition-transform duration-700 ease-out group-hover:scale-110'
					/>
				</div>
			</div>

			<div className='flex flex-col'>
				<button className='text-xs tracking-[0.20em] font-[300] border-b border-base-darker hover:border-white py-2 px-6'>
					TONEGRID
				</button>
				<div className='grid text-sm w-full grid-cols-3 * *:w-4 *:h-5 *:border-r *:border-base-darker'>
					<p> </p>
					<p> </p>
					<p> </p>
				</div>
			</div>

			<div className='flex flex-col'>
				<button className='text-xs tracking-[0.20em] font-[300] border-b border-base-darker hover:border-white py-2 px-6'>
					ELIT WALLPAPERS
				</button>
				<div className='grid text-sm w-full grid-cols-3 * *:w-4 *:h-5 *:border-r *:border-base-darker'>
					<p> </p>
					<p> </p>
					<p> </p>
				</div>
			</div>
		</div>
	);
};
