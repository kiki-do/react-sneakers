import { Link } from 'react-router-dom';

function Header({ onClickCart, countSneakers }) {
  return (
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

          <div className="cost">{countSneakers} руб</div>
        </div>

        <Link to="/react-sneakers/favourite">
          <img className="heart" src="img/heart.svg" alt="heart"></img>
        </Link>
        <img className="profile" src="img/profile.svg"></img>
      </div>
    </header>
  );
}

export default Header;
