'use client';

import './style.min.css';

import { BiArrowToBottom } from 'react-icons/bi';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ListArrow = (props: any) => {
  const toggle = () => {
    const inputEl = document.querySelector(props.elementId) as HTMLElement;
    inputEl.classList.toggle(props.classValue);
  };
  return (
    <>
      <button className="button_listArrow" onClick={toggle} type="button">
        {props.text} <BiArrowToBottom />
      </button>
    </>
  );
};

export default ListArrow;
