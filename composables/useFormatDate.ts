import moment from "moment";

export const useFormatDate = () => {
	const formatDate = (date: string) => moment(date).locale("dk").format("YYYY MMM");
	return { formatDate };
};
