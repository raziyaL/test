import React, {useState} from 'react';
import {TextField, Button} from "@mui/material";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {UserInfo} from "../../store/Slice";


function MainPage() {
const {users} = useSelector((state) => state.users);
  const [error, setError] = useState('');


const {
    register,
    handleSubmit,
    formState: {errors},
    reset
    } = useForm()
    const dispatch = useDispatch();



const handleUserInfo = (data) =>{
    const register = users.some((user) => user.name === data.name);
    if(register){
        setError("oshibka! etot polzovatel' uje suwestvuet")
    }else if(data.password === data.secondPass){
        dispatch(UserInfo(data))
        setError("")
        reset()
    }else {
        setError("Пароли не совпадают");
    }

}



return(
    <div>
        <form action="" onSubmit={handleSubmit(handleUserInfo)} style={{display: "flex", width:"700px", margin:"0 auto", justifyContent:"space-between"}}>
           <div>
               <TextField
                   type="text"
                   placeholder="name"
                   {...register("name", {required:true})}/>
               {errors.name && <p>zapolnite eto pole</p>}
           </div>


           <div>
               <TextField
               type="text"
               placeholder="password"
               {...register("password", {required:true})}/>
               {errors.password && <p>zapolnite eto pole</p>}</div>

            <div>
                <TextField

                    type="text"
                    placeholder="secondPass"
                    {...register("secondPass", {required:true})}/>
                {errors.secondPass && <p>zapolnite eto pole</p>}
            </div>
            <Button type="submit" style={{height:"40px", marginTop:"10px"}}>Add</Button>
        </form>
        {errors && <p>{error}</p>}

        {users && users.map((user, id)=>(
            <div key={id} style={{width:'300px', margin:"0 auto", border:"1px solid black", borderRadius:"10px", marginTop:"10px"}} >
                <p>name:{user.name}</p>
                <p>password:{user.password}</p>
            </div>
        ))}
    </div>
)
}

export default MainPage;