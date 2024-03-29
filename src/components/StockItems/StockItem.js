import React from 'react'

import {ListGroupItem} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const StockItem = (props) => {
    return (
        <ListGroupItem>{props.item}</ListGroupItem> 
    );
}

export default StockItem