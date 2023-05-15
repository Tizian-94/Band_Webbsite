import Gallerybar from '../components/Gallerybar';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import Footer_Songs from '../components/Footer_Songs';

const Thankyou = () => {
  return (
    <>
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
    <div id="gallerybar-div">
      <h1 id="thankyou_text">Thank you for contacting us, we'll get in touch as soon as possible!</h1>
    </div>
    <div id="footer_products_container">
        <Footer_Songs />
        </div>
    </div>
    
    </>
  );
}

export default Thankyou;



