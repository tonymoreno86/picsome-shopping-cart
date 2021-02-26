import React, {useContext} from "react"
import {Context} from '../Context'
import PropTypes from 'prop-types'
import useHover from '../hooks/useHover'

function CartItem(props) {
    const {removeFromCart} = useContext(Context)
    const [hovered, ref] = useHover()


    const iconName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"

    return (
        <div className="cart-item">
            <i className={iconName}
                ref={ref}
                onClick={() => removeFromCart(props.item.id)}></i>
            <img src={props.item.url} width="130px" alt="..."/>
            <p>$5.99</p>
        </div>
    )
}

clearTimeout.propTpes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}

export default CartItem