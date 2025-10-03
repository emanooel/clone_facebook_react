import Badge from "../badge/Badge";

export default function IconNotification({ icone, num_notifications }) {
  
  let estilo = {
    width: "24px",
  };

  return (
    <>
    <div style={{position:"relative"}}>
        <img src={icone} alt="" style={estilo} />
        <Badge notifications={num_notifications}/>
    </div>
    </>
  );
}
