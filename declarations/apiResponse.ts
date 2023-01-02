export declare interface IResponseModel<T> {
	success: boolean;
	data: T | null;
	message: unknown;
	status: number;
}
