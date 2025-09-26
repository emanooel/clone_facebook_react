import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Wrapper from './components/wrapper/Wrapper.jsx'
import Header from './components/header/Header.jsx'
import QuickAccess from './components/quickaccess/QuickAccess.jsx'
import IconNotification from './components/iconnotification/IconNotification.jsx'

// ICONES DO QUICK ACCESS
import Casa from './assets/icones/home.svg'
import Amigos from './assets/icones/friends.svg'
import Chat from './assets/icones/chat.svg'
import Reels from './assets/icones/reelds.svg'
import Notification from './assets/icones/notification.svg'
import Loja from './assets/icones/store.svg'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Wrapper>
      <Header/>
      <QuickAccess>
        <IconNotification icone={Casa}/>
        <IconNotification icone={Amigos}/>
        <IconNotification icone={Chat}/>
        <IconNotification icone={Reels}/>
        <IconNotification icone={Notification}/>
        <IconNotification icone={Loja}/>
      </QuickAccess>
      <p>Area de postar - inclui foto de perfil, input para escrever a postagem icone/btn para postar foto</p>
      <p>Storys</p>
      <p>feed</p>
    </Wrapper>
  </StrictMode>,
)
