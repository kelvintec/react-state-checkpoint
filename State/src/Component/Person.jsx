// import React from 'react';
import {useState,useEffect} from "react"

function Person() {
    const [show, setShow] = useState(false);
    const [time, setTime] = useState(new Date().getTime());
    const PersonObj = {
        fullName: 'Uzoma Eboh',
        bio: 'I am a passionate Website developer driven by innovation. With 2+ years of experience in developing Websites.',
        imgSrc:'https://images.unsplash.com/photo-1526779259212-939e64788e3c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
        profession:'FullStack Developer'
    }
    // get the update
    useEffect(() => {
        if (!show) return;

        setTimeout((prevTime)=> (new Date().getTime()) - prevTime)
    }, [show]);

    console.log(time);

    return (
        <>
           {show &&
                 <div className="person">
                    <h3>FullName: {PersonObj.fullName}</h3>
                    <h3>Bio: {PersonObj.bio}</h3>
                    <div><h3>Image:</h3><img src={PersonObj.imgSrc} alt="" /></div>
                    <h3>Profession: {PersonObj.profession}</h3>
                 </div>
            }
            <div className="action">
                <button onClick={function () {
                    setShow((prevShow) => !prevShow);
                }}>Toggle</button>
            </div>
        </>
    )
}

export default Person;