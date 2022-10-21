export function Header() {
  return (
    <header className="bg-[#111111] py-5 px-1">
      <div className="container flex items-center justify-between mx-auto">
        <h1 className="text-white text-3xl font-valorant">vAlorant<span className="text-[#FF4654]">API</span></h1>
        <h1 className="text-white text-sm font-valorant" >Powered by <a className="text-[#FF4654] hover:brightness-95 hover:font-bold" href="https://www.linkedin.com/in/brunosmp/">brunosAMpAio</a></h1>
      </div>
    </header>
  )
}