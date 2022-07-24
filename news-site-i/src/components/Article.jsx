import { Image, Container, Row, Col } from 'react-bootstrap'

function Article(props) {

    return (
        <Container >
            <Row className='article'>
                <Col lg='3' className='my-col' >
                    {props.image ? <Image width='100%' height='auto' rounded src={props.image.url} />
                        : <p> image not found </p>
                    }
                </Col>
                <Col lg='9'>
                    <Row>
                        <h1>{props.title}</h1>
                    </Row>
                    <Row>
                        <p>{props.created_date}</p>
                    </Row>
                    <Row>
                        {props.byline && <h2>{props.byline}</h2>}
                    </Row>
                    <Row>
                        <p>{props.abstract}</p>
                    </Row>

                </Col>


            </Row>
        </Container>
    )
}
export default Article;