import React, {Component} from 'react';
import { Table } from 'react-bootstrap';
import NumberFormat from 'react-number-format';
import Pages from './Pages';

class Products extends Component {
    constructor(props){
        super(props);
        this.state={prods:[]}
    }
    componentDidMount(){
        this.setList(this.props);
    }
    setList(props){
        let currentPage = 0;
        const productPath = `https://localhost:5001/api/products/${currentPage * 10}/10`;
        fetch(productPath)
        .then(response => response.json())
        .then(data => {
            this.setState({prods:data})
        })
    }
    render(){
        const {prods} = this.state;
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
                        {prods.map(product=>
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
                <Pages/>
            </div>
        )
    }
}

export default Products