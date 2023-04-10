import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { useEffect, useState } from "react";
import AlertDialog from '../dialogs/AlertDialog';

export default function CreateProduct(){
    const navigate = useNavigate();
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [price, setPrice] = useState();
    const [alertVisible, setAlertVisibility] = useState(false)
    const [alertMessage, setAlertMessage] = useState('')

    

    const addProduct  = async () => {
        setAlertVisibility(true);
        const product = {
            name,
            description,
            price
        }
        console.log(product);
        axios.defaults.headers.common['Authorization'] = process.env.REACT_APP_AUTH_HEADER;

        

        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}products`, {
                data: product
            });
            
            console.log(response)
            setAlertMessage('Succes')
            setTimeout(() => {
                navigate('/products')
            }, 1000)
        } catch (e) {
            console.log(e);
            setAlertMessage('Error')
        }
    }

    useEffect(() => {
        console.log('', process.env.REACT_APP_TEST);
    }, [])

    return (
        <div className="product-create">
            <AlertDialog visible={alertVisible} message={alertMessage}/>
            <div>
                <label>Name</label>
                <input 
                    type="text" 
                    value={name} 
                    onChange={(event) => {setName(event.target.value)}} 
                />
            </div>
            <div>
                <label>Description</label>
                <textarea 
                    value={description}
                    onChange={(event) => {setDescription(event.target.value)}} 
                ></textarea>
            </div>
            <div>
                <label>Price</label>
                <input 
                    type="number"
                    value={price}
                    onChange={(event) => {setPrice(Number(event.target.value))}} 
                />
            </div>
            <button onClick={() => addProduct()}>Save</button>
        </div>
    )
}