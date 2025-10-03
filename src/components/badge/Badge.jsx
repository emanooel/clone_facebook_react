import "./Badge.css";

export default function Badge({ notifications = 0 }) {
  function renderBadge(){
    if(notifications != 0){
        return <>
            <div className="bg-red-500 rounded flex justify-center text-white font-sm" style={{width:"16px", height:"16px", position:"absolute", top:0,right:0}}>{notifications}</div>
        </>
    }
    return null;
  }
  return (
    <>
      {renderBadge()}
    </>
  );
}
