import { Component } from "react";
import Slider from "react-slick";
import "./UppSlider.css";

import SliderImg1 from "../../../public/u1.jpg";
import SliderImg2 from "../../../public/u2.jpg";
import SliderImg3 from "../../../public/u3.jpg";
import SliderImg4 from "../../../public/u4.jpg";
import SliderImg5 from "../../../public/u5.jpg";
import SliderImg6 from "../../../public/u6.jpg";
import SliderImg7 from "../../../public/u7.jpg";
import SliderImg8 from "../../../public/u8.jpg";

export default class Responsive extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="single-slide">
            <div className="slide-img">
              <img src={SliderImg1} alt="" className=" w-100" />
            </div>
            <div className="slide-text">
              <h3>HAWORTHIA(Haworthia spp.)</h3>
              <p>
                Ideal for narrow windowsills, the slow-growing succulent remains
                neat and compact. In summer, creamy white flowers bloom on long
                stems. Haworthias need almost no care and rarely need repotting.
              </p>
              <h5>Price:$15</h5>
              <a href="#">Order Now</a>
            </div>
          </div>

          <div className="single-slide">
            <div className="slide-img">
              <img src={SliderImg2} alt="" className=" w-100" />
            </div>
            <div className="slide-text">
              <h3>ALOE(Aloe vera spp.)</h3>
              <p>
                Aloes prefer tight quarters and keeping them slightly root bound
                may help promote blooming, which doesn't always happen when they
                are grown indoors. Grow them in a sandy, well-drained soil such
                as a cactus potting mix.
              </p>
              <h5>Price:$10</h5>
              <a href="#">Order Now</a>
            </div>
          </div>

          <div className="single-slide">
            <div className="slide-img">
              <img src={SliderImg3} alt="" className=" w-100" />
            </div>
            <div className="slide-text">
              <h3>SPIDER PLANT (Chlorophytum comosum)</h3>
              <p>
                One of the easiest plants to propagate. Simply cut the baby
                spiders from their runners and place in moist potting soil. You
                can also stick them in a glass of water for a week or so until
                roots form and then pot in fresh soil.
              </p>
              <h5>Price:$17</h5>
              <a href="#">Order Now</a>
            </div>
          </div>

          <div className="single-slide">
            <div className="slide-img">
              <img src={SliderImg4} alt="" className=" w-100" />
            </div>
            <div className="slide-text">
              <h3>CHINESE EVERGREEN (Aglaonema spp.)</h3>
              <p>
                Chinese evergreens hate cold drafts and temperatures below 55
                degrees F. Locate your plant away from drafty doorways, windows,
                and air-conditioning vents. Plants with darker green leaves can
                tolerate less light, while variegated varieties prefer brighter
                light.
              </p>
              <h5>Price:$8</h5>
              <a href="#">Order Now</a>
            </div>
          </div>

          <div className="single-slide">
            <div className="slide-img">
              <img src={SliderImg5} alt="" className=" w-100" />
            </div>
            <div className="slide-text">
              <h3>WATERMELON PEPEROMIA (Peperomia argyreia)</h3>
              <p>
                Also known as Swiss cheese plant or split-leaf philodendron,
                this tropical beauty sports lush green leaves that develop deep
                slits or holes as they mature. In nature, these vine-like plants
                love to climb trees with their aerial roots, so provide a moss
                pole or other support to accommodate their ascent.
              </p>
              <h5>Price:$18</h5>
              <a href="#">Order Now</a>
            </div>
          </div>

          <div className="single-slide">
            <div className="slide-img">
              <img src={SliderImg6} alt="" className=" w-100" />
            </div>
            <div className="slide-text">
              <h3>AIR PLANT (Ficus elastica)</h3>
              <p>
                Air plants put down no roots and receive nutrients and moisture
                through their leaves. Once an air plant blooms, it will produce
                offshoots that will become new plants in one to two years.
              </p>
              <h5>Price:$13</h5>
              <a href="#">Order Now</a>
            </div>
          </div>

          <div className="single-slide">
            <div className="slide-img">
              <img src={SliderImg7} alt="" className=" w-100" />
            </div>
            <div className="slide-text">
              <h3>AFRICAN VIOLET (Saintpaulia ionantha)</h3>
              <p>
                Thousands of cultivars give you a choice of almost any flower
                color, as well as single, double, and bicolored blooms. African
                violets will bloom repeatedly during spring and summer when
                given enough sunlight, with the blooms lasting up to a few
                weeks.
              </p>
              <h5>Price:$22</h5>
              <a href="#">Order Now</a>
            </div>
          </div>

          <div className="single-slide">
            <div className="slide-img">
              <img src={SliderImg8} alt="" className=" w-100" />
            </div>
            <div className="slide-text">
              <h3>JADE PLANT (Crassula ovata)</h3>
              <p>
                Jade plants can live for decades and are easy to propagate from
                leaf or stem cuttings. Let the cuttings dry out for a few days
                and then stick them in a good potting mix, preferably one for
                cactus and succulents.
              </p>
              <h5>Price:$12</h5>
              <a href="#">Order Now</a>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
