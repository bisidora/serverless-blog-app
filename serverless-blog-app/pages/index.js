import { Row, Col } from "react-bootstrap";

import PageLayout from "components/PageLayout";
import AuthorIntro from "components/AuthorIntro";
import CardLIstItem from "components/CardListItem";
import CardItem from "components/CardItem";

const Home = () => (
  <PageLayout className="blog-detail-page">
    <AuthorIntro />
    <hr />
    <Row className="mb-5">
      <Col md="10">
        <CardLIstItem />
      </Col>
      <Col md="4">
        <CardItem />
      </Col>
    </Row>
  </PageLayout>
);

export default Home;
