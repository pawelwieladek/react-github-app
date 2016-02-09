import React from 'react';
import { Input } from 'react-bootstrap';

export default React.createClass({
    displayName: 'LangFilter',

    propTypes: {
        language: React.PropTypes.string,
        onChange: React.PropTypes.func.isRequired
    },

    handleChange () {
        let value = this.refs.input.getValue();
        this.props.onChange(value)
    },

    render() {
        return (
            <Input type="select" onChange={this.handleChange} ref="input">
                <option value="javascript">JavaScript</option>
                <option value="python">Python</option>
            </Input>
        );
    }
});
