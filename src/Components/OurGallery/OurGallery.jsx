import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Container } from "react-bootstrap";
import SectonHeading from "../../Pages/SectonHeading/SectonHeading";
import "./OurGallery.css";

const itemData = [
  {
    img: "https://i.ibb.co/ryxkMWZ/g1.jpg",
    title: "FIDDLE LEAF FIG (Ficus lyrata)",
  },
  {
    img: "https://i.ibb.co/nRpZFff/g2.jpg",
    title: "PRAYER PLANT (Calathea spp.)",
  },
  {
    img: "https://i.ibb.co/1bJzsDT/g3.jpg",
    title: "TRADESCANTIA (Tradescantia spp.)",
  },
  {
    img: "https://i.ibb.co/H2pH2mR/g4.jpg",
    title: "RUBBER PLANT (Ficus elastica)",
  },
  {
    img: "https://i.ibb.co/Pt5zz8w/g5.jpg",
    title: "PHILODENDRON (Philodendron spp.)",
  },
  {
    img: "https://i.ibb.co/6YkYvZY/g6.jpg",
    title: "POTHOS (Epipremnum aureum)",
  },
  {
    img: "https://i.ibb.co/drYPLj2/g7.webp",
    title: "BIRD'S NEST FERN (Asplenium nidus)",
  },
  {
    img: "https://i.ibb.co/Br8R9NN/g8.jpg",
    title: "MONSTERA (Monstera spp.)",
  },
  {
    img: "https://i.ibb.co/2YL2BMQ/g9.jpg",
    title: "ALOCASIA (Alocasia hybrids)",
  },
  {
    img: "https://i.ibb.co/RbS5cMG/g10.jpg",
    title: "KALANCHOE (Kalanchoe blossfeldiana)",
  },
  {
    img: "https://i.ibb.co/02jMZTf/g11.jpg",
    title: "ZZ PLANT (Zamioculcas zamiifolia)",
  },
  {
    img: "https://i.ibb.co/hm87XRM/g12.jpg",
    title: "PARLOR PALM (Chamaedorea elegans)",
  },
];

const OurGallery = () => {
  return (
    <section className="our-gallery">
      <Container>
        <SectonHeading heading="Our Gallery" />
        <ImageList sx={{ width: "100%", height: "100%" }} cols={3}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=200&h=200&fit=crop&auto=format`}
                srcSet={`${item.img}?w=200&h=200&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </section>
  );
};

export default OurGallery;
