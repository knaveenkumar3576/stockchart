import React from 'react'

import {Panel,ListGroup} from 'react-bootstrap';
import StockItem from './StockItems/StockItem'

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
        <Panel bsStyle="info">
        <Panel.Heading>
            <Panel.Title componentClass="h5">Added Stocks</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
            <ListGroup>
                {stockItems}
            </ListGroup>
        </Panel.Body>
        </Panel>
     </div>
    );
}

export default StockItems