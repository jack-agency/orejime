export function arrayOfArrays(arr) {
	if (Array.isArray(arr) && arr.some((node) => !Array.isArray(node))) {
		return [arr];
	}

	return arr;
}
