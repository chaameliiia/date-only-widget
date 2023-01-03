import Vibrant from 'node-vibrant';

export const getPalette = async (img: string) => {
	try {
		const palette = await Vibrant.from(img).getPalette();
		const mapColor = new Map();

		for (const [key, value] of Object.entries(palette)) {
			mapColor.set(key.toLowerCase(), { hex: value?.hex, text: value?.bodyTextColor });
		}

		return mapColor;
	} catch (err) {
		console.log('error:: ', err);
	}
};
