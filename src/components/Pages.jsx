import React, {useState} from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import { Pagination } from 'react-bootstrap';

function Pages() {    
    return(
        <div>
            <ButtonGroup className="me-2" aria-label="First group">
                <Button variant="primary" onClick={this.props.currentPage = 1}>1</Button>
            </ButtonGroup>
        </div>
    )
}

export default Pages