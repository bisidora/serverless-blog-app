import { Row, Col } from "react-bootstrap";

import PageLayout from "components/PageLayout";
import AuthorIntro from "components/AuthorIntro";
import CardLIstItem from "components/CardListItem";
import CardItem from "components/CardItem";
import { getAllBlogs } from "lib/api";

const Home = ({ blogs }) => (
  <PageLayout className="blog-detail-page">
    <AuthorIntro />
    <hr />
    {JSON.stringify(blogs)}
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

export async function getStaticProps() {
  const blogs = await getAllBlogs();
  return {
    props: {
      blogs,
    },
  };
}
