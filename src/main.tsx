import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import {JournalApp} from "./journal-app.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <JournalApp></JournalApp>
    </React.StrictMode>,
)
