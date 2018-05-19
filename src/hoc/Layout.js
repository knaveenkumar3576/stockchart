import React,{Component} from 'react'
import Aux from '../hoc/Auxillary'
import AppHeader from '../components/AppHeader'
import StockController from '../containers/StockController'


import classes from './Layout.css'

class Layout extends Component {

    render() {
        return (
            <Aux>
                <AppHeader> </AppHeader>
                <StockController> </StockController>
            </Aux>
        );
    }
 }

export default Layout