import { useEffect, useState } from "react"
import { Product } from "../../../types"
import { Header } from "../../common/header"
import { ProductGrid } from "./product-grid"
import { fetchProducts } from "../../../utils"

export const ResultSection = () => {
    const [products, setProducts] = useState<Product[]>([])

    const loadProducts = async () => {
        const data = await fetchProducts();

        setProducts(data)
    }

    useEffect(()=>{
        loadProducts()
    }, [])

    return <>
        <Header title='Результат' description='Мы подобрали для вас наиболее подходящие средства' />
        {!!products.length && <ProductGrid products={products} />}
    </>
}