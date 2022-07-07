import '../index.scss';

function Drawer({ onClose, onRemove, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2>
          Корзина
          <img onClick={onClose} src="img/remove.svg" alt="" className="removeBtn" />
        </h2>

        {items.length > 0 ? (
          <div>
            <div className="items">
              {items.map((obj) => (
                <div className="cartItem">
                  <div
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                    className="cartItemImg"></div>
                  <div className="text">
                    <p>{obj.title}</p>
                    <b>{obj.price} руб.</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    src="img/remove.svg"
                    alt="X"
                    className="removeBtn"
                  />
                </div>
              ))}
            </div>

            <ul>
              <li>
                <span>Итого: </span>
                <div> </div>
                <b>21 498 руб.</b>
              </li>
              <li>
                <span>Налог 5%: </span>
                <div> </div>
                <b>1074 руб.</b>
              </li>
            </ul>
            <button className="book">
              <div>Оформить заказ</div>
              <img src="img/arrow.svg" alt="" className="arrow" />
            </button>
          </div>
        ) : (
          <div onClick={onClose} className="emptyCart">
            <img src="img/empty_box.svg" alt="empty-cart" className="empty-box" />
            <h2>Корзина пустая</h2>
            <div>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</div>
            <button className="book">
              <div>Вернуться назад</div>
              <img src="img/left-arrow.svg" alt="" className="arrow" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Drawer;
