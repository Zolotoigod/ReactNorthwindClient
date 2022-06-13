import React from 'react';
import {Button} from 'react-bootstrap';

function Home() {
    return(
        <div className='d-grid gap-3 mt-5'>
            <Button variant="secondary" size='lg' href='/products'><h3>Products</h3></Button>
            <Button variant="secondary" size='lg' href='/categories'><h3>Categories</h3></Button>
            <Button variant="secondary" size='lg' href='/blog'><h3>Blog</h3></Button>
        </div>
    )
}

export default Home