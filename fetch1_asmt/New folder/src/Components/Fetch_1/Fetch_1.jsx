import { Card, Col, Row } from "react-bootstrap";

export function ProductListUI({ itemsList }) {

    return (
        <>
            {
                (itemsList) ?
                    <Row>
                        {
                            itemsList.map(i =>
                                <Col className="col-3 mb-3" key={i.id}  >
                                    <ProductUI item={i} />
                                </Col>
                            )
                        }
                    </Row >
                    :
                    <Card>
                        <Card.Body>
                            Empty
                        </Card.Body>
                    </Card>
            }
        </>
    );
}

export function ProductUI({ item }) {
    return (
        <>
            <Card>
                <Card.Header className="bg-primary text-white" >
                    <Card.Title>Name: {item.name}</Card.Title>

                </Card.Header>
                <Card.Body>
                <div className="">Email: {item.email}</div>
                <div className="">Address: {item.email}</div>
                    {
                        (item.data) &&
                        Object.keys(item.data).map(k =>
                            <Row>
                                <Col className="3"> {k} </Col>
                                <Col className="9" >({item.data[k]})</Col>
                            </Row>
                        )

                    }
                </Card.Body>
            </Card>
        </>
    )
}