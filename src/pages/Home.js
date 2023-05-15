import App from '../components/SwiperCore';
import Footer from '../components/StyledFooter';


const Home = () => {
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
    </div>
    
    <div id="hp_title">
    <div id="smear_top">
    </div>
    <h3 id="hp_title_text">
        Ataraxia - New Single Out Now!
      </h3>
    
      <div>
        <iframe id="hp_video" src="https://www.youtube.com/embed/OuLUqoox1pQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"></iframe>
      <p id="hp_video_text">
      Ataraxia our new single is now available on Bandcamp, Soundcloud and Youtube! Download for free or subscribe to our Patreon and recieve the latest updates and monthly c-999 goodies
      </p>
      </div>
      <h3 id="hp_songs_text">
        Check out our other songs!
      </h3>
      <div id="swiper">
        <App />
        
      </div>
      <Footer />
    </div>
    
    
      
      
    </>
  );
};
export default Home;
