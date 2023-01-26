  // import Swiper JS
  import Swiper from '../swiper';
  // import Swiper styles
  import '../swiper/swiper-bundle.css';

  const swiper = new Swiper(...);
  // core version + navigation, pagination modules:
  import Swiper, { Navigation, Pagination } from 'swiper';
  // import Swiper and modules styles
  import '../swiper/core';
  import '../swiper/modules';
  import '../swiper/type';

  // init Swiper:
  const swiper = new Swiper('.swiper', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],
    ...
  });

  // init Swiper:
  const swiper = new Swiper(...);