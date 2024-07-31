import React from 'react';

function Component({register}) {
    return (
        <div style={{border: "1px solid black", padding: "10px", width:'400px', margin: '20px auto'}}>
            <p>USERNAME: {register.name}</p>
            <p>PASSWORD: {register.password}</p>
        </div>
    );
}

export default Component;