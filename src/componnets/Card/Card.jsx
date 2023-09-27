
import Cart from "./Cart";
import PropTypes from 'prop-types';
const Card = ({ card }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {
                card?.map(cart => <Cart key={cart.id} cart={cart}></Cart>)
            }
        </div>
        
    );
};
Card.propTypes ={
    card: PropTypes.object
}

export default Card;