import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import PrimaryNavigation from '../PrimaryNavigation/PrimaryNavigation'

const Page = ({ children, navigation }) => {
  return (
    <main>
			{		
				navigation && (
					<header>
						<Container>
							<PrimaryNavigation
								items={
									[
										{
											to: '/',
											title: 'Home'
										},
										{
											to: '/units',
											title: 'Units'
										}
									]
								}
							/>
						</Container>
					</header>
				)	
			}
			<Container className='mt-4 g-0'>
				<Row>
					<Col>
						<header>
							<div>where is this?</div>
						</header>
						{children}
					</Col>
				</Row>
			</Container>
    </main>
  )
}

export default Page
