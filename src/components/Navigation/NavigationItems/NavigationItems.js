import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Monte Seu Burger</NavigationItem>
        {props.isAuthenticated ? <NavigationItem link="/orders">Pedidos</NavigationItem> : null}
        {props.isAuthenticated
            ? <NavigationItem link="/logout">Sair</NavigationItem>
            : <NavigationItem link="/auth">Entrar</NavigationItem>}
    </ul>
);

export default navigationItems;