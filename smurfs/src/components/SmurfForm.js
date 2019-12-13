import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postSmurfs } from '../actions/index';

const SmurfForm = (props) => {
    const [values, setValues] = useState({
        name: '',
        age: 0,
        height: ''
    })

    const handleChange = event => {
        setValues({ ...values, [event.target.name]: event.target.value })
    }

    const handleSubmit = event => {
        event.preventDefault()
        props.postSmurfs(values)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type='text' name='name' onChange={handleChange} value={values.name} />
                <label>Age</label>
                <input type='text' name='age' onChange={handleChange} value={values.age} />
                <label>Height</label>
                <input type='text' name='height' onChange={handleChange} value={values.height} />
                <button type='submit'>Add Smurf</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = {
    postSmurfs
}

export default connect(state => state, mapDispatchToProps)(SmurfForm);