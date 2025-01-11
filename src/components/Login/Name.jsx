import { useEffect, useRef } from 'react';
import './Name.scss';

const Name = ({ name }) => {
  const textCurveRef = useRef(null);

  useEffect(() => {
    const calculateCoefficients = () => {
      const container = document.querySelector('.login');
      const textContainer = textCurveRef.current;

      // Получаем ширину и высоту контейнера .login
      const loginWidth = parseFloat(getComputedStyle(container).width); // Ширина в px
      console.log(loginWidth);

      const c = 50 * -1;
      textContainer.style.setProperty('--c', c);

      const a = -c / Math.pow(loginWidth / 2, 2);
      textContainer.style.setProperty('--a', a);
    };

    const calculateCurve = () => {
      const container = textCurveRef.current;
      const letters = container.querySelectorAll('span[style*="--index"]');

      // Суммируем ширины всех символов, чтобы вычислить центр
      let totalWidth = 0;
      const widths = [];
      const spaceWidth = 50;

      letters.forEach((letter) => {
        const char = letter.textContent;

        let width = 0;
        if (char === ' ') {
          width = spaceWidth;
        } else {
          width = letter.offsetWidth;
        }
        widths.push(width);
        totalWidth += width;
      });

      // Начальная точка (с учётом центрирования)
      let cumulativeX = -totalWidth / 2;

      letters.forEach((letter, index) => {
        // Устанавливаем значение `--x` для текущего символа
        letter.style.setProperty('--x', cumulativeX);

        // Увеличиваем `cumulativeX` на ширину текущего символа
        cumulativeX += widths[index];
      });

      // Устанавливаем общее количество символов в переменной --length
      container.style.setProperty('--length', name.length);
    };

    const makeAndSolveQuadraticEquation = () => {
      calculateCoefficients();
      calculateCurve();
    };

    if (document.fonts && document.fonts.ready) {
      // Дождаться загрузки шрифтов
      document.fonts.ready.then(makeAndSolveQuadraticEquation);
    } else {
      // Fallback на случай, если API `fonts` недоступен
      makeAndSolveQuadraticEquation();
    }
  }, [name]);

  return (
    <h1 className="name">
      <div className="text-curve" ref={textCurveRef}>
        <span aria-hidden="true">
          {name.split('').map((char, i) => (
            <span style={{ '--index': i }} key={i}>
              {char}
            </span>
          ))}
        </span>
        <span className="sr-only">{name}</span>
      </div>
    </h1>
  );
};

export default Name;
