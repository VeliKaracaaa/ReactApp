import React, { Children, Fragment } from "react";

const Membre = ({ name, age, children, test }) => {
    return (
        <Fragment>
            <h2 
                style={{ backgroundColor: age < 10 ? 'yellow' : 'purple',
                color: age < 10 ? 'black' : 'white'}}>
                {name} : {age}
            </h2>
            {children ? <p>{children}</p> : <Fragment />}
        </Fragment>
    )
}

export default Membre;