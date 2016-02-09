import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, Label } from 'react-bootstrap';

export default React.createClass({
    displayName: 'ResultItem',

    propTypes: {
        name: React.PropTypes.string,
        owner: React.PropTypes.string,
        language: React.PropTypes.string,
        avatarUrl: React.PropTypes.string,
        stars: React.PropTypes.number
    },

    render() {
        return (
            <Row>
                <Col md={3}>
                    <img src={this.props.avatarUrl} alt=""/>
                </Col>
                <Col md={5}>
                    <div>
                        {this.props.name}
                    </div>
                    <div>
                        <div>{this.props.owner}</div>
                    </div>
                </Col>
                <Col md={4}>
                    <div>
                        <Label>{this.props.language}</Label>
                        <Label bsStyle='primary'>{this.props.stars}</Label>
                    </div>
                </Col>
            </Row>
        );
    }
});
