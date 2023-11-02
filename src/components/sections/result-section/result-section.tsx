import { useEffect, useState } from "react"
import { Product } from "../../../types"
import { Header } from "../../common/header"
import { ProductGrid } from "./product-grid"

export const ResultSection = () => {
    const [products, setProducts] = useState<Product[]>([])

    const loadProducts = async () => {
        const res = await fetch('./data/products.json')

        const data = await res.json()

        setProducts(data)
    }

    useEffect(()=>{
        loadProducts()
    }, [])

    return <>
        <Header title='Результат' description='Мы подобрали для вас наиболее подходящие средства' />
        {products.length && <ProductGrid products={products} />}
    </>
}