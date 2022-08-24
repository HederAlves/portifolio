export function Footer(props) {
  return (
    <>
      <footer className=" bg-black px-10 pb-5" >
      <h1 className="font-extrabold text-cyan-400 text-center bg-black py-4 text-3xl">Sobre Mim</h1>
        <section className="flex">
        <p className="text-white w-1/3 pr-5">
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries.
        </p>
        <div className="border-x-2 border-orange-500 h-[150px] w-1/3">
        <p className="text-white px-5">
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s.
          </p>
        </div>
        <p className="text-white w-1/3 pl-5">
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries.
        </p></section>

      </footer>
    </>
  );
}
