import './QuickAccess.css'

export default function QuickAccess({children}){
    return <>
        <div className="flex flex-row justify-around">
            {children}
        </div>
    </>
}

