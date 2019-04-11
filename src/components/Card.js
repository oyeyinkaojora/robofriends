import React from 'react';

const Card = ({name,email,id}) =>{
    //const {name,email,id} = this.props;//this method is called destructuring
    return (
        <div className="tc ba b--green bg-light-green dib br3 pa3 na2 grow bw2 shadow-5">
            <img alt="robots" src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;