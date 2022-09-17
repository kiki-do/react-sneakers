import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem } from '../../store/slices/cartSlice';
import s from '../Drawer/Drawer.module.scss';

const DrawerItem = ({ id, title, imageUrl, price }) => {
  const dispatch = useDispatch();

  const onClickRemove = () => {
    dispatch(removeItem(id));
  };

  return (
    <div>
      <div key={id} className={s.cartItem}>
        <div style={{ backgroundImage: `url(${imageUrl})` }} className={s.cartItemImg}></div>
        <div className={s.text}>
          <p>{title}</p>
          <b>{price} руб.</b>
        </div>
        <img onClick={onClickRemove} src="img/remove.svg" alt="X" className={s.removeBtn} />
      </div>
    </div>
  );
};

export default DrawerItem;
