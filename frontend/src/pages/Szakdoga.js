import Tablazatom from "./Tablazatom";
import DataService from "../model/DataService";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Urlapom from "./Urlapom";

const DS = new DataService();

export default function Szakdoga() {
  const vegpont = "/szakdogak";
  const [szakdogak, setSzakdogak] = useState([{}]);
  const [modositando, setModositando] = useState({id: "", szakdoga_neve: "", tagokneve: "", oldallink: "", githublink: ""});

  useEffect(() => {
    DS.getData(vegpont, setSzakdogak);
  }, []);

  function betolt() {
    DS.getData(vegpont, setSzakdogak);
  }

  function kuldes(adat) {
    DS.postData(vegpont, adat, setSzakdogak);
  }

  function torles(id) {
    DS.deleteData(vegpont, id, betolt);
  }

  function modositani(elem) {
    //console.log(elem)
    setModositando({...elem});
  }

  function modosit(adat){
    console.log(adat.id)
    DS.putData(vegpont, adat.id, adat, setSzakdogak)
  }

  return (
    <>
      <Container fluid style={{ marginTop: "1em" }}>
        <Row>
        <p className="fejlecSzoveg">
          Számalk-Szalézi Technikum és Szakgimnázium 2020-2022 évfolyam
          szoftverfejlesztőinek szakdolgozatai
        </p>

        </Row>

        <Container
          style={{
            marginTop: "2em",
            borderRadius: "10px",
            padding: "2em",
            backgroundColor: "white",
          }}
        >
          Admin oldal
          <Tablazatom
            objLista={szakdogak}
            torles={torles}
            modosit={modositani}
          ></Tablazatom>
          <Urlapom kuldes={kuldes} elem={modositando} modosit={modosit} />
        </Container>
      </Container>
    </>
  );
}
