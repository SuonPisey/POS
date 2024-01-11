import { API_URL } from "@/app.config"

const BASE_URL = API_URL + '/products/items'
interface Category {
    id: string
    name: string
}
interface Stocks {
    warehouseName: string
    umName: string
    qtyInStock: number
}
interface price {
    value: number
    currency: string

}
interface ProductResponse {
    id: string
    name: string
    description?: string
    image_url?: string
    category_id: string
    unit: string
    currency: string
    product_type: string
    barcode?: string
    category: Category[]
    stocks?: Stocks[]
    price?: price[]
}

export interface Product {
}

export const ProductAPI = {
    async list(): Promise<ProductResponse[]> {
        const response = await fetch(BASE_URL)
        const data = (await response.json()) as ProductResponse[];
        return data;
    }
}