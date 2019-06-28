import { AxiosResponse } from "axios";
export declare const searchByOLNum: (otherLegNum: string | number) => Promise<AxiosResponse<IContact>>;
export declare const batch: (data: IBatchData) => Promise<AxiosResponse<IBatchResponce>>;
