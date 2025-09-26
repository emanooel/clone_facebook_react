import SearchIcon from '../../assets/icones/search.svg'
import Button from '../button/Button'
import InputText from '../Input/Input'
import "./InputSearch.css"

export default function InputSearch(){
    return <>
        <InputText placeholder="Pesquisar..."/>
        <Button icon={SearchIcon}/>
    </>
    
}