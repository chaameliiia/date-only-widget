import { derived, readable } from 'svelte/store';

const now = new Date();

// READABLE
export const year = readable('', (set) => set(`${now.getFullYear()}`));

export const month = readable('', (set) => {
	const monthArr = [
		'JAN',
		'FEB',
		'MAR',
		'APR',
		'MAY',
		'JUN',
		'JUL',
		'AUG',
		'SEP',
		'OCT',
		'NOV',
		'DEC'
	];

	set(monthArr[now.getMonth()]);
});

export const date = readable(0, (set) => set(now.getDate()));

export const days = readable('', (set) => {
	const daysArr = [
		'SUNDAY',
		'MONDAY',
		'TUESDAY',
		'WEDNESDAY',
		'THURSDAY',
		'FRIDAY',
		'SATURDAY',
		''
	];
	set(daysArr[now.getDay()]);
});

// DERIVED
export const page = derived(date, ($date) => Math.floor(Math.random() * (100 - Number($date))));
