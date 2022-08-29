import "./style.css"

export function Footer(props) {
  return (
    <>
      <footer className=" bg-black px-10 pb-5">
        <h1 className="font-extrabold text-cyan-400 text-center bg-black py-4 text-3xl">
          Sobre mim
        </h1>
        <section className="flex">
          <article className="w-1/3 text-white pl-5">
            <h2 className="font-extrabold text-lime-500 text-center">
              SoftSkills
            </h2>
            <ul className="mt-5 flex justify-around">
              <div className="flex flex-col gap-2">
                <li>- Inteligência emocional.</li>
                <li>- Resolução de problemas.</li>
                <li>- Pensamento Crítico.</li>
                <li>- Tomada de decisão.</li>
              </div>
              <div className="flex flex-col gap-2">
                <li>- Criatividade.</li>
                <li>- Organização.</li>
                <li>- Comunicação.</li>
                <li>- Flexibilidade.</li>
              </div>
            </ul>
          </article>

          <article className="text-white border-x-2 border-orange-500 w-1/3 h-[410px] pl-5">
            <h2 className="font-extrabold text-lime-500 text-center"></h2>
            <p className="text-white pr-5 mt- text-justify">
              Desde criança sempre fui muito ligado a tecnologia, acompanhei
              grande parte de seu avanço, principalmente com internet e jogos,
              onde sempre estava conectado. Após anos atuando na administração,
              percebi a importância da tecnologia para área e como ela era uma
              grande aliada minha, me ajudando a obter excelentes resultados.
              Então resolvi aprender mais sobre, e neste caminho acabei me
              apaixonando ainda mais por ela e aquela paixão de criança por
              jogos e internet, hoje virou também minha paixão profissional.
              Aquela mesma satisfação em finalizar um jogo ou aprender algo novo
              na internet, agora está presente também ao finalizar, iniciar e
              desenvolver um projeto, automatizar alguma tarefa ou resolvendo
              algum problema usando a tecnologia. Atualmente, trabalho como
              desenvolvedor Front-end.
            </p>
          </article>

          <article className="articleRigth">
            <h2 className="titleArticleRigth">
              HardSkills
            </h2>
            <ul className="ulRigth">
              <div className="divRigth">
                <li>- React.js.</li>
                <li>- Node.js.</li>
                <li>- Git.</li>
              </div>
              <div className="divRigth">
                <li>- JavaScript.</li>
                <li>- HTML.</li>
                <li>- CSS.</li>
              </div>
              <div className="divRigth">
                <li>- Vue.js.</li>
                <li>- TailwindCSS.</li>
                <li>- SQL.</li>
              </div>
            </ul>
          </article>
        </section>
      </footer>
    </>
  );
}
