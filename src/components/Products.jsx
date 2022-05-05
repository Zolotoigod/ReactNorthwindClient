import React, {Component} from 'react';
import { Table } from 'react-bootstrap';

class Products extends Component {
    constructor(props){
        super(props);
        this.state={prods:[]}
    }
    componentDidMount(){
        this.setList();
    }
    setList(){

    }
    render(){
        const {prods} = this.state;
        return(
            <div>
                <Table className='mt-4' striped bordered hover size='lg'>
                    <thead>
                        <tr>
                            <th>Product ID</th>
                            <th>Product Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {prods.map(product=>
                                <tr key={product.ProductId}>
                                    <td>{product.ProductId}</td>
                                    <td>{product.ProductName}</td>
                                </tr>
                            )}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Products