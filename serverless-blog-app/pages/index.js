import { useState } from "react";
import { Row, Col } from "react-bootstrap";

import PageLayout from "components/PageLayout";
import AuthorIntro from "components/AuthorIntro";
import CardLIstItem from "components/CardListItem";
import CardItem from "components/CardItem";
import FilteringMenu from "components/FilteringMenu";
import { getAllBlogs } from "lib/api";
import { useGetBlogs } from "actions";

const Home = ({ blogs: initialData }) => {
  const [filter, setFilter] = useState({
    view: {
      list: 0,
    },
  });

  const { data: blogs, error } = useGetBlogs(initialData);

  return (
    <PageLayout className="blog-detail-page">
      <AuthorIntro />
      <FilteringMenu
        onChange={(option, value) => {
          setFilter({ ...filter, [option]: value });
        }}
        filter={filter}
      />
      <hr />
      <Row className="mb-5">
        {blogs.map((blog) =>
          filter.view.list ? (
            <Col key={`${blog.slug}-list`} md="9">
              <CardLIstItem
                author={blog.author}
                title={blog.title}
                subtitle={blog.subtitle}
                date={blog.date}
                slug={blog.slug}
                link={{
                  href: "/blogs/[slug]",
                  as: `/blogs/${blog.slug}`,
                }}
              />
            </Col>
          ) : (
            <Col key={blog.slug} md="4">
              <CardItem
                author={blog.author}
                title={blog.title}
                subtitle={blog.subtitle}
                date={blog.date}
                image={blog.coverImage}
                slug={blog.slug}
                link={{
                  href: "/blogs/[slug]",
                  as: `/blogs/${blog.slug}`,
                }}
              />
            </Col>
          )
        )}
      </Row>
    </PageLayout>
  );
};

export default Home;

export async function getStaticProps() {
  const blogs = await getAllBlogs({ offset: 0 });
  return {
    props: {
      blogs,
    },
  };
}
