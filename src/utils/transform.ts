export const bool = (str?: string) => {
	switch (str) {
		case "true":
			return true;
		case "false":
			return false;
		default:
			return false;
	}
};
