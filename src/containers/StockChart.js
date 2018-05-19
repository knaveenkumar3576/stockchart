import React,{Component} from 'react'
import { Chart } from 'react-google-charts';

import axiosHandler from '../hoc/axios-stock'
import Aux from '../hoc/Auxillary'


class StockChart extends Component {

    state = {
        selectedStocksDetails: []     
    }

    // componentWillReceiveProps(nextProps) {
    //     console.log("Will" + nextProps.selectedStocks)
    //     if(nextProps !== undefined) {
    //         this.updatePrices(nextProps);
    //     } 
    // }
    
    componentDidUpdate(nextProps, nextState) {
        console.log("Did" + this.props.selectedStocks)
        if (nextProps !== undefined) {
           setTimeout(() => { 
            this.updatePrices(this.props)
           }, 5000);
        }
     }
    updatePrices=(stocks) =>{
        let stockdetails =[]
        // stocks.selectedStocks.map((selectedStock) => {
        //     axiosHandler.get('/stock/'+ selectedStock + '/price')
        //     .then(response => {
        //         const stockdetail =[selectedStock, response.data]
        //         stockdetails.push(stockdetail)

        //         this.setState({
        //             selectedStocksDetails: stockdetails
        //         });
        
        //     })
        //     .catch(error => {
        //         this.setState({
        //         error : true
        //         });      
        //     })                  
        // })

        axiosHandler.get('/stock/market/batch?symbols='+ stocks.selectedStocks.join(",") + '&types=price')
        .then(response => {
            let res =  response.data

            for (let stockname in response.data) {
                const stockdetail =[stockname, res[stockname].price]
                stockdetails.push(stockdetail)
            }

            this.setState({
                selectedStocksDetails: stockdetails
            });
    
        })
        .catch(error => {
            this.setState({
            error : true
            });      
        })                  
    }

    render() {

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

        return (
          <div className={'my-pretty-chart-container'}>
            <Chart
            chartType="BarChart"
            rows = {this.state.selectedStocksDetails}
            columns={datacols}
            options={{showAllTooltips: true}}
            graph_id="BarChart"
            width="100%"
            height="400px"
            legend_toggle
            />
          </div>
        );
    }
}

export default StockChart
