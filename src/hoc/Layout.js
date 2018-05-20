import React,{Component} from 'react'
import Aux from '../hoc/Auxillary'
import AppHeader from '../components/AppHeader'
import StockController from '../containers/StockController'

class Layout extends Component {

    render() {
        return (
            <Aux>
                <AppHeader> </AppHeader>
                <StockController className='StockController'> </StockController>
            </Aux>
        );
    }
 }

export default Layout