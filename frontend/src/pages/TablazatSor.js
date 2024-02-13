export default function TablazatSor(props) {
  function torles() {
    props.torles(props.elem.id);
  }
  function modosit() {
    props.modosit(props.elem);
  }
  return (
    <tr id={props.elem.id}>
      <td  className="asd">
        {props.elem.szakdoga_nev}
        <span className="spanom">
          GitHub link:
          <span style={{ color: "red" }}> {props.elem.githublink}
 </span>
        </span>
      </td >
      <td className="asd">
        {props.elem.tagokneve}
        <span className="spanom">
          Webcím:
          <span><a href={props.elem.githublink}  style={{ color: "red" }}>Weboldal</a></span>
          <span onClick={torles}>
            <i className="fa-solid fa-x"></i>
          </span>
          <span onClick={modosit}>
            <i className="fa-regular fa-pen-to-square"></i>
          </span>

        </span>
      </td>
     
      <td style={{ color: "red" }} className="elrejteni">
        {props.elem.oldallink}
      </td>
      <td style={{ color: "red" }} className="elrejteni">
        {props.elem.githublink}
      </td>
      <td onClick={modosit} className="elrejteni">
        <i className="fa-regular fa-pen-to-square"></i>
      </td>
      <td onClick={torles} className="elrejteni">
        <i className="fa-solid fa-x"></i>
      </td>
    </tr>
  );
}
