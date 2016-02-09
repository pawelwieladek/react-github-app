import React from 'react';
import { Input } from 'react-bootstrap';

export default React.createClass({
    displayName: 'StarsFilter',

    propTypes: {
        starsFrom: React.PropTypes.string,
        starsTo: React.PropTypes.string
    },

    handleChange () {
        let valueFrom = this.refs.inputFrom.getValue();
        let valueTo = this.refs.inputTo.getValue();
        this.props.onChange(value)
    },

    render() {
        return (
            <div>
                <Input type="text" ref="inputFrom"></Input>
                <Input type="text" ref="inputTo"></Input>
            </div>
        );
    }
});
