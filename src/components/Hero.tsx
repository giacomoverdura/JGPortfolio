export default function Hero() {
  return (
    <>
      <section id="Hero">
        <div className="px-5 pt-10">
          <div className="text-white grid grid-cols-5 grid-rows-5 gap-4">
            <div className="row-span-2">
              <img src="./default.webp" alt="image" className="rounded-full w-30" />
            </div>
            <div className="row-span-2">
              <h1>JAMES GULAY</h1>
            </div>
          </div>  
        </div>
      </section>
    </>
  )
}