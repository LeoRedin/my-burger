import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Alface', type: 'alface' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Queijo', type: 'queijo' },
    { label: 'Carne', type: 'carne' },
    { label: 'Tomate', type: 'tomate' },
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Preço Total: <strong> R$ {props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]} />
        ))}
        <button 
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}>{props.isAuth ? 'PEÇA AGORA' : 'CADASTRE-SE PARA CONTINUAR'}</button>
    </div>
);

export default buildControls;