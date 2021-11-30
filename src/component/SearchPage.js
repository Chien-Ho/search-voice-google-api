import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { BsThreeDotsVertical } from 'react-icons/bs'
const SearchPage = ({ searchData }) => {
    console.log(searchData);
    return (
        <div>
            <Row className="px-5 page-data">
                <Col className="col-md-12 py-2 page-data">
                    <p>About {searchData.searchInformation.formattedTotalResults} results {`(${searchData.searchInformation.formattedSearchTime}seconds)`}</p>
                    {searchData.items.map(item => (
                        <div key={item.cacheId} className="mb-4">
                            <a href={item.displayLink} className="font-weight-normal header-post text-dark text-decoration-none">{item.displayLink} <BsThreeDotsVertical className="ms-1" /></a>
                            <h4><a href={item.formattedUrl} dangerouslySetInnerHTML={{ __html: item.htmlTitle }} /></h4>
                            <p dangerouslySetInnerHTML={{ __html: item.htmlSnippet }}></p>
                        </div>
                    ))}
                </Col>
            </Row>
        </div>
    )
}

export default SearchPage
