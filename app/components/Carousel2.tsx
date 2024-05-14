import React from "react"
import Card from "./Card"
import './csel.scss'

export default function Carousel() {
    const cards = [
        <Card key={1} />,
        <Card key={2} />,
        <Card key={3} />,
        <Card key={4} />,
        <Card key={5} />,
        <Card key={6} />,
        <Card key={7} />,
        <Card key={8} />,
      ]; 
    return (
        <div className="carousel-container">
            <div className="carousel-track">
                {cards}
            </div>
        </div>
    )
}