import { LogoTonegrid } from '../assets/LogoTonegrid';

export const myProjects = [
	{
		title: 'Tonegrid',
		description: 'Pretty heatmap tracker for desktop and the web',
		icon: LogoTonegrid,
		isCustomIcon: true,
		websiteLink: 'https://tonegrids.com',
		repoLinks: [
			{
				label: 'GitHub',
				url: 'https://github.com/RGM-79NGM/tonegrid',
			},
		],
	},
	{
		title: 'Elit Wallpapers',
		description: 'A high quality, meticulously curated, wallpapers platform',
		icon: 'boxicons:image-alt',
		isCustomIcon: false,
		websiteLink: 'https://elitwallpapers.com',
		repoLinks: [
			{
				label: 'GitHub',
				url: 'https://github.com/magalhaesfelipe/elit-wallpapers',
			},
		],
	},
	{
		title: 'Mangazine',
		description: 'A reading media platform. Tracking your favorite reads',
		icon: 'carbon:book',
		isCustomIcon: false,
		websiteLink: 'https://mangazineprotocol.netlify.app/',
		repoLinks: [
			{
				label: 'GitHub',
				url: 'https://github.com/magalhaesfelipe/mangazine',
			},
		],
	},
	{
		title: 'Toge Theme',
		description:
			'Dark Neovim colorscheme forged in the reflection of Bonsai trees',
		icon: 'game-icons:bonsai-tree',
		isCustomIcon: false,
		websiteLink: '',
		repoLinks: [
			{
				label: 'Neovim',
				url: 'https://github.com/magalhaesfelipe/toge-theme-neovim',
			},
			{
				label: 'VS Code',
				url: 'https://github.com/magalhaesfelipe/toge-theme-vscode',
			},
		],
	},
];
