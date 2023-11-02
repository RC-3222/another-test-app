import { Product } from "../../../../types"
import { ProductCard } from "../product-card"

import styles from './product-grid.module.scss'

type ProductGridProps = {
    products: Product[]
}

export const ProductGrid = (
    { products }: ProductGridProps
) => {
    return <div className={styles.grid}>
        {products.map(prod => <ProductCard key={prod.id} product={prod} />)}
    </div>
}