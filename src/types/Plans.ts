export type Plans = {
    id: number;
    isp: string;
    data_capacity?: number;
    download_speed: number;
    upload_speed: number;
    description: string;
    price_per_month: number;
    type_of_internet: string;
}