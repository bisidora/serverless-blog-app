import { Card } from "react-bootstrap";

import Link from "next/link";

const CardLIstItem = ({ title, subtitle, date, author, slug, link }) => {
  return (
    <Card className={`fj-card fj-card-list`}>
      <div className="card-body-wrapper">
        <Card.Header className="d-flex flex-row">
          <img
            src={author?.avatar}
            className="rounded-circle mr-3"
            height="50px"
            width="50px"
            alt="avatar"
          />
          <div>
            <Card.Title className="font-weight-bold mb-1">
              {author?.name}
            </Card.Title>
            <Card.Text className="card-date">{date}</Card.Text>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title className="card-main-title">{title}</Card.Title>
          <Card.Text>{subtitle}</Card.Text>
        </Card.Body>
      </div>
      {link && (
        <Link href={link.href} as={link.as}>
          <a className="card-button">Read More</a>
        </Link>
      )}
    </Card>
  );
};

export default CardLIstItem;
