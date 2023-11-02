import { Product } from "../types"

export const fetchProducts = async () => {
    try {
        const res = await fetch('./data/products.json')
    
        return await res.json() as Product[]
    }
    catch (err) {
        console.error(err)
        return [] as Product[]
    }
}