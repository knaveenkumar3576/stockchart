import React from 'react'

import {Label} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import StockItem from './StockItems/StockItem'

import './StockItems.css';

const StockItems = (props) => {
    const stockItems = props.listItems.map((item)=> {
        return(
            <StockItem 
                item={item} 
            />
        )
    })

    return (
    <div className='StockItems'>
        <Label> Added Stocks</Label>         
        {stockItems}          
    </div>
    );
}

export default StockItems