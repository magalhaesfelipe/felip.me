import { useState } from 'react';
import { Icon } from '@iconify/react';
import image1 from '../../../assets/image-7.jpg';
import logoTonegrid from '../../../assets/logo-tonegrid3.svg';

export const Column3 = () => {
	const [expandedProject, setExpandedProject] = useState('elit-wallpapers');

	return (
		<div className='relative grid grid-rows-[1fr_20%] w-full h-[80%]'>
			<div className='grid grid-flow-row auto-rows-auto items-start w-full grid-cols-[56%] justify-end py-15'>
				{/* Item 1 */}
				<div className='flex cursor-pointer flex-col group hover:text-highlight transition-all duration-300'>
					<button
						onClick={() => {
							if (expandedProject !== 'elit-wallpapers') {
								setExpandedProject('elit-wallpapers');
							} else {
								setExpandedProject('');
							}
						}}
						className='cursor-pointer group-hover:text-highlight group-hover:border-highlight transition-all duration-300 text-xs tracking-[0.20em] font-light border-b border-base-darker hover:border-white py-2 px-6'
					>
						ELIT WALLPAPERS
					</button>
					<div className='grid group-hover:border-highlight *:group-hover:border-highlight *:transition *:duration-300 transition-all duration-300 text-sm w-full grid-cols-3 * *:w-4 *:h-5 *:border-r *:border-base-darker'>
						<p> </p>
						<p> </p>
						<p> </p>
					</div>

					{/* Image dropdown */}
					<div
						className={`
            ${expandedProject === 'elit-wallpapers' ? 'visible h-100 translate-y-1.5 opacity-100' : 'invisible h-0 -translate-y-1.5 opacity-0'}
           duration-300 border-highlight`}
					>
						<div className='border-highlight border-x-14 relative h-80 duration-700 overflow-hidden ease-in-out border-highlight'>
							<img
								src={image1}
								alt=''
								className='h-full w-full relative object-cover border-x border-black/15 px-2.75 py-1.5 bg-highlight transition-transform duration-700 ease-out group-hover:scale-106'
							/>
							<div className='absolute p-2 bg-black/70 h-[50%] left-[20%] justify-center flex top-[27%] items-center object-cover rounded-sm w-[60%] size-5'>
								<Icon
									icon='boxicons:image-alt'
									className='text-highlight size-20'
								/>
							</div>
						</div>
						<div className='flex flex-col py-4 text-[11px] font-normal tracking-[0.15em]'>
							<span>01 — A WALLPAPERS PLATFORM</span>
							<span>V1.0, 2026</span>
						</div>
					</div>
				</div>

				{/* Item 2 */}
				<div className='flex cursor-pointer flex-col group hover:text-highlight transition-all duration-300'>
					<button
						onClick={() => {
							if (expandedProject !== 'tonegrid') {
								setExpandedProject('tonegrid');
							} else {
								setExpandedProject('');
							}
						}}
						className='cursor-pointer group-hover:text-highlight group-hover:border-highlight transition-all duration-300 text-xs tracking-[0.20em] font-light border-b border-base-darker hover:border-white py-2 px-6'
					>
						TONEGRID
					</button>
					<div className='grid group-hover:border-highlight *:group-hover:border-highlight *:transition *:duration-300 transition-all duration-300 text-sm w-full grid-cols-3 * *:w-4 *:h-5 *:border-r *:border-base-darker'>
						<p> </p>
						<p> </p>
						<p> </p>
					</div>

					{/* Image dropdown */}
					<div
						className={`
            ${expandedProject === 'tonegrid' ? 'visible h-100 translate-y-1.5 opacity-100' : 'invisible h-0 -translate-y-1.5 opacity-0'}
           duration-300 border-highlight`}
					>
						<div className='border-x-14 relative h-80 duration-700 overflow-hidden ease-in-out border-highlight'>
							{/* <div className='absolute z-10 bg-black/70 object-cover h-full w-full'></div> */}
							<img
								src={image1}
								alt=''
								className='h-full w-full items-center justify-center relative object-cover border-x border-black/15 px-2.75 py-1.5 bg-highlight transition-transform duration-700 ease-out group-hover:scale-106'
							/>
							<div className='absolute inset-0 flex items-center justify-center z-20 p-2 bg-black/70 h-[50%] left-[20%] top-[27%] object-cover rounded-sm w-[60%] size-5'>
								<img
									src={logoTonegrid}
									alt=''
									className='text-highlight size-100 max-h-full max-w-full object-contain p-2'
								/>
							</div>
						</div>
						<div className='flex flex-col py-4 text-[11px] font-normal tracking-[0.15em]'>
							<span>02 — HEATMAP TRACKERS</span>
							<span>V0.1, 2026</span>
						</div>
					</div>
				</div>

				{/* Item 3 */}
				<div className='flex cursor-pointer flex-col group hover:text-highlight transition-all duration-300'>
					<button
						onClick={() => {
							if (expandedProject !== 'mangazine') {
								setExpandedProject('mangazine');
							} else {
								setExpandedProject('');
							}
						}}
						className='cursor-pointer group-hover:text-highlight group-hover:border-highlight transition-all duration-300 text-xs tracking-[0.20em] font-light border-b border-base-darker hover:border-white py-2 px-6'
					>
						MANGAZINE
					</button>
					<div className='grid group-hover:border-highlight *:group-hover:border-highlight *:transition *:duration-300 transition-all duration-300 text-sm w-full grid-cols-3 * *:w-4 *:h-5 *:border-r *:border-base-darker'>
						<p> </p>
						<p> </p>
						<p> </p>
					</div>

					{/* Image dropdown */}
					<div
						className={`
            ${expandedProject === 'mangazine' ? 'visible h-100 translate-y-1.5 opacity-100' : 'invisible h-0 -translate-y-1.5 opacity-0'}
           duration-300 border-highlight`}
					>
						<div className='border-x-14 relative h-80 duration-700 overflow-hidden ease-in-out border-highlight'>
							<img
								src={image1}
								alt=''
								className='h-full w-full items-center justify-center relative object-cover border-x border-black/15 px-2.75 py-1.5 bg-highlight transition-transform duration-700 ease-out group-hover:scale-106'
							/>
							<div className='absolute p-2 bg-black/70 h-[50%] left-[20%] justify-center flex top-[27%] items-center object-cover rounded-sm w-[60%] size-5'>
								<Icon icon='carbon:book' className='text-highlight size-20' />
							</div>
						</div>
						<div className='flex flex-col py-4 text-[11px] font-normal tracking-[0.15em]'>
							<span>03 — A READING MEDIA PLATFORM </span>
							<span>V1, 2024</span>
						</div>
					</div>
				</div>
			</div>

			{/* BOTTOM SQUARE */}
			{/* <div className='absolute isolate bottom-0 -z-10 h-50 w-[60%] right-0 flex justify-end'> */}
			{/* 	<div className='bg-bg-light pt-6 pb-0 flex flex-col gap-3 hover:brightness-110 border border-r-0 border-white/5'> */}
			{/* 		<span className='text-[11px] pl-8 font-medium tracking-[0.15em]'> */}
			{/* 			UPCOMING */}
			{/* 		</span> */}
			{/* 		<div className='leading-loose'> */}
			{/* 			<div className='font-playfair leading-tight pl-8 w-[85%] text-highlight text-[22px] font-medium tracking-[0.1em]'> */}
			{/* 				Tonygrid App Release */}
			{/* 			</div> */}
			{/* 			<span className='text-sm italic pl-8'>Oct 12 — Nov 24, 2024</span> */}
			{/* 		</div> */}
			{/**/}
			{/* 		<div className='flex flex-col gap-px'> */}
			{/* 			<button className='pl-8 tracking-[0.15em] text-[11px] font-medium text-white/70 flex items-center gap-3'> */}
			{/* 				VIEW DETAILS */}
			{/* 				<Icon icon='akar-icons:arrow-right' className='size-3.5' /> */}
			{/* 			</button> */}
			{/* 		</div> */}
			{/* 	</div> */}
			{/* </div> */}
		</div>
	);
};
