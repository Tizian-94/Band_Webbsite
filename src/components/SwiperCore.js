import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";


import React from "react";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import Audiobar from '../components/Audiobar.js';
import Audiobar_doom from '../components/Audiobar_doom.js';
import Audiobar_summoning from '../components/Audiobar_summoning.js';
import Audiobar_cob from '../components/Audiobar_cob.js';
import Audiobar_testament from '../components/Audiobar_testament.js';
import Audiobar_beyond from '../components/Audiobar_beyond.js';
import Audiobar_typo from '../components/Audiobar_typo.js';
import Audiobar_devildriver from '../components/Audiobar_devildriver.js';
import Audiobar_obzen from '../components/Audiobar_obzen.js';
import Audiobar_belphegor from '../components/Audiobar_belphegor.js';

SwiperCore.use([EffectCoverflow, Pagination]);

const App = () => {
  return (
    <div className="App">
      <Swiper
        navigation
        loop
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 80,
          depth: 200,
          modifier: 1,
          slideShadows: false,
          slideToClickedSlide: true
        }}
        slidesPerView={3}
        centeredSlides
        style={{ height: "18vw" }}
        className="swiper-container"
      >
        <SwiperSlide
          style={{
            backgroundImage:
              "url(https://i.discogs.com/klfMFyGE8EtcrXTSsN1CDhI5f-jBflZ5BXcngkQhrbc/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTkxMjg1/ODMtMTQ3NjIzOTU5/Ny05NjgwLmpwZWc.jpeg)"
          }}
        
        >
          <p class="album_cover_text">Mick Gordon</p>
          <div id="audiobar"> <Audiobar_doom /></div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage:
              "url(https://i.discogs.com/R4Exr2mAIfWKORp3inCajybieQN5Z6Y7QTGTeSwLqa0/rs:fit/g:sm/q:90/h:600/w:597/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExODUx/MTQtMTU4ODUxMTIx/Mi0zNTU4Lm1wbw.jpeg)"
          }}
        >
          <p class="album_cover_text">Bathory</p>
          <div id="audiobar"> <Audiobar /></div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage:
              "url(https://i.discogs.com/z4rhXLUSon7a71m6Bfv3If_5e6cKgoyP6fHS4I8peRU/rs:fit/g:sm/q:90/h:600/w:598/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ2Mzcz/NjAtMTM3MDgxMzcz/My01MDE0LmpwZWc.jpeg)"
          }}
        >
          <p class="album_cover_text">Summoning</p>
          <div id="audiobar"> <Audiobar_summoning /></div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage:
              "url(https://i.discogs.com/jfFoHk3q_g5OUsw1S3PLdD5FVHBximes6ZBj2QiF8UY/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ1MTEx/MzUtMTM2NzQyODE0/Ni04MDc1LmpwZWc.jpeg)"
          }}
        >
          <p class="album_cover_text">Children of Bodom</p>
          <div id="audiobar"> <Audiobar_cob /></div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage:
              "url(https://i.discogs.com/ygR0jyGJsf9jRamJxcdKbXvSc1zg2phmt_h895UX1Ds/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIzMjU5/ODgxLTE2NTI4MDM0/MTAtNDE5NS5qcGVn.jpeg)"
          }}
        >
          <p class="album_cover_text">Testament</p>
          <div id="audiobar"> <Audiobar_testament /></div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage:
              "url(https://i.discogs.com/hzHGrS1X7V4mh_LzDUPUPWf9XOoSN1tmj1nWmv0XV3g/rs:fit/g:sm/q:90/h:500/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQzOTM4/NTgtMTM2MzcwNzI1/MC04MjM1LmpwZWc.jpeg)"
          }}
        >
          <p class="album_cover_text">The Aura</p>
          <div id="audiobar"> <Audiobar_beyond /></div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage:
              "url(https://i.discogs.com/4OUuGrumrHgh4KwhtaoiWsrB1THs52iVIRnKL2mp7yc/rs:fit/g:sm/q:90/h:445/w:450/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM2Nzkw/OC0xNDUwMDIwNTI1/LTcxMDAuanBlZw.jpeg)"
          }}
        >
          <p class="album_cover_text">Life is Killing Me</p>
          <div id="audiobar"> <Audiobar_typo /></div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage:
              "url(https://i.discogs.com/E8j-B4YTz7oX69RGDvSrHM8qrULHZkT36Qdpg6mjYMI/rs:fit/g:sm/q:90/h:519/w:512/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTcxNTg1/MS0xMzA4MjgyMjI2/LmpwZWc.jpeg)"
          }}
        >
          <p class="album_cover_text">DevilDriver</p>
          <div id="audiobar"> <Audiobar_devildriver /></div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage:
              "url(https://i.discogs.com/7rukxz_VyAmR9dY5bi98r1ZFu7RF_L1GIq2MjV2EwbI/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI2MDgx/OTItMTI5Mjk1MDA1/My5qcGVn.jpeg)"
          }}
        >
          <p class="album_cover_text">Meshuggah</p>
          <div id="audiobar"> <Audiobar_obzen /></div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage:
              "url(https://i.discogs.com/HSyedyVU3HOEDJFCvOu_eSIf6jMbYS38tzG5etYPGw8/rs:fit/g:sm/q:90/h:478/w:470/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTYxMDEw/MTItMTQxMTA4MTg5/MC03NTEyLmpwZWc.jpeg)"
          }}
        >
          <p class="album_cover_text">Belphegor</p>
          <div id="audiobar"> <Audiobar_belphegor /></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default App;