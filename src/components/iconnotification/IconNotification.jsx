export default function IconNotification({ icone }) {
  
  let estilo = {
    width: "24px",
  };

  return (
    <>
      <img src={icone} alt="" style={estilo} />
    </>
  );
}
