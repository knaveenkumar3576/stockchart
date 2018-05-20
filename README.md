# Stock Tracker

The Stock Tracker application allows to track stocks with real time price updates that are fetched through API's from https://iextrading.com/. If the user wants to track the stock 'XXX', then the user should select 'XXX' from the dropdown and clicks the add button. The selected stock will be appended to the list 'Added stocks' and the chart will be drawn for all the stocks that are selected.

The chart will be refreshed every 5 seconds with the real-time price of the stocks using the API '/stock/aapl/batch'.


## Main Components

StockController - The main component of the application with child components AddStockBar, StockItems, StockChart.

AddStockBar - This component which allows to add stocks to the list and will update the state of the StockController component.

StockItems - It will display all the stocks in a list. This will be a stateless component as the values to the list could be passed from the StockController.

StockChart - It will display the chart for all the sleected stocks. This is made as a separate component to avoid loading all the components when the price is updated every 5 seconds. At his point we can just update keep the price details in this component's state and refreshing it will update only this component.

## Miscellaneous
The exceptions are handled when the API fails to fetch the required data and suitable alert will be shown when the user tries to add a existing stock which is tracked.


## Built With

* [React]https://reactjs.org/


