export default function ProductsList({ products }) {
    return (
        <div className="products-list">
            {
                products.map(product => (
                    <div className="table-row" key={product.id}>
                        <div>{product.attributes.name}</div>
                        <div>{product.attributes.description}</div>
                        <div>{product.attributes.price}</div>
                    </div>
                ))
            }
        </div>
    )
}