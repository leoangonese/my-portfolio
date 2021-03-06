const Hero = () => {
  return (
    <main className="h-screen w-full flex items-center">
      <section className="w-1/2">
        <h1 className="text-5xl mb-2 main-title text-primary">
          Leonardo Angonese
        </h1>
        <h2 className="text-4xl font-light">Front-End Developer</h2>
      </section>
      <figure className="w-1/2 h-full flex items-center justify-center">
        <img src="./assets/figures/hero.png" alt="" />
      </figure>
    </main>
  )
}

export default Hero
