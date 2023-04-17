import { useEffect, useRef, useState } from "react";

export default function Carousel() {
  const [pictures, setPictures] = useState([
    ["Sbandi_1.jpg", false],
    ["Sbandi_2.jpg", false],
    ["Sbandi_3.jpg", false],
    ["Sbandi_4.jpg", false],
  ]);

  const currentSlide = useRef(0);

  function setCurrentSlide(i) {
    currentSlide.current = i;
    const list = [];
    for (let i = 0; i < pictures.length; i++) {
      list.push(false);
    }
    list[currentSlide.current] = true;
    setPictures((old) => old.map((pic, idx) => [pic[0], list[idx]]));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      let next;
      if (currentSlide.current === pictures.length - 1) {
        next = 0;
      } else {
        next = currentSlide.current + 1;
      }

      setCurrentSlide(next);
    }, 5000);
    setCurrentSlide(currentSlide.current);
    return () => clearInterval(interval);
  }, []);

  function slide(idx) {
    setCurrentSlide(idx);
  }

  const picturesElem = pictures.map((pic, idx) => (
    <div
      key={idx}
      className={`carousel--img mx-auto h-full ${
        pic[1] ? "" : "hidden"
      } flex justify-center`}
    >
      <img className="h-full object-contain text-white px-10" src={pic[0]} />
      <br />
    </div>
  ));

  const buttonElem = pictures.map((pic, idx) => (
    <div
      key={idx}
      onClick={() => slide(idx)}
      className={`${pic[1] ? "bg-yellow-600" : "bg-zinc-600"}  w-8 h-2`}
    ></div>
  ));

  return (
    <div style={{ height: "50vh" }}>
      <div className="h-full">{picturesElem}</div>
      <div className="flex justify-center mx-auto pb-2 relative bottom-8 gap-2 cursor-pointer opacity-70 hover:opacity-100">
        {buttonElem}
      </div>
    </div>
  );
}
