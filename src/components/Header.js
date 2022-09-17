import { Link } from 'react-router-dom';

import React from 'react';
import { useSelector } from 'react-redux';

const Header = ({ onClickCart }) => {
  const isMounted = React.useRef(false);
  const items = useSelector((state) => state.cartSlice.items);
  const totalPrice = useSelector((state) => state.cartSlice.totalPrice);
  const favourites = useSelector((state) => state.favouriteSlice.items);
  const totalCount = items.reduce((sum, item) => item.count + sum, 0);
  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem('cart', json);
    }
    isMounted.current = true;
  }, [items]);

  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(favourites);
      localStorage.setItem('favourite', json);
    }
    isMounted.current = true;
  }, [favourites]);

  return (
    <div>
      <header>
        <div className="leftHeader">
          <div className="logo">
            <Link to="/react-sneakers/">
              <img width={40} height={40} src="img/logo.svg" alt="logo"></img>
            </Link>
            <div className="text">
              <h3 className="title">React sneakers</h3>
              <div className="subtitle">Магазин лучших кроссовок</div>
            </div>
          </div>
        </div>

        <div className="rightHeader">
          <div className="cart">
            <img onClick={onClickCart} src="img/cart.svg"></img>
            <div onClick={onClickCart} className="cost">
              {totalPrice} руб
            </div>
          </div>

          <Link to="/react-sneakers/favourite">
            <img className="heart" src="img/heart.svg" alt="heart"></img>
            {/* <div>{totalCount}</div> */}
          </Link>
        </div>
      </header>
    </div>
  );
};
export default Header;
