    export interface Img {
        url: string;
        hdUrl: string;
    }

    export interface Product {
        img: Img;
        _id: string;
        name: string;
        cost: number;
        category: string;
    }
