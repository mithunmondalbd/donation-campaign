import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Cart = ({ cart }) => {
    const {id, picture, title, category, card_bg_color } = cart || {};
    return (
        <div>
            <Link to={`/cart/${id}`}>
                <div className={`mt-6 flex gap-17 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md bg-${card_bg_color}`}>
                    <div className="p-4">
                        <img src={picture} alt="" className="h-44 w-full" />
                        <div className="pt-3 h-24 ">
                            <h5 className="flex-grow font-sans text-base font-light leading-relaxed text-inherit antialiased border w-20 text-center">
                                {category}
                            </h5>
                            <p className="mb-2 flex-grow font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                {title}
                            </p>
                        </div>
                    </div>
                    
                </div>
            </Link>
        </div>
    );
};

Cart.propTypes = {
    cart:PropTypes.object
}

export default Cart;