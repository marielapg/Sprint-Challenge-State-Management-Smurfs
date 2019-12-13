import React, { useEffect } from 'react';
import {Link} from "react-router-dom";
import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions/index';
import Smurfs from './Smurfs';
import SmurfForm from './SmurfForm';

const DisplaySmurfs = (props) => {
const { smurfs, fetchSmurfs } = props

    useEffect(() => {
        fetchSmurfs()
    }, [fetchSmurfs])

    return (
        <div>
            <h1>Hello Smurfs</h1>
            <SmurfForm />
            {smurfs.map(item => (
                <Link to={`/smurf/${item.id}`}>
                <Smurfs key={Date.now()} name={item.name} age={item.age} height={item.height} id={item.id}/>
                </Link>
            ))}
        </div>
    )
}
const mapStateToProps = state => {
    return { smurfs: state.data }
}

const mapDispatchToProps = {
    fetchSmurfs
}
export default connect(mapStateToProps, mapDispatchToProps)(DisplaySmurfs);