import React from "react";

const ValidationComponent = (props) => {
    return (
        <div>
            <p>
                Current length: {props.length}
            </p>

            {props.length < 5 ?
                <p>Too short</p>
                :
                <p>Enough :)</p>
            }
        </div>
    )
};

export default ValidationComponent;
