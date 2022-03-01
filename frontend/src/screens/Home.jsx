import React, { Component } from 'react';
import { Container } from "semantic-ui-react"
import { newsService } from "../services/news.service"
import { connect } from 'react-redux';
import { incrementAction, decreaseAction } from '../redux/actions/actions';
import { favService } from '../services/faves.services';
import { Pagination } from 'semantic-ui-react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

const getLogger = require('webpack-log');
const log = getLogger({ name: 'About logs' });


class Home extends Component {

    render() {
        
        return (
        <div align='center' style={{ alignItems: 'center' }}>
            <h1>Home</h1>
        </div>
        )
    }    
}


const mapStateToProps = (state) => ({
  library: state.librarys.library,
  value: state.counter.value,
});

const mapDispatchToProps = (dispatch) => ({
  incrementAction: () => dispatch(incrementAction()),
  decreaseAction: () => dispatch(decreaseAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
