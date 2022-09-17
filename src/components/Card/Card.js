import React from 'react';
import s from './Card.module.scss';
import { useDispatch, useSelector } from 'react-redux';

import { addItem, removeItem } from '../../store/slices/cartSlice';
import { addFavourite, removeFavourite } from '../../store/slices/favouriteSlice';

const Card = ({ items, onClickImg }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartSlice.items);
  const favourite = useSelector((state) => state.favouriteSlice.items);
  const isExistCart = cart.some((item) => item.id === items.id);
  const isExistFavourite = favourite.some((item) => item.id === items.id);
  console.log(favourite);
  return (
    <div className={s.card}>
      <img
        className={s.sneakers}
        width={133}
        height={112}
        src={items.imageUrl}
        alt="ps"
        onClick={onClickImg}></img>
      <p>{items.title}</p>
      <div className={s.price}>
        <span>Цена:</span>
        <b>{items.price} руб.</b>
      </div>
      <button>
        <img
          onClick={() => {
            if (!isExistCart) dispatch(addItem(items));
            else dispatch(removeItem(items.id));
          }}
          className={s.button}
          width={20}
          height={20}
          src={isExistCart ? 'img/plus-liked.svg' : 'img/plus.svg'}></img>
      </button>
      <button>
        <img
          onClick={() => {
            if (!isExistFavourite) dispatch(addFavourite(items));
            else dispatch(removeFavourite(items.id));
          }}
          className={s.button__heart}
          width={20}
          height={20}
          src={isExistFavourite ? 'img/heart-liked.svg' : 'img/heart.svg'}></img>
      </button>
    </div>
  );
};

export default Card;
