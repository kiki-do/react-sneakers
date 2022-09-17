import React from 'react';
import s from './Drawer.module.scss';
import { useSelector } from 'react-redux';

import DrawerItem from '../DrawerItem/DrawerItem';

const Drawer = ({ onClose }) => {
  const items = useSelector((state) => state.cartSlice.items);
  const totalPrice = useSelector((state) => state.cartSlice.totalPrice);

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
                <DrawerItem key={obj.id} {...obj} />
              ))}
            </div>

            <ul>
              <li>
                <span>Итого: </span>
                <div> </div>
                <b>{totalPrice} руб.</b>
              </li>
              <li>
                <span>Налог 5%: </span>
                <div> </div>
                <b>{Math.round(totalPrice * 0.05)} руб.</b>
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
};

export default Drawer;
