import React from 'react'
import image from "../pics/main2.jpg"

export default function HomePage() {
    return (
        <div
            style={{ backgroundImage: 'url(' + image + ')', backgroundSize: "cover", height: "100vh", color: "#f5f5f5" }}>

            <h1 style={{
                padding: "10px",
                fontFamily: "fantasy",
                fontSize: " 4.5rem",
                color: "white"
            }}  >   Welcome to the zoo</h1>
        </div >

    )
}
