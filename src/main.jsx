import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Wrapper from './components/wrapper/Wrapper.jsx'
import Header from './components/header/Header.jsx'
import QuickAccess from './components/quickaccess/QuickAccess.jsx'
import IconNotification from './components/iconnotification/IconNotification.jsx'
import FotoPerfil from './components/fotoPerfil/FotoPerfil.jsx'
import InputText from './components/Input/Input.jsx'
import InputStatus from './components/inputstatus/InputStatus.jsx'
import Post from './components/post/Post.jsx'

// ICONES DO QUICK ACCESS
import Casa from './assets/icones/home.svg'
import Amigos from './assets/icones/friends.svg'
import Chat from './assets/icones/chat.svg'
import Reels from './assets/icones/reelds.svg'
import Notification from './assets/icones/notification.svg'
import Loja from './assets/icones/store.svg'
// Foto Perfil
import fotoperfil from './assets/foto/foto_perfil.webp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Wrapper>
      <Header/>
      <QuickAccess>
        <IconNotification icone={Casa} num_notifications={20}/>
        <IconNotification icone={Amigos}/>
        <IconNotification icone={Chat} num_notifications={50}/>
        <IconNotification icone={Reels}/>
        <IconNotification icone={Notification} num_notifications={30}/>
        <IconNotification icone={Loja}/>
      </QuickAccess>
      <div className='flex flex-row justify-around gap-2' style={{margin:"10px 20px"}}>
        <FotoPerfil foto={fotoperfil} status={2}/>
        <InputText placeholder="Poste uma atualização de status"/>
        <button>Upload Foto</button>
      </div>
      <div className='flex flex-row justify-around gap-2'>
        
      </div>
      <Post/>
      <p>Storys</p>
      <p>feed</p>
    </Wrapper>
  </StrictMode>,
)
