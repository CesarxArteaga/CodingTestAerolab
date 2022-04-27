export interface User {
    _id: string;
    name: string;
    points: number;
    createDate: Date;
    redeemHistory: any[];
    __v: number;

}