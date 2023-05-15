import Gallerybar from '../components/Gallerybar';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import Footer_Songs from '../components/Footer_Songs';

const Gallery = () => {
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
    <div id="gallery_title">
      <h1>Gallery</h1>
    </div>
    <div id="gallerybar-div">
      <Gallerybar
        galleryID="my-test-gallery"
        images={[
          {
            largeURL:
              'https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg',
            thumbnailURL:
              'https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg',
            width: 1875,
            height: 2500,
          },
          {
            largeURL:
              'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg',
            thumbnailURL:
              'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg',
            width: 1669,
            height: 2500,
          },
          {
            largeURL:
              'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg',
            thumbnailURL:
              'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg',
            width: 2500,
            height: 1666,
          },
          {
            largeURL:
              'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg',
            thumbnailURL:
              'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg',
            width: 2500,
            height: 1666,
          },
          {
            largeURL:
              'https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg',
            thumbnailURL:
              'https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg',
            width: 1875,
            height: 2500,
          },
          {
            largeURL:
              'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg',
            thumbnailURL:
              'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg',
            width: 2500,
            height: 1666,
          },
          {
            largeURL:
              'https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg',
            thumbnailURL:
              'https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg',
            width: 1875,
            height: 2500,
          },
          {
            largeURL:
              'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg',
            thumbnailURL:
              'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg',
            width: 2500,
            height: 1666,
          },
          {
            largeURL:
              'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg',
            thumbnailURL:
              'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg',
            width: 2500,
            height: 1666,
          },
          {
            largeURL:
              'https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg',
            thumbnailURL:
              'https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg',
            width: 1875,
            height: 2500,
          },
          {
            largeURL:
              'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg',
            thumbnailURL:
              'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg',
            width: 1669,
            height: 2500,
          },
          {
            largeURL:
              'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg',
            thumbnailURL:
              'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg',
            width: 1669,
            height: 2500,
          },
          {
            largeURL:
              'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg',
            thumbnailURL:
              'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg',
            width: 1669,
            height: 2500,
          },
          {
            largeURL:
              'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg',
            thumbnailURL:
              'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg',
            width: 1669,
            height: 2500,
          },
          {
            largeURL:
              'https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg',
            thumbnailURL:
              'https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg',
            width: 1875,
            height: 2500,
          },
          {
            largeURL:
              'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg',
            thumbnailURL:
              'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg',
            width: 1669,
            height: 2500,
          },
        ]}
      />
    </div>
    <div id="footer_products_container">
        <Footer_Songs />
        </div>
    </div>
    
    </>
  );
}

export default Gallery;



