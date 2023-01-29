export interface Product {
    id: number;
    name: string;
    price: number;
    brand?: string;
    description?: string;
    pictureUrl?: string;
    type?: string;
    quantityInStock?: number;
}