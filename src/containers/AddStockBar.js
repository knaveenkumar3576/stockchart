import React,{Component} from 'react'
import {Button,ButtonToolbar,ButtonGroup} from 'react-bootstrap'

import VirtualizedSelect from 'react-virtualized-select'
import 'react-select/dist/react-select.css'

import Aux from '../hoc/Auxillary'
import './AddStockBar.css'

class AddStockBar extends Component {
    
    state = {
        selectValue : ''
    }

	updateValue = (newValue) => {
		this.setState({
			selectValue: newValue
		});
	}

    render() {
        return (
            <Aux>
                <ButtonGroup className='AddStockBar'>
                    <VirtualizedSelect 
                        className='SelectStock'
                        ref="citySelect"
                        options={this.props.options}
                        simpleValue
                        clearable
                        value={this.state.selectValue}
                        onChange={this.updateValue}
                        name="select-stock"
                        searchable
                        labelKey="symbol" 
                        valueKey="symbol"
                    />
                    <ButtonToolbar>
                        <Button className='addbutton' onClick={() => this.props.addStockHandler(this.state.selectValue)} bsStyle="primary">Add</Button>
                    </ButtonToolbar>
                </ButtonGroup>
                {this.props.alert}
            </Aux>
        );
    }

}


export default AddStockBar