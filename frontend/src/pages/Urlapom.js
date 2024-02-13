import { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function Urlapom(props) {
const [adat, setAdat] = useState({id: "", szakdoga_nev: "", githublink: "", oldallink: "", tagokneve: ""})
//const [adat, setAdat] = useState({...props.elem})

function adatValt(event){
  const masolat={...adat}
  masolat[event.target.id] = event.target.value
  console.log(event.target.id, event.target.value)
  setAdat(masolat)
  console.log(masolat)
}

  function kuldes(event){
    event.preventDefault()
    if(props.elem.id){
      props.modosit(adat)
    }else{
      props.kuldes(adat)
    }
  }
    return (

    <Form sm="5" onSubmit={kuldes}>
<Form.Group className="mb-3" controlId="id">
        <Form.Label md="2">Id</Form.Label>
        <Form.Control readOnly md="10" value={props.elem.id} type="text"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="szakdoga_nev">
        <Form.Label md="2">Szakdolgozat címe</Form.Label>
        <Form.Control onChange={adatValt} defaultValue={props.elem.szakdoga_nev} md="10" type="text"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="tagokneve">
        <Form.Label>Készítők neve</Form.Label>
        <Form.Control onChange={adatValt} defaultValue={props.elem.tagokneve} type="text"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="oldallink">
        <Form.Label>Az oldal elérhetősége</Form.Label>
        <Form.Control onChange={adatValt} defaultValue={props.elem.oldallink} type="text"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="githublink">
        <Form.Label>GitHub elérhetőség</Form.Label>
        <Form.Control onChange={adatValt} defaultValue={props.elem.githublink} type="text"/>
      </Form.Group>
      <Button type="submit">Új</Button>

    </Form>

    // <div className="row g-3 align-items-center m-5">
    //   <div className="col-2 ">
    //     <label for="szakdoga_nev" className="col-form-label">
    //       Szakdolgozat címe
    //     </label>
    //   </div>
    //   <div className="col-10">
    //     <input onChange={adatValt} type="text" id="szakdoga_nev" className="form-control" />
    //   </div>
    //   <div className="col-2 ">
    //     <label for="tagokneve" className="col-form-label">
    //       Készítők neve
    //     </label>
    //   </div>
    //   <div className="col-10">
    //     <input onChange={adatValt} type="text" id="tagokneve" className="form-control" />
    //   </div>
    //   <div className="col-2 ">
    //     <label for="oldallink" className="col-form-label">
    //       Az oldal elérhetősége
    //     </label>
    //   </div>
    //   <div className="col-10">
    //     <input onChange={adatValt} type="text" id="oldallink" className="form-control" />
    //   </div>
    //   <div className="col-2 ">
    //     <label for="githublink" className="col-form-label">
    //       GitHub elérhetőség
    //     </label>
    //   </div>
    //   <div className="col-10">
    //     <input onChange={adatValt} type="text" id="githublink" className="form-control" />
    //   </div>
    //   <div className="col-2"></div>
    //   <div className="col-sm-2">
    //     <input onChange={adatValt} type="submit" value="Új"  className="form-control" />
    //   </div>
    // </div>
  );
}
