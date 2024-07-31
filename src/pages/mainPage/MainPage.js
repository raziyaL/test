import React, {useState} from 'react';
import Component from "../../component/Component"
import {TextField, Button} from "@mui/material";


function MainPage() {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [secondPass, setSecondPass] = useState('');
    const [register, setRegister] = useState(false);
    const [error, setError] = useState('');
    const [userInfo, setUserInfo] = useState([]);

    const handleName = (e) => {
        setName(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleSecondPass = (e) => {
        setSecondPass(e.target.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !password || !secondPass) {
            setError('zapolnite vse polya');
            return;
        }

        if (password !== secondPass) {
            setError('oshibka! paroli ne sovpadayt');
            return;
        }
        // if (register) {
        //     setError('oshibka! takoi user uje suwestvuet');
        //     return;
        // }
        const newUser={
            name: name,
            password: password,
            secondPass: secondPass
        }
        setUserInfo([...userInfo, newUser]);
        const userExists = userInfo.some(user => user.name === name);
        if (userExists) {
            setError('oshibka! takoi user uje suwestvuet');
            return;
        }
        setRegister(true);
        console.log(name, password);

        setName('');
        setPassword('');
        setSecondPass('');
    }

    return (
        <div style={{margin:'30px'}}>
            <form action="" onSubmit={handleSubmit}>
                <TextField
                    variant="outlined"

                    style={{marginLeft: '10px'}}
                    value={name}
                    type="text"
                    placeholder="name"
                    onChange={handleName}
                />

                <TextField
                    style={{marginLeft: '10px'}}
                    variant="outlined"

                    value={password}
                    type="password"
                    placeholder="password"
                    onChange={handlePassword}
                />

                <TextField
                    style={{marginLeft: '10px'}}
                    variant="outlined"
                    value={secondPass}
                    type="password"
                    placeholder="password"
                    onChange={handleSecondPass}
                />


                <Button type='submit' style={{margin:"10px"}}>register</Button>
            </form>

            {error && <p style={{ color: 'red' }}>{error}</p>}
           <div>
               {userInfo.map((user, index) => (
               <Component key={index} register={user} />
           ))}
           </div>

        </div>
    );
}

export default MainPage;