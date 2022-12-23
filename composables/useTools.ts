export const useTools = () => {
	function notEmpty<TValue>(value: TValue | null | undefined): value is TValue {
		return value !== null && value !== undefined;
	}
	return { notEmpty };
};
