export const getCompColor = (originColor: string) => {
	const compColor = 0xffffff - parseInt(`0x${originColor}`);

	return `#${compColor.toString(16).padStart(6, '0')}`;
};
