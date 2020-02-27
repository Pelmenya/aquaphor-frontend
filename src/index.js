import '../node_modules/swiper/css/swiper.css';
import './pages/index.css';
import Swiper from 'swiper';

function main() {
  const introSwiper = new Swiper('.intro__swiper', {
    pagination: {
      el: '.intro__swiper-pagination',
      dynamicBullets: true,
    },
  });
}

main();
