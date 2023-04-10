import axios from 'axios';
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import { useEffect, useState } from 'react';
import ProductsList from '../../components/products/List';
import { Link } from 'react-router-dom';

export default function ProductsListPage() {

    const [products, setProducts] = useState([{
        attributes: { name: "test" }
    }]);


    const getProducts = async () => {
        axios.defaults.headers.common['Authorization'] = process.env.REACT_APP_AUTH_HEADER;

        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}products`);
            setProducts(response.data.data);
            console.log(products)
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getProducts();
    }, [])


    return (
        <>
            <Header />
            <div id='products-page'>
                <h1>Products</h1>
                <div className='actions'>
                    <button onClick={() => { getProducts() }}>refresh</button>
                    <Link to={'/products/create'}><button>Create</button></Link>
                </div>
                <ProductsList products={products} />
            </div>
            <Footer />
        </>
    )
}