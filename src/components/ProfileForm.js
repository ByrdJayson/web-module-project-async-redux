import React, { useState } from 'react'
import { connect } from 'react-redux'
function ProfileForm(props) {
    const initialSearch = {
        service: '',
        user: ''
    }
    const [search, setSearch] = useState(initialSearch)
    
    
    const handleChange = (e) => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })

        
    }
    console.log(search);
    const handleSubmit = e => {
        e.preventDefault();
        setSearch(initialSearch);
    }


    return (
        <div>
            <form onSubmit={handleSubmit} onChange={handleChange}>
                <label htmlFor='user'>Username: </label>
                <input type='text' name='user' value={search.user} onChange={handleChange}></input>
                <div>
                    <select name='service'>
                        <option value='choose-a-service'>Choose Service</option>
                        <option name='service' value='steam'>Steam</option>
                        <option name='service' value='xbox'>Xbox</option>
                        <option name='service' value='minecraft'>Minecraft</option>
                    </select>
                    <button onClick={handleSubmit}>Find User</button>
                </div>

            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return ({
      state
    })
  }
  
  export default connect(mapStateToProps)(ProfileForm);
