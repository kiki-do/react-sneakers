import React from 'react';

function Card({ imageUrl, title, price, onPlus }) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);

  const onClickPlus = () => {
    onPlus({ imageUrl, title, price });
    setIsAdded(!isAdded);
  };

  const onClickHeart = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="card">
      <img className="sneakers" width={133} height={112} src={imageUrl} alt=""></img>
      <p>{title}</p>
      <div className="price">
        <span>Цена:</span>
        <b>{price} руб.</b>
      </div>
      <button>
        <img
          onClick={onClickPlus}
          className="button"
          width={20}
          height={20}
          src={isAdded ? '../img/plus-liked.svg' : '../img/plus.svg'}></img>
      </button>
      <button>
        <img
          onClick={onClickHeart}
          className="button-heart"
          width={20}
          height={20}
          src={isFavorite ? '../img/heart-liked.svg' : '../img/heart.svg'}></img>
      </button>
    </div>
  );
}

export default Card;
