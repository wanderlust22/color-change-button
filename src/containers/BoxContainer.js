import React from 'react';
import Box from '../components/Box';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/index.js';

class BoxContainer extends React.Component {
    render(){
        return(
            <Box handleClick={this.props.loadColor} color={this.props.color}/>
        );
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, actionCreators)(BoxContainer);