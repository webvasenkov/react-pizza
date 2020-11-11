import React, {useEffect} from 'react'
import Main from "./Main";
import {connect} from "react-redux";
import {setPizzas} from "../redux/reducers/pizzasReducer";
import {getPizzas} from "../back/selectors";

const MainContainer = ({pizzas}) => {
    useEffect(() => {
        setPizzas()
    }, [])

    return <Main pizzas={pizzas}/>
}

const mapStateToProps = (state) => ({pizzas: getPizzas(state)})

export default connect(mapStateToProps, setPizzas)(MainContainer)