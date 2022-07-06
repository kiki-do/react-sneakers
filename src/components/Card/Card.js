import React from 'react';

function Card({ imageUrl, title, price, onPlus, onFavourite, favourited = false }) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavourite, setIsFavourite] = React.useState(favourited);

  const onClickPlus = () => {
    onPlus({ imageUrl, title, price });
    setIsAdded(!isAdded);
  };

  const onClickHeart = () => {
    onFavourite({ imageUrl, title, price });
    setIsFavourite(!isFavourite);
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
          src={isAdded ? 'img/plus-liked.svg' : 'img/plus.svg'}></img>
      </button>
      <button>
        {onFavourite && (
          <img
            onClick={onClickHeart}
            className="button-heart"
            width={20}
            height={20}
            src={isFavourite ? 'img/heart-liked.svg' : 'img/heart.svg'}></img>
        )}
      </button>
    </div>
  );
}

export default Card;