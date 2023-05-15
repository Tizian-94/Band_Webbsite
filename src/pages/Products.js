import {Link} from 'react-router-dom'
import products from '../data'
import Footer_Songs from '../components/Footer_Songs';

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

const Products = () => {
  return (
    <>
      {/* <section className='section'>
        <div className="products">
          {products.map((product)=>{
            return ( <article key={product.id}>
              <h5>{product.name}</h5>
              <Link to={`/songs/${product.id}`}>more info</Link>
              </article>
            )   
          })}
        </div>
       
      </section> */}
      <div id="apocalypse_bg">
    <section className='section' id="hero_title">
      <h3 id="c_header">
        C - 999
      </h3>
      <h3 id="c_subtitle">
        DERYABA TEMPLATES
        </h3>
        <h3 id="c_apocalypse">
        APOCALYPSE
        </h3>
        <div id="hero_div">
          </div>
      
    </section>
    <div id="songs_title">
      <h1>Song List</h1>
    </div>
    <div class="cards">
        <div class="card"><a href="https://www.youtube.com/watch?v=keOgNJyXtzo" ><img class="responsive_img_grid" src="https://i.discogs.com/R4Exr2mAIfWKORp3inCajybieQN5Z6Y7QTGTeSwLqa0/rs:fit/g:sm/q:90/h:600/w:597/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExODUx/MTQtMTU4ODUxMTIx/Mi0zNTU4Lm1wbw.jpeg" /></a></div>
        <div class="card"><a href="https://www.youtube.com/watch?v=EQmIBHObtCs" ><img class="responsive_img_grid" src="https://i.discogs.com/klfMFyGE8EtcrXTSsN1CDhI5f-jBflZ5BXcngkQhrbc/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTkxMjg1/ODMtMTQ3NjIzOTU5/Ny05NjgwLmpwZWc.jpeg" /></a></div>
        <div class="card"><a href="https://www.youtube.com/watch?v=-Y9TsxeWGt0" ><img class="responsive_img_grid" src="https://i.discogs.com/z4rhXLUSon7a71m6Bfv3If_5e6cKgoyP6fHS4I8peRU/rs:fit/g:sm/q:90/h:600/w:598/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ2Mzcz/NjAtMTM3MDgxMzcz/My01MDE0LmpwZWc.jpeg" /></a></div>
        <div class="card"><a href="https://www.youtube.com/watch?v=T5Q4elQwBv4" ><img class="responsive_img_grid" src="https://i.discogs.com/jfFoHk3q_g5OUsw1S3PLdD5FVHBximes6ZBj2QiF8UY/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ1MTEx/MzUtMTM2NzQyODE0/Ni04MDc1LmpwZWc.jpeg" /></a></div>
        <div class="card"><a href="https://www.youtube.com/watch?v=-oOtUYzLB-I&t=1601s" ><img class="responsive_img_grid" src="https://i.discogs.com/ygR0jyGJsf9jRamJxcdKbXvSc1zg2phmt_h895UX1Ds/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIzMjU5/ODgxLTE2NTI4MDM0/MTAtNDE5NS5qcGVn.jpeg" /></a></div>
        <div class="card"><a href="https://www.youtube.com/watch?v=lcu7j5ImpX4" ><img class="responsive_img_grid" src="https://i.discogs.com/hzHGrS1X7V4mh_LzDUPUPWf9XOoSN1tmj1nWmv0XV3g/rs:fit/g:sm/q:90/h:500/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQzOTM4/NTgtMTM2MzcwNzI1/MC04MjM1LmpwZWc.jpeg" /></a></div>
        <div class="card"><a href="https://www.youtube.com/watch?v=GWzmvQmjqss" ><img class="responsive_img_grid" src="https://i.discogs.com/4OUuGrumrHgh4KwhtaoiWsrB1THs52iVIRnKL2mp7yc/rs:fit/g:sm/q:90/h:445/w:450/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM2Nzkw/OC0xNDUwMDIwNTI1/LTcxMDAuanBlZw.jpeg" /></a></div>
        <div class="card"><a href="https://www.youtube.com/watch?v=85kYuDvp7_E" ><img class="responsive_img_grid" src="https://i.discogs.com/E8j-B4YTz7oX69RGDvSrHM8qrULHZkT36Qdpg6mjYMI/rs:fit/g:sm/q:90/h:519/w:512/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTcxNTg1/MS0xMzA4MjgyMjI2/LmpwZWc.jpeg" /></a></div>
        <div class="card"><a href="https://www.youtube.com/watch?v=MW9WeSpwWjE" ><img class="responsive_img_grid" src="https://i.discogs.com/7rukxz_VyAmR9dY5bi98r1ZFu7RF_L1GIq2MjV2EwbI/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI2MDgx/OTItMTI5Mjk1MDA1/My5qcGVn.jpeg" /></a></div>
        <div class="card"><a href="https://www.youtube.com/watch?v=tlVDBXGX1Po" ><img class="responsive_img_grid" src="https://i.discogs.com/HSyedyVU3HOEDJFCvOu_eSIf6jMbYS38tzG5etYPGw8/rs:fit/g:sm/q:90/h:478/w:470/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTYxMDEw/MTItMTQxMTA4MTg5/MC03NTEyLmpwZWc.jpeg" /></a></div>
        </div>
        <div id="footer_products_container">
        <Footer_Songs />
        </div>
    </div>


        
    </>
    
  );
};

export default Products;
