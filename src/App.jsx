import { useEffect } from 'react'
import '@n8n/chat/style.css'
import { createChat } from '@n8n/chat'
import './App.css'

function App() {

  useEffect(() => {
    createChat({
			webhookUrl: 'http://localhost:5678/webhook/f7619305-8108-4de3-b446-ba5d015854bf/chat',
      mode: 'window',
      
		});
  }, [])

  return (
    <div id="chat"></div>
  )
}

export default App
