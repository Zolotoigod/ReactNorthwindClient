import React, {useEffect, useState} from 'react';
import { Table } from 'react-bootstrap';
import NumberFormat from 'react-number-format';

function Products(){
    const [prods, setProds] = useState({array:[]});
    let currentPage = 0;
    useEffect(() => {
        const productPath = `https://localhost:5001/api/products/${currentPage * 10}/10`;
        fetch(productPath)
        .then(response => response.json())
        .then(data => {setProds({array:data})});
    }, []); // empty array need to stop the infinite cicle (useEffect start when componnetn did mount and aupdate)!!!

    return(
        <div>
            <Table className='mt-4' striped bordered hover variant='dark' size='lg'>
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th>Quantity Per Unit</th>
                        <th>Unit Price</th>
                        <th>Units In Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {prods.array.map(product=>
                            <tr key={product.productId}>
                                <td>{product.productId}</td>
                                <td className='text-justify'>{product.productName}</td>
                                <td className='text-justify'>{product.quantityPerUnit}</td>
                                <td><NumberFormat displayType='text' value={product.unitPrice} suffix={'$'}/></td>
                                <td className='text-end'>{product.unitsInStock}</td>
                            </tr>
                        )}
                </tbody>
            </Table>
        </div>
    )
}

export default Products