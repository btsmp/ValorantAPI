import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";
import { fetchAgents } from "./utils/fetchAgents";

interface AgentProps {
  displayName: string
  fullPortrait: string
}


export function App() {

  const [agentsToShow, setAgentsToShow] = useState<AgentProps[]>([])

  async function getAgents() {
    const agents = await fetchAgents()
    setAgentsToShow(agents)
  }

  useEffect(() => {
    getAgents()
  }, [])
  return (
    <div className="bg-[#111111] h-screen flex flex-col overflow-y-hidden">
      <Header />
      <div>
        <MainContent agents={agentsToShow} />
      </div>
    </div>
  )
}