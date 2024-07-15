'use client';

import style from './style.min.module.css';

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useRef } from 'react';

const Carrossel = (props: { children: React.ReactNode }) => {
  const carrossel = useRef<HTMLDivElement>(null);

  const carrosselLeft = () => {
    const divCurrent = carrossel.current as HTMLElement;
    divCurrent.scrollLeft -= divCurrent.offsetWidth;
  };
  const carrosselRight = () => {
    const divCurrent = carrossel.current as HTMLElement;
    divCurrent.scrollLeft += divCurrent.offsetWidth;
  };

  return (
    <div ref={carrossel} className={style.movie_container}>
      <button
        onClick={carrosselLeft}
        id={style.rowLeft}
        type="button"
        className={style.row}
      >
        <FaArrowLeft />
      </button>

      {props.children}

      <button
        onClick={carrosselRight}
        id={style.rowRight}
        type="button"
        className={style.row}
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Carrossel;
