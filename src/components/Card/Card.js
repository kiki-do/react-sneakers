import React from 'react';
import s from './Card.module.scss';
function Card({ imageUrl, title, price, onPlus, onFavourite, favourited = false, id }) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavourite, setIsFavourite] = React.useState(favourited);

  const onClickPlus = () => {
    onPlus({ imageUrl, title, price, id });
    setIsAdded(!isAdded);
  };

  const onClickHeart = () => {
    onFavourite({ imageUrl, title, price, id });
    setIsFavourite(!isFavourite);
  };

  return (
    <div className={s.card}>
      <img className={s.sneakers} width={133} height={112} src={imageUrl} alt=""></img>
      <p>{title}</p>
      <div className={s.price}>
        <span>Цена:</span>
        <b>{price} руб.</b>
      </div>
      <button>
        <img
          onClick={onClickPlus}
          className={s.button}
          width={20}
          height={20}
          src={isAdded ? 'img/plus-liked.svg' : 'img/plus.svg'}></img>
      </button>
      <button>
        {onFavourite && (
          <img
            onClick={onClickHeart}
            className={s.button__heart}
            width={20}
            height={20}
            src={isFavourite ? 'img/heart-liked.svg' : 'img/heart.svg'}></img>
        )}
      </button>
    </div>
  );
}

export default Card;
