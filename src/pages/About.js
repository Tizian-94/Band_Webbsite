import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Footer_About from '../components/Footer_About';

const About = () => {
  return (
    <section className='section'>
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
    <div id="wasteland_img">
      <h3 id="aboutus">
        About Us
        </h3>
        <div class="float-container">
            <div id="card_1" class="float-child">
            <figure id="wrapper">
              <Card sx={{ maxWidth: 345 }}>
              <CardMedia sx={{ height: 500 }} image="https://cg2.cgsociety.org/uploads/images/medium/diegoron-denzel-washington-th-1-28a6af91-wcb7.jpg" />
              </Card> 
              <p id="card_title" class="text"> TEXT TITLE</p>
              <p id="card_text" class="text"> Text description lorem ipsum</p>
            </figure>
            </div>
            <div id="card_2" class="float-child">
            <figure id="wrapper">
              <Card sx={{ maxWidth: 345 }}>
              <CardMedia sx={{ height: 500 }} image="https://www.gamespot.com/a/uploads/scale_landscape/1574/15746725/4122873-news_falloutnewvegas2rumors_20230406v2.jpg" />
              </Card> 
              <p id="card_title" class="text"> TEXT TITLE</p>
              <p id="card_text" class="text"> Text description lorem ipsum</p>
            </figure>
            </div>    
            <div id="card_3" class="float-child">
            <figure id="wrapper">
              <Card sx={{ maxWidth: 345 }}>
              <CardMedia sx={{ height: 500 }} image="https://images.hdqwalls.com/download/red-steel-2-fy-1280x2120.jpg" />
              </Card> 
              <p id="card_title" class="text"> TEXT TITLE</p>
              <p id="card_text" class="text"> Text description lorem ipsum</p>
            </figure>
            </div>   
            <div id="card_3" class="float-child">
            <figure id="wrapper">
              <Card sx={{ maxWidth: 345 }}>
              <CardMedia sx={{ height: 500 }} image="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7c004959-cfa6-400d-918a-2352324fb174/dbuzf19-8c94347a-2b54-42cd-b825-ee17c9098ab3.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdjMDA0OTU5LWNmYTYtNDAwZC05MThhLTIzNTIzMjRmYjE3NFwvZGJ1emYxOS04Yzk0MzQ3YS0yYjU0LTQyY2QtYjgyNS1lZTE3YzkwOThhYjMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Tmp6auJvluOkw7E9JIKXFApefh3qDYSOubZ64Ip1f2I" />
              </Card> 
              <p id="card_title" class="text"> TEXT TITLE</p>
              <p id="card_text" class="text"> Text description lorem ipsum</p>
            </figure>
            </div>   
          <div>
        </div>
        </div>
        <div>
        <Footer_About />
        </div>
    </div>
    
    </section>
    
  );
};
export default About;
