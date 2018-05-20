import React,{Component} from 'react'
import {Grid,Row,Col,Alert} from 'react-bootstrap'

import AddStockBar from '../containers/AddStockBar'
import StockChart from '../containers/StockChart'

import StockItems from '../components/StockItems'
import axiosHandler from '../hoc/axios-stock'
import Aux from '../hoc/Auxillary'

import './StockController.css'

class StockController extends Component {

    state = {
        availableStocks: [],
        selectedStocks: [],
        stockExists: false,
        error : false,
        errormessage: ''
    }

    componentWillMount() {
        axiosHandler.get('/ref-data/symbols')
        .then(response => {
            this.setState({
                availableStocks : response.data
            });

        })
        .catch(error => {
            this.setState({
                error : true,
                errormessage: 'Could not load the options through the API /ref-data/symbols'
            });      
        })
    }
    
    addStockHandler=(selectedStock)=> {
        let stocks = [...this.state.selectedStocks];

        if(selectedStock === '') {
            return;
        }

        if(!stocks.includes(selectedStock)) {
            stocks.push(selectedStock)
            this.setState({
                selectedStocks: stocks,
                stockExists: false
            });            
        } else {
            this.setState({
                stockExists: true
            });

        }
    }

    render() {
        let stockAlreadyExistsAlert='';
        let errorAlert='';

        if(this.state.stockExists) {
            stockAlreadyExistsAlert = (<Alert className='existsAlert' bsStyle="info">
                <strong>The stock already exists. Please add a different stock</strong>
            </Alert>)
        }
        
        if(this.state.error) {
            errorAlert = (<Alert className='errorAlert' bsStyle="danger">
                <strong>{this.state.errormessage}</strong>
            </Alert>)
        }

        
        return (
            <Aux>
                {errorAlert}
                <AddStockBar options={this.state.availableStocks} addStockHandler={this.addStockHandler} alert={stockAlreadyExistsAlert}></AddStockBar>
                <Grid>  
                    <Row className="show-grid vcenter">
                        <Col md={2}>
                            <StockItems className='StockItems' listItems={this.state.selectedStocks}></StockItems>
                        </Col>
                        <Col md={10}>
                            <StockChart className='StockChart' selectedStocks={this.state.selectedStocks}> </StockChart>                 
                        </Col>
                    </Row>
                </Grid>
            </Aux>
        );
    }
 }

export default StockController
