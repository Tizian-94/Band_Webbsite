import ContactForm from '../components/ContactForm';
import StyledFooter_contact from '../components/StyledFooter_contact';


const Contactus = () => {
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
      <div>
      <h1 id="contactus_text">
        Contact Us
        </h1>
      <ContactForm />
      
    </div>
    
    </section>
    <StyledFooter_contact />
    </div>
    
    </>
    
  );
};

export default Contactus;
