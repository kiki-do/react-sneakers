import s from './Drawer.module.scss';

function Drawer({ onClose, onRemove, items = [] }) {
  return (
    <div className={s.overlay}>
      <div className={s.drawer}>
        <h2>
          Корзина
          <img onClick={onClose} src="img/remove.svg" alt="" className="removeBtn" />
        </h2>

        {items.length > 0 ? (
          <div>
            <div className={s.items}>
              {items.map((obj) => (
                <div key={obj.id} className={s.cartItem}>
                  <div
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                    className={s.cartItemImg}></div>
                  <div className={s.text}>
                    <p>{obj.title}</p>
                    <b>{obj.price} руб.</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.productId)}
                    src="img/remove.svg"
                    alt="X"
                    className={s.removeBtn}
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
            <button className={s.book}>
              <div>Оформить заказ</div>
              <img src="img/arrow.svg" alt="" className={s.arrow} />
            </button>
          </div>
        ) : (
          <div onClick={onClose} className={s.emptyCart}>
            <img src="img/empty_box.svg" alt="empty-cart" className={s.empty__box} />
            <h2>Корзина пустая</h2>
            <div>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</div>
            <button className={s.book}>
              <div>Вернуться назад</div>
              <img src="img/left-arrow.svg" alt="" className={s.arrow} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Drawer;
