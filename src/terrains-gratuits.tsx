import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'; // For optimized images
import { Container, Row, Col, Card, Button, Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEuroSign, FaUsers, FaSyncAlt, FaCheckCircle } from 'react-icons/fa';

const TerrainsGratuits = () => {
  return (
    <>
      <Head>
        <title>Terrains de Padel Gratuits pour Communes Rurales - Village Padel</title>
        <meta name="description" content="Découvrez les terrains de padel gratuits pour communes rurales par Village Padel. Installation sans frais via bail, tarifs préférentiels pour clubs de tennis et habitants. Redynamisez votre vie locale !" />
        <meta name="keywords" content="terrains padel gratuits, padel communes rurales, installation padel sans frais, redynamisation clubs tennis, bail padel" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://villagepadel.fr/terrains-gratuits" />
        <meta property="og:title" content="Terrains de Padel Gratuits pour Vos Communes - Village Padel" />
        <meta property="og:description" content="Solution innovante sans frais pour installer des terrains de padel dans les communes rurales et redynamiser les clubs de tennis." />
        <meta property="og:image" content="https://villagepadel.fr/images/sport.webp" />
        <meta property="og:url" content="https://villagepadel.fr/terrains-gratuits" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Village Padel",
            "description": "Installation de terrains de padel gratuits pour communes rurales sans frais via bail.",
            "url": "https://villagepadel.fr",
            "telephone": "07 49 15 74 01",
            "email": "contact@villagepadel.fr",
            "areaServed": "Communes rurales en France",
            "offers": {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Terrains de Padel Gratuits",
                "description": "Construction et exploitation de terrains de padel sans frais pour les communes via bail, avec tarifs préférentiels."
              }
            }
          })}
        </script>
      </Head>

      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} href="/">
            <Image src="/images/logo.png" alt="Logo Village Padel - Installations de padel gratuits" width={150} height={40} /> Village Padel
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} href="/">Accueil</Nav.Link>
              <Nav.Link as={Link} href="/vp-tech">VP Tech</Nav.Link>
              <Nav.Link as={Link} href="/terrains-gratuits" active>Terrains Gratuits</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section className="hero py-5 text-center" style={{ backgroundImage: `url(/images/sport.webp)`, backgroundSize: 'cover', backgroundPosition: 'center', color: 'white', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
        <Container className="py-5">
          <h1 className="display-4 fw-bold">Terrains de Padel Gratuits pour Vos Communes Rurales</h1>
          <p className="lead">Redynamisez les zones rurales avec des installations de padel innovantes, sans frais pour la municipalité via un bail adapté. Offrez des tarifs préférentiels aux clubs de tennis et habitants.</p>
          <Button variant="success" size="lg" as="a" href="#contact">Contactez-nous</Button>
        </Container>
      </section>

      <Container className="my-5">
        <Row className="justify-content-center">
          <Col md={10} className="text-center">
            <h2>Notre Solution Innovante pour Terrains de Padel Gratuits</h2>
            <p className="text-justify">Village Padel propose une offre unique pour construire et exploiter des terrains de padel gratuits dans les communes rurales. Sans impact sur le budget municipal grâce à un bail sans frais, nous offrons des prix bas et des tarifs préférentiels pour les licenciés des clubs de tennis locaux et les habitants. Le padel, ce sport hybride entre tennis et squash, est accessible à tous âges et niveaux, favorisant la cohésion sociale et l'attractivité de votre commune. Notre solution a déjà séduit plusieurs mairies, transformant des espaces inutilisés en hubs sportifs dynamiques.</p>
          </Col>
        </Row>
      </Container>

      <section className="bg-light py-5">
        <Container>
          <h2 className="text-center mb-4">Avantages des Terrains de Padel Gratuits pour Communes et Clubs de Tennis</h2>
          <Row className="g-4">
            <Col md={4}>
              <Card className="h-100 text-center border-0 shadow-sm">
                <Card.Body>
                  <FaEuroSign className="fa-3x text-success mb-3" />
                  <h3>Installation Sans Frais via Bail</h3>
                  <p>Aucun coût initial pour la commune : nous finançons la construction, l'entretien et l'exploitation via un bail à long terme.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 text-center border-0 shadow-sm">
                <Card.Body>
                  <FaUsers className="fa-3x text-success mb-3" />
                  <h3>Tarifs Préférentiels et Accessibles</h3>
                  <p>Prix bas pour tous, gratuité ou réductions pour les habitants locaux et licenciés des clubs de tennis, ajustés via notre app.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 text-center border-0 shadow-sm">
                <Card.Body>
                  <FaSyncAlt className="fa-3x text-success mb-3" />
                  <h3>Redynamisation des Clubs de Tennis</h3>
                  <p>Intégrez le padel pour stopper l'exode vers les privés, avec créneaux dédiés pour cours, initiations et événements croisés.</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <Container className="my-5">
        <h2 className="text-center mb-4">Comment Fonctionne Notre Offre de Terrains de Padel Gratuits ?</h2>
        <Row className="justify-content-center">
          <Col md={10}>
            <ol className="list-group list-group-flush">
              <li className="list-group-item d-flex align-items-center"><FaCheckCircle className="text-success me-2" />Évaluation gratuite du site idéal avec la mairie et les clubs de tennis locaux.</li>
              <li className="list-group-item d-flex align-items-center"><FaCheckCircle className="text-success me-2" />Construction rapide et financée par Village Padel (outdoor ou indoor, avec éclairage et accès automatisés).</li>
              <li className="list-group-item d-flex align-items-center"><FaCheckCircle className="text-success me-2" />Signature d'un bail sans frais pour la commune ; nous gérons l'exploitation via notre app de réservation.</li>
              <li className="list-group-item d-flex align-items-center"><FaCheckCircle className="text-success me-2" />Lancement en quelques mois avec formation et support continu pour une intégration parfaite.</li>
            </ol>
          </Col>
        </Row>
      </Container>

      <section className="bg-light py-5">
        <Container>
          <h2 className="text-center mb-4">Exemples de Réalisations de Terrains de Padel Gratuits</h2>
          <Row className="g-4">
            <Col md={6}>
              <Card>
                <Image src="/images/grisolles.jpg" alt="Terrain de padel gratuit à Grisolles, intégré à un club de tennis rural" width={600} height={400} className="card-img-top" />
                <Card.Body>
                  <h3>Grisolles : Succès en Commune Rurale</h3>
                  <p className="text-justify">Terrain outdoor premium revitalisant le club local avec tarifs gratuits pour écoles et habitants. <Link href="/grisolles">En savoir plus</Link>.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card>
                <Image src="/images/campsas.jpg" alt="Terrain de padel gratuit à Campsas, redynamisant le club de tennis" width={600} height={400} className="card-img-top" />
                <Card.Body>
                  <h3>Campsas : Intégration au Club de Tennis</h3>
                  <p className="text-justify">Projet boostant l'attractivité avec créneaux dédiés et arrêt de l'exode vers les privés. <Link href="/campsas">En savoir plus</Link>.</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="mt-4 justify-content-center">
            <Col md={8}>
              <blockquote className="blockquote text-center">
                <p>"Grâce à Village Padel, notre commune rurale est devenue un centre sportif attractif sans dépenser un euro !" – Maire de Grisolles</p>
              </blockquote>
            </Col>
          </Row>
        </Container>
      </section>

      <Container className="my-5">
        <h2 className="text-center mb-4">FAQ sur les Terrains de Padel Gratuits pour Communes Rurales</h2>
        <Row className="justify-content-center">
          <Col md={10}>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Les terrains de padel sont-ils vraiment gratuits pour la commune ?</Accordion.Header>
                <Accordion.Body>
                  Oui, grâce à un bail sans frais initiaux ni récurrents pour la municipalité. Village Padel finance tout via l'exploitation des réservations.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Comment intégrer un club de tennis existant ?</Accordion.Header>
                <Accordion.Body>
                  Nous offrons des tarifs préférentiels (jusqu'à la gratuité) pour les licenciés, des créneaux dédiés pour cours et événements, aidant à redynamiser le club et stopper l'exode vers les privés.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Quel est le délai pour installer un terrain de padel gratuit ?</Accordion.Header>
                <Accordion.Body>
                  De l'évaluation à l'ouverture, comptez 3 à 6 mois, selon le site et les autorisations locales.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>

      <section id="contact" className="bg-success text-white py-5 text-center">
        <Container>
          <h2>Contactez Village Padel pour Votre Terrain de Padel Gratuit</h2>
          <p>Prêts à dynamiser votre commune rurale avec le padel ? Discutons de votre projet sans engagement !</p>
          <Button variant="light" size="lg" as="a" href="mailto:contact@villagepadel.fr">Envoyer un Message</Button>
          <p className="mt-3">Ou appelez-nous au : 07 49 15 74 01</p>
        </Container>
      </section>

      <footer className="bg-dark text-white py-3 text-center">
        <p>© 2025 Village Padel. Tous droits réservés. | <Link href="/cgu" className="text-white">CGU</Link> | <Link href="/cgv" className="text-white">CGV</Link></p>
      </footer>
    </>
  );
};

export default TerrainsGratuits;
