import React,{Component} from 'react'
import { Chart } from 'react-google-charts';

import {Alert} from 'react-bootstrap'

import axiosHandler from '../hoc/axios-stock'

import './StockChart.css'

class StockChart extends Component {

    state = {
        selectedStocksDetails: [],     
        error : false,
        errormessage: ''
    }
    
    componentDidUpdate(nextProps, nextState) {
        if (nextProps !== undefined) {
           setTimeout(() => { 
            this.updatePrices(this.props)
           }, 5000);
        }
     }

     updatePrices=(stocks) =>{
        let stockdetails =[]

        if(stocks.selectedStocks.length !==0 ) {

            axiosHandler.get('/stock/market/batch?symbols='+ stocks.selectedStocks.join(",") + '&types=price')
            .then(response => {
                let res =  response.data
    
                for (let stockname in response.data) {
                    const stockdetail =[stockname, res[stockname].price]
                    stockdetails.push(stockdetail)
                }
    
                this.setState({
                    selectedStocksDetails: stockdetails,
                    error: false,
                    errormessage: ''
                });
        
            })
            .catch(error => {
                this.setState({
                    error : true,
                    errormessage: 'Could not get the prices using /stock/market/batch?symbols API to update the chart'
                });      
            })                      
        }
    }

    render() {

        let errorAlert='';
        
        const datacols = [
            {
              type: 'string',
              label: 'Name',
            },
            {
              type: 'number',
              label: 'Price',
            },
        ];

        if(this.state.error) {
            errorAlert = (<Alert className='errorAlert' bsStyle="danger">
                <strong>{this.state.errormessage}</strong>
            </Alert>)
        }

        return (
          <div className={'my-pretty-chart-container'}>
            <Chart
                chartType="BarChart"
                rows = {this.state.selectedStocksDetails}
                columns={datacols}
                options={{title: 'Stock-Price Bar Chart', showAllTooltips: true}}
                graph_id="BarChart"
                width="100%"
                height="400px"
                legend_toggle
            />
            {errorAlert}
          </div>
        );
    }
}

export default StockChart
