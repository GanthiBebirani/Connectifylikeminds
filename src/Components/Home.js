import React, { useState, useEffect } from 'react';
import { Navbar, Button, Container, Nav, Form, Dropdown, Card, Carousel } from 'react-bootstrap';
import { IoMdContact } from "react-icons/io";
import { Link, Element, animateScroll as scroll } from 'react-scroll';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import './Home.css';
import About from './About';
import Services from './Services';
import c0 from '../Images/ca1.png';
import c2 from '../Images/ca2.png';
import c3 from '../Images/ca3.png';
import group1 from "../Images/study.png";
import ca1 from '../Images/ml1.jpg';
import ca2 from '../Images/images.jpeg';
import ca3 from '../Images/java.cms';
import ca4 from '../Images/AI.webp';
import ca5 from '../Images/reactjs.jpg';
import ca6 from '../Images/c.jpeg';
import ca7 from '../Images/spring.png';
import ca8 from '../Images/full.webp';


function Home() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [userId, setUserId] = useState('');
  const [searchQuery, setSearchQuery] = useState(''); // State for search input
  const [recommendations, setRecommendations] = useState([]); // State for recommendations
  const navigate = useNavigate();  // Initialize useNavigate

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    
    // Generate recommendations based on the search query
    const newRecommendations = [];
    if (query.match(/^p|^py|^pyth/i)) {
      newRecommendations.push({ name: 'Python', path: '/pythoncourse' });
    }
    if (query.match(/^w|^we|^web|^f|^fu|^full|^fullstack|^webdevelopment|^full stack|^web development/i)) {
      newRecommendations.push({ name: 'Web Development', path: '/webfundamentals' });
    }
    if (query.match(/^c$/i)) {
      newRecommendations.push({ name: 'C', path: '/croadmap' });
    }
    setRecommendations(newRecommendations);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (recommendations.length > 0) {
      navigate(recommendations[0].path);
    }
  };

  const handleRecommendationClick = (path) => {
    navigate(path);
  };

  return (
    <div className="home-container">
      <Navbar expand="sm" className="mx-50px" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand style={{ color: ' rgb(31, 136, 242)', fontSize: '40px', fontWeight: 'bold' }}>
            Connectify
          </Navbar.Brand>
          <Nav className="me-auto my-5 my-lg-0" style={{ maxHeight: '100px' }}>
            <Nav.Link as={Link} to="home" smooth duration={500} className="me-3">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="about" smooth duration={500} className="me-3">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="services" smooth duration={500} className="me-3">
              Services
            </Nav.Link>
            <Nav.Link href="Domain" className="me-3">Courses</Nav.Link>
            <Nav.Link href="groups" className="me-3">Groups</Nav.Link>
            <Nav.Link href="#proofs" className="me-3">Quizzes</Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={handleSearchSubmit}>
            <div className="search-container me-3">
              <Form.Control
                type="search"
                placeholder="&nbsp;&nbsp;&nbsp;What do you want to learn"
                aria-label="Search"
                className="search-input"
                style={{ width: '250px', height: '40px', marginBottom: '100px', marginRight:'20px'}}
                value={searchQuery}
                onChange={handleSearchChange}
              />
              {recommendations.length > 0 && (
                <ul className="recommendation-list">
                  {recommendations.map((rec, index) => (
                    <li key={index} onClick={() => handleRecommendationClick(rec.path)}>
                      {rec.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <Dropdown 
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              show={showDropdown}
              className="me-3"
            >
              <IoMdContact size="45px" style={{ marginBottom: '-25px', marginLeft: '2px', color: ' rgb(14, 93, 182)', backgroundColor: 'transparent' }} className='profile' /><p style={{color:'white',marginTop:'-40px',fontSize:'20px',marginLeft:'50px'}}>Profile</p>
              <Dropdown.Menu className='dropdown-menu ' style={{backgroundColor:'black'}}>
                <Dropdown.Item>{userId}</Dropdown.Item>
                <Dropdown.Item href="#edit">Edit</Dropdown.Item>
                <Dropdown.Item href="uipage">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Form>
        </Container>
      </Navbar>

      <Element name="home">
        <div className="col-md-6 para">
          <h1 variant="dark" className='c' style={{ fontSize: '50px', color: 'black' }}>Connectify Like Minds</h1>
          <p>
            Connect with like-minded individuals and form study groups based on your interests and goals. Share resources, exchange ideas, and tackle challenging topics as a cohesive team.
          </p>
          <form>
            <Button className='button1' style={{ fontSize: '30px' }} href="domain">Get Started</Button>
          </form>
        </div>
        <img src={group1} alt="soory" className='img1' />
      </Element>

      <Carousel interval={1000}>
        <Carousel.Item>
          <img
            className="d-block w-100  carousel"
            src={c0}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100  carousel"
            src={c2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100  carousel"
            src={c3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

      <div className='para2'>
        <p>Most Trending Domains</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={ca1} />
          <Card.Body>
            <Button variant="primary">View Course</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={ca2} />
          <Card.Body>
            <Button href="/pythoncourse" variant="primary">View Course</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={ca3} />
          <Card.Body>
            <Button variant="primary">View Course</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={ca4} />
          <Card.Body>
            <Button variant="primary">View Course</Button>
          </Card.Body>
        </Card>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={ca5} />
          <Card.Body>
            <Button variant="primary">View Course</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={ca6} />
          <Card.Body>
            <Button href="/croadmap" variant="primary">View Course</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={ca7} />
          <Card.Body>
            <Button variant="primary">View Course</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={ca8} />
          <Card.Body>
            <Button href="/webfundamentals" variant="primary">View Course</Button>
          </Card.Body>
        </Card>
      </div>

      <Element name="about">
        <About />
      </Element>

      <Element name="services">
        <Services />
      </Element>

      <footer className="bg-dark text-white text-center text-lg-start">
        <div className="container p-4">
          <div className="row mt-4">
            <div className="col-md-4">
              <h2 className="logo"><b>C</b>onnectify</h2>
              <p>
                Connectify is a platform where like-minded individuals come together to learn, collaborate, and grow.
              </p>
              <div className="contact">
                <span><i className="fas fa-phone"></i> +1234567890</span>
                <span><i className="fas fa-envelope"></i> info@connectify.com</span>
              </div>
              <div className="socials">
                <a href="/home"><i className="fab fa-facebook"></i></a>
                <a href="/home"><i className="fab fa-twitter"></i></a>
                <a href="/home"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
            <div className="col-md-4">
              <h2>Quick Links</h2>
              <ul className="list-unstyled">
                <li><a href="#home" onClick={() => scroll.scrollToTop()}>Home</a></li>
                <li><a href="#about" onClick={() => scroll.scrollTo('about')}>About</a></li>
                <li><a href="#services" onClick={() => scroll.scrollTo('services')}>Services</a></li>
                <li><a href="#contact" onClick={() => scroll.scrollTo('contact')}>Contact</a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h2>Contact Us</h2>
              <form>
                <div className="mb-3">
                  <input type="email" name="email" className="form-control" placeholder="Your Email" />
                </div>
                <div className="mb-3">
                  <textarea name="message" className="form-control" placeholder="Message" rows="4"></textarea>
                </div>
                <div>
                  <Button type="submit" className="btn btn-outline-light">Submit</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
