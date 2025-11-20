import { ListGroup } from "react-bootstrap"

const PastaReviews = function (props) {
    return(
        <ListGroup className="text-center">
              {props.pasta.comments.map((c) => {
                return (
                  <ListGroup.Item key={c.id}>
                    {c.author} | {c.comment}
                  </ListGroup.Item>
                )
              })}
            </ListGroup>
    )
}

export default PastaReviews