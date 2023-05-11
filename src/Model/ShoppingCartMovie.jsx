
import React from 'react';
import { addToCart, removeFromCart } from "../features/cartSlice";
import { useDispatch } from "react-redux";
import CalculateMoviePrice from '../Components/CalculateMoviePrice';
import './ShoppingCartMovie.css';




const ShoppingCartMovie = ({props}) => {

    const dispatch = useDispatch();

    //Skapa en + & - dispatcher

    const posterUrl = props.poster_path
        ? `https://image.tmdb.org/t/p/w500${props.poster_path}`
        : `https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png`;

    return (
        <div>
            <div className="shoppingCart">
                <div className="shoppingCartMovieContainer">
                    <img src={posterUrl} alt={"The cover of: " + props.title} />
                    <div className="cartMovieContainer">
                        <p className="cartMovieTitle">{props.title}</p>
                        <div className="cartItemProperties">
                            <div className="cartAmountContainer">
                                <button className='cartButtonMinus'>-</button>
                                <label htmlFor="amount">
                                    <input type="number"
                                        id="amount" className="cartMovieAmount" min="1" max="999" minLength="0" maxLength="3"
                                        onInput={(e) => {
                                            e.target.value = e.target.value.slice(0, 3);
                                        }}
                                    />
                                </label>
                                <button className='cartButtonPlus'>+</button>
                            </div>
                            <p className="cartMoviePrice">${props.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );



}

export default ShoppingCartMovie;