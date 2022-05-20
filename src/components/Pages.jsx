import React, {Component} from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import { Pagination } from 'react-bootstrap';

class Pages extends Component {    
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.setList();
    }
    setList(){
        var allitems = fetch('https://localhost:5001/api/products').then(res => res.json());
        var pageCount = Math.floor(parseInt(allitems) / this.itemPerPage)
    }
    render(){
        return(
            <div>
                <ButtonGroup className="me-2" aria-label="First group">
                   <Button variant="primary" onClick={this.props.currentPage = 1}>1</Button>
                </ButtonGroup>
            </div>
        )
    }
}

export default Pages