import React from 'react'
import Page from '../../components/Page/Page'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Home = () => {
  return (
    <Page title="Home" naviagation={true}>
      <Row>
        <Col>
          Home
        </Col>
      </Row>
    </Page>
  )
}

export default Home
