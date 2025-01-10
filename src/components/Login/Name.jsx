import { useEffect, useRef } from 'react';
import './Name.scss';

const Name = ({ name }) => {
  const textCurveRef = useRef(null);

  useEffect(() => {
    const calculateCurve = () => {
      const container = textCurveRef.current;
      const letters = container.querySelectorAll('span[style*="--index"]');

      // Суммируем ширины всех символов, чтобы вычислить центр
      let totalWidth = 0;
      const widths = [];

      letters.forEach((letter) => {
        const width = letter.offsetWidth;
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

    const updateCurve = () => {
      calculateCurve();
    };

    if (document.fonts && document.fonts.ready) {
      // Дождаться загрузки шрифтов
      document.fonts.ready.then(updateCurve);
    } else {
      // Fallback на случай, если API `fonts` недоступен
      updateCurve();
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
