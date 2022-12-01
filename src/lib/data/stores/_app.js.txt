import { writable } from 'svelte/store';

export const _app = writable({
	name: 'Nwp-App',
	back: false,
	theme: 'light'
});
