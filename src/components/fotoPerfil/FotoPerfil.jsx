export default function FotoPerfil({status=0, foto}){
    
    function returnColor(){
        let cor = ""
        if (status == 1){
            //Vamos escrever uma lógica para renderizar diferentes cores dependendo do numero do status passado..
            cor = "green"
        }else if(status == 2){
            cor = "#ff9c00" //aplique diferentes cores para este status e o status abaixo.
        }else if(status == 3){
            cor = "red"
        }else{
            cor = "transparent"
        }

        return cor
    }

    return<>
        <div style={{position:"relative", backgroundImage:`url(${foto})`, backgroundSize:"cover", width:"48px", height:"48px", borderRadius:"50%"}}>
            <div style={{position:"absolute", right:"0", bottom:"0", backgroundColor:`${returnColor()}`, width:"10px", height:"10px", borderRadius:"50%"}}></div>
        </div>
    </>
}