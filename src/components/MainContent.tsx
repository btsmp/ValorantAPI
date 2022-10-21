import { useState, useEffect } from "react"
import { fetchAgents } from "../utils/fetchAgents"
import { CardAgent } from "./CardAgents"

interface AgentProps {
  uuid: string
  displayName: string
  fullPortrait: string
  backgroundGradientColors: string[]
}


export function MainContent(props: any) {

  const { agents } = props

  return (
    <main className="grid grid-flow-col overflow-y-hidden snap-x snap-mandatory scroll-smooth style-scroll">
      {agents.map((agent: AgentProps, index: number) => {
        return (
          <div className="w-screen snap-center">
            <CardAgent key={agent.uuid} name={agent.displayName} img={agent.fullPortrait} bgcolor={agent.backgroundGradientColors}/>
          </div>
        )
      })}
    </main>
  )


}