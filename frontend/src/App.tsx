import React from "react"
import Card from "./componentes/Card"
import Header from "./componentes/Header"
import NoficationButton from "./componentes/NotificationButton"

function App() {
  return (
    <>
      <Header/>
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <Card/>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
