import axios from 'axios';
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CreateProduct from '../../components/products/Create';

export default function ProductsCreatePage() {


    return (
        <>
            <Header />
            <div id='products-page'>
                <h1>Product create</h1>
                <div className='actions'>
                    <span></span>
                    <Link to={'/products'}><button>Back to list</button></Link>
                </div>
                <div>
                    <CreateProduct/>
                </div>
            </div>
            <Footer />
        </>
    )
}