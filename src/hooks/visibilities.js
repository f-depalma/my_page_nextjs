import { useEffect, useState, useRef } from "react";
import { Visibility } from "../Utils/Visibility";

export const useVisibilities = (elements) => {
  const _visibilities = [];
  const pageHeight = 1000;

  for (let i = 0; i < elements; i++) {
    _visibilities.push(new Visibility(i));
  }

  const [visibilities, setVisibilities] = useState(_visibilities);
  const lastScrollPosition = useRef(0);

  useEffect(() => {
    function tuneVisibility(id, value) {
      const visibility = findVisibility(id);
      if (visibility) {
        visibility.setVisibility(value);
        setVisibilities((old) => [
          ...old.filter((obj) => obj.id !== id),
          visibility,
        ]);
      }
    }

    function findVisibility(id) {
      return visibilities.find((obj) => obj.id === id);
    }

    tuneVisibility(0, 1);
    tuneVisibility(1, 0);

    const calculate = () => {
      const scrollPosition = window.scrollY;

      const section = Math.floor(scrollPosition / pageHeight);

      const perc = (scrollPosition / (pageHeight / 2)) % 2;

      const isScrollingDown = scrollPosition - lastScrollPosition.current > 0;

      if (isScrollingDown ? perc < 1 : perc > 1) {
        const angle = (Math.PI / 2) * (perc % 1);

        for (let i = 0; i < elements; i++) {
          if (i === section)
            tuneVisibility(
              i,
              isScrollingDown
                ? 1 - Math.sin(angle) / 2
                : Math.cos(angle) / 2
            );
          else if (i === section + 1)
            tuneVisibility(
              i,
              isScrollingDown
                ? Math.sin(angle) / 2
                : 1 - Math.cos(angle) / 2
            );
          else tuneVisibility(i, 0);
        }
      } else {
        window.removeEventListener("scroll", calculate);

        const scrollDown = (_scrollPosition) => {
          const haveToScroll = _scrollPosition < (section + 1) * pageHeight;
          if (haveToScroll)
            window.scrollTo({
              top: _scrollPosition + 20,
            });
          return !haveToScroll;
        };

        const scrollUp = (_scrollPosition) => {
          const haveToScroll = _scrollPosition > section * pageHeight;
          if (haveToScroll)
            window.scrollTo({
              top: _scrollPosition - 20,
            });
          return !haveToScroll;
        };

        const interval = setInterval(() => {
          const _scrollPosition = window.scrollY;

          const haveToStop =
            _scrollPosition - lastScrollPosition.current > 0
              ? scrollDown(_scrollPosition)
              : scrollUp(_scrollPosition);

          if (haveToStop) {
            clearInterval(interval);
            lastScrollPosition.current = window.scrollY
            window.addEventListener("scroll", calculate);
          } else {
            const _perc = (_scrollPosition % pageHeight) / pageHeight;
            tuneVisibility(section, 1 - _perc);
            tuneVisibility(section + 1, _perc);
          }
        }, 20);
      }

      lastScrollPosition.current = window.scrollY;
    };

    window.addEventListener("scroll", calculate);

    return () => window.removeEventListener("scroll", calculate);
  }, []);

  return visibilities;
};
