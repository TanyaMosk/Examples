import { useState } from 'react';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import css from './App.module.css';


const images = [
  "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
];


export const App = () => {
  const [current, setCurrent] = useState(0);
  // Перевіряємо чи поточний номер img, якщо останній в масиві то переходимо до першого(0) 
  const nextImage = () => setCurrent(current === images.length - 1 ? 0 : current + 1); 

  // Перевіряємо поточний номер img, якщо то 0 то переходимо до останього images.length - 1
  const prevImage = () => setCurrent(current === 0 ? images.length - 1 : current - 1); 

  return (
  <div>
    <h1 className={css.title}>Images Slider</h1>
    <div className={css.slider}>
        <div onClick={prevImage}>
        <BsFillArrowLeftCircleFill/>
      </div>
      <div>
        {images.map((image, i) =>
        current === i && (
        <div key={image}>
          <img src={image} alt='images' width={360} height={340}/>
        </div>
        ))}
      </div>
      <div onClick={nextImage}>
        <BsFillArrowRightCircleFill/>
      </div>      
    </div>
  </div>
  );
};
