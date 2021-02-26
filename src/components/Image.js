import React, {useContext} from 'react'
import {Context} from '../Context'
import PropTypes from 'prop-types';
import useHover from '../hooks/useHover'

function Image(props) {
    const {toggleFavorite, addToCart, cartItems, removeFromCart} = useContext(Context)
    // const [isHovered, setIsHovered] = useState(false)
    const [hovered, ref] = useHover()

    // function mouseEnter() {
    //     setIsHovered(true)
    // }

    // function mouseLeave() {
    //     setIsHovered(false)
    // }

    function heartIcon() {
        if(props.img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(props.img.id)}></i>
        } else if(hovered) {
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(props.img.id)} ></i> 
        }
    }

    function cartIcon() {
        const inCart = cartItems.some(item => item.id === props.img.id)
        if(inCart) {
            return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(props.img.id)}></i>
        } else if (hovered) {
            return <i className="ri-add-circle-line cart" onClick={() => addToCart(props.img)}></i>
        }
    }

    return (
        <div 
            className={`${props.className} image-container`}
            ref={ref}
        >
            <img src={props.img.url} className="image-grid" alt="..." />
            {heartIcon()}
            {cartIcon()}
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Image