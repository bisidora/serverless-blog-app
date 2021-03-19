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
    <Row className="mb-5">
      {/* <Col md="10">
        <CardLIstItem />
      </Col> */}
      {blogs.map((blog) => (
        <Col key={blog.slug} md="4">
          <CardItem title={blog.title} subtitle={blog.subtitle} />
        </Col>
      ))}
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
