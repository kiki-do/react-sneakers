import React from 'react';
import { useParams } from 'react-router-dom';
import s from './Modal.module.scss';
import { useSelector } from 'react-redux';
import { setItems } from '../../store/slices/sneakersSlice';
import axios from 'axios';

const Modal = ({ onClose, imageUrl, title, price }) => {
  const items = useSelector((state) => state.sneakersSlice.items);
  const { id } = useParams();

  const fetchModal = async () => {
    try {
      const { data } = await axios.get(
        'https://62c29b14ff594c65675fefd6.mockapi.io/items/' + items.id,
      );
      setItems(data);
    } catch (error) {
      console.log('6red');
    }
  };

  React.useEffect(() => {
    fetchModal();
  }, []);

  return (
    <div className={s.overlay}>
      {console.log(id)}
      <div className={s.modal}>
        <div>
          <div key={items.id} className={s.cartItem}>
            <img src={items.imageUrl} alt="X" className={s.removeBtn} />
            <div className={s.text}>
              <p>{items.title}</p>
              <b>{items.price} руб.</b>
            </div>
            <img onClick={onClose} src="img/remove.svg" alt="X" className={s.removeBtn} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
