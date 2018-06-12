import React, { Component } from 'react';

import Aux from '../../../hoc/_Aux/_Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    render () {
        const ingredientSummary = Object.keys( this.props.ingredients )
            .map( igKey => {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
                    </li> );
            } );

        return (
            <Aux>
                <h3>Seu Pedido:</h3>
                <p>Um delicioso burger com os seguintes ingredientes:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Preço Total: {this.props.price.toFixed( 2 )}</strong></p>
                <p>Ir para o Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCELAR</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUAR</Button>
            </Aux>
        );
    }
}

export default OrderSummary;