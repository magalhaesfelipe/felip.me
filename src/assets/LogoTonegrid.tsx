import type { SVGProps } from 'react';

export const LogoTonegrid = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' {...props}>
		<g transform='translate(106, 106) rotate(45 150 150)'>
			{/* Top-Left: highlight-light */}
			<rect x='0' y='0' width='104' height='104' rx='28' fill='currentColor' />

			{/* Top-Right: base */}
			<rect
				x='196'
				y='0'
				width='104'
				height='104'
				rx='28'
				fill='currentColor'
			/>

			{/* Bottom-Left: base */}
			<rect
				x='0'
				y='196'
				width='104'
				height='104'
				rx='28'
				fill='currentColor'
			/>

			{/* Bottom-Right: highlight-light */}
			<rect
				x='196'
				y='196'
				width='104'
				height='104'
				rx='28'
				fill='currentColor'
			/>

			{/* Center: highlight */}
			<rect x='98' y='98' width='104' height='104' rx='28' fill='#6e6e6e' />
		</g>
	</svg>
);
