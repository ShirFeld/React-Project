import React, { useEffect, useState } from "react";
import { getAnimals } from "../firebase/zooFunctions";
import AnimalCard from "./AnimalsCard";
import { Col, Row } from "react-bootstrap";
import '../App.css';


export default function AnimalsCategory() {
    const [animals, setAnimals] = useState([]);

    const [displayAnimals, SetDisplayAnimals] = useState([]);
    const [displayType, setDisplayType] = useState("");

    useEffect(() => {
        SetDisplayAnimals(
            animals.filter((animal) => animal.data.type === displayType)
        );
    }, [displayType, animals]);

    useEffect(() => {
        getAnimals().then((animals) => {
            setAnimals(animals);
        })
            .catch((err) => {
                console.log("getAnimals " + err);
            });

    }, []);

    const refreshData = () => {
        getAnimals().then((animals) => {
            setAnimals(animals);
        })
            .catch((err) => {
                console.log("refreshData " + err);
            });
    };
    return (
        <div>
            <br></br>
            <h2 style={{ color: "#5ec3e9", textDecorationLine: 'underline', fontStyle: 'italic', fontSize: 50 }}>Choose category:</h2>
            <br></br>
            <Row style={{ marginTop: 30 }} xs={1} md={1} lg={3} className="g-2">
                <Col className="d-flex justify-content-center">

                    <button className="btn"
                        onClick={() => setDisplayType("sea")}
                        type="button" >
                        Sea animals
                    </button>


                </Col>
                <Col className="d-flex justify-content-center">
                    <button onClick={() => setDisplayType("land")}
                        style={{ backgroundColor: "#5ec3e9", borderColor: "#5ec3e9", borderRadius: 13, fontSize: 25 }}
                        type="button">
                        Land animals
                    </button>
                </Col>

                <Col className="d-flex justify-content-center">
                    <button onClick={() => setDisplayType("air")}
                        type="button" style={{ backgroundColor: "#5ec3e9", borderColor: "#5ec3e9", borderRadius: 13, fontSize: 25 }}>
                        Air animals
                    </button>
                </Col>

            </Row>
            <Row xs={1} md={2} lg={3} className="g-3 m-1">
                {displayAnimals.map((animal) => {
                    return (
                        <Col key={animal.id}>
                            <AnimalCard
                                animal={animal.data}
                                id={animal.id}
                                refreshData={refreshData}
                            />
                        </Col>
                    );
                })}
            </Row>
            <br />
            <br />
        </div>
    );
}
