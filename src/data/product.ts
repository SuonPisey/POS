import { API_URL } from "@/app.config"

const BASE_URL = API_URL+'/products/items'
interface ProductResponse {
    id: string
    name: string
    price: number
    description: string
    image_url: string
    category_id: string
    unit: string
    currency: string
}

export interface Product {
}

export const ProductAPI = {
    async list(): Promise<Product[]> {
        const response = await fetch(BASE_URL)
        const data = (await response.json()) as ProductResponse[]
        return data as Product[]
    }
}