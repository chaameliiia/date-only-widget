import { readable } from 'svelte/store';

export const date = readable('', (set) => {
	const daysArr = ['일', '월', '화', '수', '목', '금', '토'];
	const now = new Date();
	const year = now.getFullYear();
	const month = now.getMonth() + 1;
	const date = now.getDate();
	const days = daysArr[now.getDay()];

	set(`${year}년 ${month}월 ${date}일 ${days}요일`);
});
