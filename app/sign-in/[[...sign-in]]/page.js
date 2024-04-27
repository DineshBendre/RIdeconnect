'use client';
import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
import React from 'react';
 


export default function Page() {
  

  const text ="Rideconnect The future of Auto Driver Efficiency....."
  return (
    <>
    <div>
      <div>
        <Image src='logoMain.png' width={100} height={150} style={{position:'relative',top:-40,marginLeft:'20px'}} />
      </div>
      <div style={{ position: 'relative', overflow: 'hidden', whiteSpace: 'nowrap' }}>
        <h1 style={{transition: "font-size 0.2s ease",display:'flex',alignItems:"center",marginTop:100,marginLeft:80,fontSize:"30px",fontWeight:'bold'}} onMouseOver={(e) => { e.target.style.fontSize = "35px" }}
        onMouseOut={(e) => { e.target.style.fontSize = "30px" }} >{text}</h1>
<p style={{ whiteSpace: 'normal',fontSize:'10px',marginLeft:'100px' }}>Welcome to our taxi service revolutionizing urban transport. Seamlessly connecting passengers and drivers for efficient and reliable journeys.</p>
      </div>
      <Image src='banner.jpg' width={900} height={1000} style={{ filter: 'blur(5px)' }}
      className="object-contain h-full w-full"/>
      <div className=" absolute top-20 right-0">
      <SignIn />

      </div>
    </div>
    </>
    
 
  );
}