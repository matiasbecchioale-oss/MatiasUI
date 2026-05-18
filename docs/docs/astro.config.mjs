// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://matias-ui.local/',
	trailingSlash: 'always',
	integrations: [
		starlight({
			title: 'MatiasUI',
			logo: {
				light: '/src/assets/logo-light.svg',
				dark: '/src/assets/logo-dark.svg',
				replacesTitle: true,
			},
			description:
				'Libreria CSS/JS framework-agnostic con componentes crimson para cualquier proyecto web.',
			lastUpdated: false,
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/' },
			],
			customCss: ['./src/assets/landing.css'],
			sidebar: [
				{
					label: 'Comienza aqui',
					items: [
						'introduccion',
						'guia/instalacion',
						'guia/astro',
						'guia/personalizacion',
						'guia/estructura',
					],
				},
				{
					label: 'Componentes',
					items: [
						'componentes/layout',
						'componentes/navegacion',
						'componentes/botones-badges',
						'componentes/forms',
						'componentes/cards-contenido',
						'componentes/tablas-listas',
						'componentes/modales-drawers',
						'componentes/interacciones',
						'componentes/animaciones',
					],
				},
				{
					label: 'Bloques',
					items: [
						'bloques/marketing',
						'bloques/application-ui',
						'bloques/ecommerce',
						'bloques/publisher',
						'bloques/paginas-estados',
					],
				},
				{
					label: 'Ejemplos',
					items: [
						'ejemplos/basic',
						'ejemplos/dashboard',
						'ejemplos/ecommerce',
						'ejemplos/credit-card',
					],
				},
				{
					label: 'Referencia',
					items: [
						'referencia/clases',
						'referencia/data-attributes',
						'referencia/tokens-css',
						'referencia/cdn',
					],
				},
			],
		}),
	],
});
