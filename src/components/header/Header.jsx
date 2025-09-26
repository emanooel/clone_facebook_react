import "./Header.css"
import InputSearch from "../search/InputSearch"
import Menu from "../../assets/icones/menu.svg"
import Button from "../button/Button"
import Logo from "../Logo"

export default function Header(){
    return <>
        <div className="header flex align-center justify-space-between flex-row">
            <Logo/>
            <div className="flex gap-2">
                <InputSearch></InputSearch>
                <Button icon={Menu}/>
            </div>
        </div>
    </>
}