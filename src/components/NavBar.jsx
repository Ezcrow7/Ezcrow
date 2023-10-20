

const NavBar = () => {
  return (
    <div className="w-full px-5 bg-transparent border-b">
      <div className="app-container py-2 flex justify-between items-center">
        <a href="/" className="">
          <img src="/assets/logo/ezcrow-logo.png" alt="Ezcrow Logo" className="h-10 sm:h-[3.2rem]" />
        </a>

        <button className="px-4 py-2 border-2 border-ezcrow-950 text-sm">Connect Wallet</button>
      </div>
    </div>
  )
}

export default NavBar