import React from 'react'

function ProfileForm(props) {
    return (
        <div>
            <form>
                <label htmlFor='username'>Username: </label>
                <input name='username'></input>
                <div>
                    <button value='steam'>Search on Steam</button>
                    <button value='minecraft'>Search on Minecraft</button>
                    <button value='xbox'>Search on Xbox</button>
                </div>

            </form>
        </div>
    )
}

export default ProfileForm
