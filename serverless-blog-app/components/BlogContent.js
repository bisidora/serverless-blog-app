import BlogContent from "@sanity/block-content-to-react";
import { urlFor } from "lib/api";

const serializers = {
  types: {
    image: ({ node: { asset, alt, position = "center" } }) => {
      return (
        <div className={`blog-image blog-image-${position}`}>
          <img src={urlFor(asset.url).height(300).fit("max")} />
          <div className="image-alt">{alt}</div>
        </div>
      );
    },
  },
};

const BlogContentComponent = ({ content }) => (
  <BlogContent serializers={serializers} blocks={content} />
);

export default BlogContentComponent;
