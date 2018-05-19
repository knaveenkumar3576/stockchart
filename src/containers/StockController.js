import React,{Component} from 'react'

import AddStockBar from '../containers/AddStockBar'
import StockChart from '../containers/StockChart'

import StockItems from '../components/StockItems'
import axiosHandler from '../hoc/axios-stock'
import Aux from '../hoc/Auxillary'

import classes from './StockController.css'

class StockController extends Component {

    state = {
        availableStocks: [],
        selectedStocks: [],
    }

    componentWillMount() {
        let stocks = [];
        axiosHandler.get('/ref-data/symbols')
        .then(response => {

            this.setState({
                availableStocks : response.data
            });

        })
        .catch(error => {
            this.setState({
            error : true
            });      
        })
    }
    
    addStockHandler=(selectedStock)=> {
        let stocks = [...this.state.selectedStocks];

        if(!stocks.includes(selectedStock)) {
            axiosHandler.get('/stock/'+ selectedStock + '/price')
            .then(response => {

                stocks.push(selectedStock)

                this.setState({
                    selectedStocks: stocks,
                });
        
            })
            .catch(error => {
                this.setState({
                error : true
                });      
            })              
        }
    }

    render() {

        return (
            <Aux>
                <AddStockBar options={this.state.availableStocks} addStockHandler={this.addStockHandler}></AddStockBar>
                <StockItems listItems={this.state.selectedStocks}></StockItems>
                <StockChart selectedStocks={this.state.selectedStocks}> </StockChart> 
            </Aux>
        );
    }
 }

export default StockController
