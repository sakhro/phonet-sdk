export declare const searchContactByPhoneNumber: (phoneNumber: string | number) => Promise<IContact>;
export declare const postContacts: (data: IBatchData) => Promise<import("axios").AxiosResponse<IBatchResponce>>;
