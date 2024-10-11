import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, useState, useCallback } from 'react';
import { data } from '../data';

// دالة لخلط المصفوفة
const shuffleArray = (array) => {
  let shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [m, setM] = useState(0);
  const [shuffledData, setShuffledData] = useState([]);
  const ref = useRef();
  const controls = useAnimation();

  useEffect(() => {
    // خلط البيانات عند تحميل المكون
    setShuffledData(shuffleArray(data));
  }, []);

  useEffect(() => {
    if (ref.current) {
      setM(ref.current.scrollWidth - ref.current.offsetWidth);
    }
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + shuffledData.length) % shuffledData.length);
    controls.start({ x: `-${(currentIndex + 1) * 100}%` });
  }, [currentIndex, controls, shuffledData.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % shuffledData.length);
    controls.start({ x: `-${currentIndex * 100}%` });
  }, [currentIndex, controls, shuffledData.length]);

  useEffect(() => {
    controls.start({ x: `-${currentIndex * 100}%` });
  }, [currentIndex, controls]);

  return (
    <div className="carousel-container">
      <button className="carousel-prev" onClick={handlePrev}>&#10094;</button>
      <motion.div ref={ref} className='container-carousel'>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -m }}
          className='inner'
          initial={{ x: 0 }}
          animate={controls}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          {shuffledData.map((item, index) => (
            <div className="image" key={item.id} style={{ width: '100%' }}>
              <motion.div className='image'>
                <img className='ImageCoursel' src={item.img} alt={item.title} />
              </motion.div>
            </div>
          ))}
        </motion.div>
      </motion.div>
      <button className="carousel-next" onClick={handleNext}>&#10095;</button>
    </div>
  );
}
