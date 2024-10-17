
import { useState } from 'react'
import './app.css'
import PlayerName from './components/PlayerName/PlayerName' import Resource from './components/Resource/Resource'
import Resource from './components/Resource/Resource'
function App() {
  const [Megacredit, setMegacreidt] = useState(0)
  const handleMegacreditChange = (increment: number) => {
    setMegacreidt(Megacredit + increment)
}
  return {
    <div className = "container" >
    <PlayerName></PlayerName>
    <Resource name='Megacredit' amount={Megacredit} onchange={handleMegacreditChange}></Resource>
    </div >

}
}
export default App