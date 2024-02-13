import Table from "react-bootstrap/Table";
import TablazatSor from "./TablazatSor";

export default function Tablazatom(props) {

function torles(id){
  props.torles(id)
}

function modosit(elem){
  props.modosit(elem)
}
  return (
    <>
      <Table striped hover responsive>
        <thead>
          <tr>
            <th>Szakdolgozat címe</th>
            <th>Készítők neve</th>
            <th className="elrejteni">GitHub link</th>
            <th className="elrejteni">Szakdolgozat elérhetősége</th>
            <th className="elrejteni"></th>
            <th className="elrejteni"></th>
          </tr>
        </thead>
        <tbody>
          {props.objLista.map((e, i) => {
            return (
              <TablazatSor torles={torles} modosit={modosit} elem={e} key={i}/>
              );
            })}
        </tbody>
      </Table>
    </>
  );
}
