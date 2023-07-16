import { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Modal,
  Row,
} from "react-bootstrap";
import SubHeaderImg from "../../../public/subheader-PlantPage.jpg";
import SubHeader from "../../Components/SubHeader/SubHeader";
import "./Plants.css";

const PlantsPage = () => {
  const [plants, setPlants] = useState([
    {
      id: 1,
      name: "Monstera Deliciosa",
      image: "https://i.ibb.co/jhGS8DQ/p1.jpg",
      details:
        "Also called mother-in-law's tongue, this hardy houseplant is almost impossible to kill. Although it prefers bright light, it will also persevere through dim lighting, temperature fluctuations, and lapses in watering.",
      size: "3 to 20 feet tall.",
      water:
        "Deeply water every 1 to 2 weeks, or whenever the soil feels dry. Drooping leaves often mean your plant needs a drink.",
      fertilize:
        "Not necessary, but an occasional dose of all-purpose houseplant food during the spring and summer will encourage more vigorous growth.",
    },
    {
      id: 2,
      name: "Fiddle Leaf Fig",
      image: "https://i.ibb.co/ryxkMWZ/g1.jpg",
      details:
        "Rubber plants can threaten to outgrow a room, but can be kept in check by pruning off the top at the central stem. This will encourage growth of side branches. Keeping your plant in a smaller pot will also curb its growth.",
      size: "Up to 10 feet tall.",
      water:
        "Keep soil evenly moist. Water when it becomes slightly dry to the touch.",
      fertilize:
        "Fertilize every two weeks when actively growing from spring through fall; monthly in winter.",
    },
    {
      id: 3,
      name: "Snake Plant",
      image: "https://i.ibb.co/89vC9Vn/p3.jpg",
      details:
        "Also called mother-in-law's tongue, this hardy houseplant is almost impossible to kill. Although it prefers bright light, it will also persevere through dim lighting, temperature fluctuations, and lapses in watering.",
      size: "6 to 20 inches tall.",
      water:
        "Allow the top inch of soil to dry completely before watering. Snake plants store water, so it's almost impossible to underwater them.",
      fertilize:
        "Not necessary, but an occasional dose of all-purpose houseplant food during the spring and summer will encourage more vigorous growth.",
    },
    {
      id: 4,
      name: "POTHOS ",
      image: "https://i.ibb.co/6YkYvZY/g6.jpg",
      details:
        "One of the easiest houseplants to grow. This tropical vine comes in a variety of foliage colors and patterns. Pothos can be trimmed and kept compact, allowed to trail from hanging baskets, or trained up vertical supports.",
      size: "Vines 6 to 10 feet long.",
      water: "Allow the top inch of soil to dry out between watering.",
      fertilize:
        "Light feeders, so use a balanced liquid fertilizer every 1 to 3 months.",
    },
    {
      id: 5,
      name: "ZZ Plant",
      image: "https://i.ibb.co/r6Q5Vhx/p5.jpg",
      details:
        "The naturally shiny leaves of the ZZ plant require little effort to maintain their good looks. Simply dust them off with a damp cloth (leaf sprays may damage the foliage). ZZ plants also do well in medium/bright, indirect light. Keep in mind that all parts of the plant are toxic, so keep away from children and pets.",
      size: "2 to 3 feet tall.",
      water:
        "ZZ plants store water in their semi-succulent stems so you may only need to water every couple weeks. Overwatering can do more damage than underwatering, so don't allow the soil to become soggy",
      fertilize:
        "They are light feeders, so only fertilize every three months or so.",
    },
    {
      id: 6,
      name: "ALOCASIA",
      image: "https://i.ibb.co/7RkSFs6/p6.jpg",
      details:
        "Given the right conditions, these lush and leafy tropical plants can thrive indoors in well-lit areas, making them a bold focal point of any sunny room. In addition to bright light, alocasias also require a humid environment, so keep plants well-hydrated by using a humidifier or misting the leaves regularly.",
      size: "2 to 6 feet tall and wide, depending on variety.",
      water:
        "Water regularly during the growing season (spring through fall) to keep the soil evenly moist, but not soggy; less frequently during winter.",
      fertilize:
        "Feed with a diluted liquid houseplant fertilizer one to two times per month during spring and summer.",
    },
    {
      id: 7,
      name: "HAWORTHIA",
      image: "https://i.ibb.co/4TVks39/u1.jpg",
      details:
        "Ideal for narrow windowsills, the slow-growing succulent remains neat and compact. In summer, creamy white flowers bloom on long stems. Haworthias need almost no care and rarely need repotting.",
      size: "3 to 5 inches tall.",
      water: "Allow the soil to dry out completely between waterings.",
      fertilize: "Infrequently, with a slow-release product.",
    },
    {
      id: 8,
      name: "SPIDER PLANT",
      image: "https://i.ibb.co/s5NNqMS/u3.jpg",
      details:
        "One of the easiest plants to propagate. Simply cut the baby spiders from their runners and place in moist potting soil. You can also stick them in a glass of water for a week or so until roots form and then pot in fresh soil.",
      size: "6 to 8 inches tall, with cascading runners.",
      water:
        "Water generously when the soil feels dry; more sparingly in winter.",
      fertilize:
        "Monthly during the active growing season, early spring to late autumn.",
    },
    {
      id: 9,
      name: "CHINESE EVERGREEN",
      image: "https://i.ibb.co/5RBVcJm/u4.jpg",
      details:
        "Chinese evergreens hate cold drafts and temperatures below 55 degrees F. Locate your plant away from drafty doorways, windows, and air-conditioning vents. Plants with darker green leaves can tolerate less light, while variegated varieties prefer brighter light.",
      size: "2 to 3 feet tall.",
      water:
        "Keep soil evenly moist, but not soggy. Reduce water in the winter when plant growth slows. Wilted leaves are a sign of underwatering; overwatering may cause stem or root rot.",
      fertilize:
        "Monthly with a diluted liquid fertilizer from early spring through fall.",
    },
    {
      id: 10,
      name: "WATERMELON PEPEROMIA",
      image: "https://i.ibb.co/q5yx9WD/u5.jpg",
      details:
        "Also known as Swiss cheese plant or split-leaf philodendron, this tropical beauty sports lush green leaves that develop deep slits or holes as they mature. In nature, these vine-like plants love to climb trees with their aerial roots, so provide a moss pole or other support to accommodate their ascent.",
      size: "6 to 8 inches tall.",
      water:
        "Water moderately, allowing the soil to become dry to the touch before rewatering. Overwatering can cause root rot.",
      fertilize:
        "Apply a balanced 20-20-20 liquid fertilizer monthly during the growing season, from mid-March to November. Cease fertilizing in winter when plant growth slows down.",
    },
    {
      id: 11,
      name: "AIR PLANT",
      image: "https://i.ibb.co/9bYFZpn/u6.jpg",
      details:
        "Air plants put down no roots and receive nutrients and moisture through their leaves. Once an air plant blooms, it will produce offshoots that will become new plants in one to two years.",
      size: "Varies, depending on the variety.",
      water:
        "Run the plants under water a few times a week. If the leaves are curled more than normal, submerge in a bowl of water overnight.",
      fertilize:
        "Use an epiphyte fertilzer spray weekly, or according to package directions.",
    },
    {
      id: 12,
      name: "AFRICAN VIOLET",
      image: "https://i.ibb.co/XFrwFjf/u7.jpg",
      details:
        "Thousands of cultivars give you a choice of almost any flower color, as well as single, double, and bicolored blooms. African violets will bloom repeatedly during spring and summer when given enough sunlight, with the blooms lasting up to a few weeks.",
      size: "Usually under 4 inches tall.",
      water:
        "Water when soil feels slightly dry to the touch. Try not get the leaves wet, which can cause spotting.",
      fertilize:
        "Apply a specialized African violet fertilizer every 2 to 3 weeks, or according to package directions.",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPlants, setFilteredPlants] = useState(plants);

  // Modal
  const [showModal, setShowModal] = useState(false);
  const [selectedPlant, setSelectedPlant] = useState(null);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const filteredResults = plants.filter((plant) =>
      plant.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredPlants(filteredResults);
  };

  const handleViewDetails = (plant) => {
    setSelectedPlant(plant);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="plantPage">
      <SubHeader image={SubHeaderImg} heading="Explore Our Plants" />
      <Container>
        <Row className="justify-content-center mt-5">
          <Col md={6}>
            {/* <h1 className="text-center">Explore Plants</h1> */}
            <Form.Group controlId="searchForm">
              <Form.Control
                type="text"
                placeholder="Search for a plant..."
                value={searchTerm}
                onChange={handleSearch}
                autoComplete="off"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="justify-content-center mt-5">
          {filteredPlants.map((plant) => (
            <Col lg={3} md={4} key={plant.id} className="mb-4">
              <Card className="mb-4">
                <Card.Img
                  variant="top"
                  src={plant.image}
                  alt={plant.name}
                  loading="lazy"
                />
                <Card.Body className="text-center">
                  <Card.Title>{plant.name}</Card.Title>

                  <Button onClick={() => handleViewDetails(plant)}>
                    View Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Modal body */}
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Plant Details</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            {selectedPlant && (
              <div className="modal-content">
                <h3>{selectedPlant.name}</h3>
                <p>{selectedPlant.details}</p>

                <img
                  src={selectedPlant.image}
                  alt={selectedPlant.name}
                  className="modal-image"
                />
                <p>
                  <span>Size: </span>
                  {selectedPlant.size}
                </p>
                <p>
                  <span>Water: </span>
                  {selectedPlant.water}
                </p>
                <p>
                  <span>Fertilize: </span>
                  {selectedPlant.fertilize}
                </p>
                {/* Add more details or information about the plant here */}
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
};

export default PlantsPage;
