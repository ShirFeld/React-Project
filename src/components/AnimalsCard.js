import React from "react";
import { Card, Button } from "react-bootstrap";
import { deleteAnimal } from "../firebase/zooFunctions";
import { Link } from "react-router-dom";


export default function AnimalCard({ id, animal, refreshData }) {
    const deleteAnimalHandler = () => {
        // eslint-disable-next-line no-restricted-globals
        if (confirm("Are You sure?")) {
            deleteAnimal(id);
            refreshData();
        }
    };
    return (

        <>
            <br></br>
            <Card >
                <Card.Img
                    variant="top"
                    src={animal.imgUrl}
                    height="450px"
                    style={{ objectFit: "cover" }}
                />
                <Card.Body className="d-flex flex-column">
                    <Card.Title>
                        <span>
                            {animal.name}
                        </span>
                    </Card.Title>
                    <p>Number Of Legs : {animal.numberOfLegs}</p>
                    <p>In Israel : {animal.inIsrael ? "Yes" : "No"}</p>
                    <Link to={id}>
                        <Button variant="primary" className="w-100">
                            View Data
                        </Button>
                    </Link>

                    <button onClick={deleteAnimalHandler} type="button"
                        className="btn btn-danger">  Delete
                    </button>


                </Card.Body>
            </Card>
        </>

    );
}
