interface AgentProps {
  key: string
  name: string
  img: string
  bgcolor:string[]
}



export function CardAgent(props: AgentProps) {

  const { name, img, bgcolor } = props

  return (
    // tentei colocar uma cor no background mas desse jeito não funcionou 
    <div style={{background: `linear-gradient(#${bgcolor[0]}, #${bgcolor[1]})`}} className={`flex flex-col lg:flex-row items-center justify-center pt-32 lg:pt-0`}>
      <h1 className="font-semibold text-white font-agent uppercase p-3 text-5xl lg:text-9xl">{name}</h1>
      <img className="w-full h-auto lg:h-[850px] lg:w-auto" src={img} alt={`Imagem de ${name} `} />
    </div>
  )


}