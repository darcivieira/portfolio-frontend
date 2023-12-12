import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './style.css';

export default function Home() {
  return (
    <div className="flex-col h-screen w-screen text-white font-semibold">
      <header className="z-20 fixed flex flex-row w-full h-16 bg-cyan-800 items-center space-x-6 pr-4 pl-4">
        <div>
          <h1 className="text-xl font-bold">Backend developer</h1>
        </div>
        <nav className="flex text-white font-semibold justify-end flex-1">
          <ul className="flex flex-row justify-between space-x-4">
            <li>
              <a href="#home">Inicio</a>
            </li>
            <li>
              <a href="#about">Sobre</a>
            </li>
            <li>
              <a href="#projects">Projetos</a>
            </li>
            <li>
              <a href="#contact">Contato</a>
            </li>
          </ul>
        </nav>
        <aside className="flex flex-row flex-4 justify-end space-x-4">
          <a href="">Login</a>
          <a href="">Registrar</a>
        </aside>
      </header>
      <nav className="fixed top-1/3 space-x-10 p-4 rounded-r-lg bg-cyan-800 z-10">
        <ul className="space-y-4">
          <li>
            <a
              href="https://github.com/darcivieira"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={40} className="fill-white" />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/darcivieira"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={40} className="fill-white" />
            </a>
          </li>
        </ul>
      </nav>
      <main className="bg-cyan-100 text-cyan-900 font-semibold">
        <div
          id="home"
          className="h-screen flex flex-col justify-end items-center content-center"
        >
          <div className="mb-40 flex flex-col justify-center">
            <h3 className="text-cyan-950">
              Backend Developer & Network Engineer
            </h3>
            <span className="text-center font-normal text-sm">
              Automizo processos e desenvolvo soluções corporativas.{' '}
            </span>
          </div>
          <div className="w-full h-2/3 p-10 bg-white flex flex-col justify-start items-center content-center relative">
            <div className="rounded-full bg-white p-2 absolute top-[-40px] md:top-[-60px] lg:top-[-140px]">
              <img
                className="inline-block h-20 w-20 rounded-full ring-2 ring-white object-cover md:h-20 md:w-20 lg:h-40 lg:w-40"
                src="/djvjr.png"
                alt=""
              />
            </div>
            <img src="/hero-devices.svg" className="h-full" alt="" />
          </div>
        </div>
        <div
          id="about"
          className="h-screen flex flex-col justify-start items-center content-center"
        >
          <div className="mt-[120px] mb-40 w-1/2">
            <h5 className="font-bold text-center">
              Olá, eu sou o Darci. Prazer em conhecê-lo.
            </h5>
            <p className="text-center font-normal">
              Um desenvolvedor backend, com conhecimento em Python e Nodejs,
              pronto para construir soluções robustas e automatizar seus
              processos. Com mais de 6 anos de experiência atuando neste
              segmento, pude agilizar processos internos e construir uma solução
              para o mercado de seguro garantia, além de buscar me desenvolver
              em soluções front-ends, como React e NextJS.
            </p>
          </div>
          <div className="w-full h-full bg-white flex flex-col items-center relative">
            <div className="h-[600px] w-10/12 absolute bg-white top-[-120px] rounded-xl border-solid border-[1px] border-cyan-200 flex divide-x">
              <div className="w-1/2 flex flex-col items-center justify-start">
                <div className="flex flex-col items-center h-2/6 justify-start mt-10">
                  <div
                    id="image-container"
                    className="relative flex flex-col items-center justify-center overflow-hidden w-10"
                  >
                    <div id="container-wrapper" className="flex animate-slide">
                      <img
                        className="inline-block object-fill w-10"
                        src="/python.svg"
                        alt=""
                      />
                      <img
                        className="inline-block object-fill w-10"
                        src="/django.svg"
                        alt=""
                      />
                      <img
                        className="inline-block object-fill w-10"
                        src="/fastapi.svg"
                        alt=""
                      />
                      <img
                        className="inline-block object-fill w-10"
                        src="/javascript.svg"
                        alt=""
                      />
                      <img
                        className="inline-block object-fill w-10"
                        src="/nodejs.svg"
                        alt=""
                      />
                      <img
                        className="inline-block object-fill w-10"
                        src="/react.svg"
                        alt=""
                      />
                      <img
                        className="inline-block object-fill w-10"
                        src="/postgresql.svg"
                        alt=""
                      />
                      <img
                        className="inline-block object-fill w-10"
                        src="/mongodb.svg"
                        alt=""
                      />
                      <img
                        className="inline-block object-fill w-10"
                        src="/docker.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <h6>Backend Developer</h6>
                  <span className="w-2/3 text-center">
                    Gosto de automatizar processos e desenvolver soluções que
                    possam ajudar pessoas.
                  </span>
                </div>
                <div className="flex flex-col items-center h-1/6">
                  <span className="text-blue-500 font-semibold">
                    Linguagens que uso:
                  </span>
                  <span>Python, Javascript, HTML, CSS, Git</span>
                </div>
                <div className="flex flex-col items-center h-1/6">
                  <span className="text-blue-500 font-semibold">
                    Dev Tools:
                  </span>
                  <span>Django</span>
                  <span>FastAPI</span>
                  <span>Flask</span>
                  <span>Celery</span>
                  <span>NodeJS</span>
                  <span>React</span>
                  <span>Postgres</span>
                  <span>MongoDB</span>
                </div>
              </div>
              <div className="w-1/2 flex flex-col items-center justify-start">
                <div className="flex flex-col items-center h-2/6 justify-start mt-10">
                  <div className="rounded-full bg-cyan-200 p-2">
                    <img
                      className="inline-block object-fill w-10"
                      src="/network.svg"
                      alt=""
                    />
                  </div>
                  <h6>Network Engineer</h6>
                  <span className="w-2/3 text-center">
                    Apoio o crescimento organizacional desenvolvendo
                    infraestruturas escaláveis.
                  </span>
                </div>
                <div className="flex flex-col items-center h-1/6">
                  <span className="text-blue-500 font-semibold">
                    Experiencias com:
                  </span>
                  <span className="w-2/3 text-center">
                    Suporte a usuário, desenvolvimento de estrutura de redes,
                    troubleshooting
                  </span>
                </div>
                <div className="flex flex-col items-center h-1/6">
                  <span className="text-blue-500 font-semibold">
                    Protocolos:
                  </span>
                  <span>Linux e Windows</span>
                  <span>Active Directory e Samba 4</span>
                  <span>DNS</span>
                  <span>DHCP</span>
                  <span>Spanning tree</span>
                  <span>BGP, RIP, OSPF, EIGRP</span>
                  <span>802.1X</span>
                </div>
              </div>
            </div>
            {/* <div className="w-1/2 p-2">
              <h1 className="mb-2 text-xl">Um pouco mais...</h1>
              <div className="border-solid border-2 border-cyan-50 rounded-lg w-full bg-cyan-50 p-4">
                <span className="font-normal text-justify">
                  Sou de Palhoça, Santa Catarina e atuo com tecnologia desde
                  2006. Iniciei minha carreira como montador de equipamento em
                  loja de informática, passei por áreas como apoio e suporte
                  técnico, também pude atuar com administração de redes por mais
                  de 10 anos - o que me permitiu uma proximidade com lógica de
                  programação - e nos últimos 6 anos optei por uma transição de
                  carreira, para desenvolvimento de software, pois pude ser
                  ainda mais eficiente e apoiar outras áreas com o
                  desenvolvimento de automações e criando soluções para o
                  mercado - e isso é o que mais me deixa empolgado com esta
                  área, poder ajudar e melhorar a experiência de outras pessoas.
                </span>
              </div>
            </div>
            <div className="w-1/2 p-2">
              <h1 className="mb-2 text-xl text-center">Minhas habilidades</h1>
              <div className=" rounded-lg w-full">
                <div className="flex flex-row items-center space-x-5">
                  <div className="m-1 border-solid border-2 border-cyan-100 p-1 rounded-xl bg-cyan-100 w-1/3 flex flex-row">
                    <span className="text-center w-full">Python</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                    <div
                      className="bg-cyan-900 h-2 rounded-full"
                      style={{ width: '100%' }}
                    ></div>
                  </div>
                </div>
                <div className="flex flex-row items-center space-x-5">
                  <div className="m-1 border-solid border-2 border-cyan-100 p-1 rounded-xl bg-cyan-100 w-1/3 flex flex-row">
                    <span className="text-center w-full">Django</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                    <div
                      className="bg-cyan-400 h-2 rounded-full"
                      style={{ width: '100%' }}
                    ></div>
                  </div>
                </div>
                <div className="flex flex-row items-center space-x-5">
                  <div className="m-1 border-solid border-2 border-cyan-100 p-1 rounded-xl bg-cyan-100 w-1/3 flex flex-row">
                    <span className="text-center w-full">FastAPI</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                    <div
                      className="bg-cyan-900 h-2 rounded-full"
                      style={{ width: '80%' }}
                    ></div>
                  </div>
                </div>
                <div className="flex flex-row items-center space-x-5">
                  <div className="m-1 border-solid border-2 border-cyan-100 p-1 rounded-xl bg-cyan-100 w-1/3 flex flex-row">
                    <span className="text-center w-full">Celery</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                    <div
                      className="bg-cyan-400 h-2 rounded-full"
                      style={{ width: '70%' }}
                    ></div>
                  </div>
                </div>
                <div className="flex flex-row items-center space-x-5">
                  <div className="m-1 border-solid border-2 border-cyan-100 p-1 rounded-xl bg-cyan-100 w-1/3 flex flex-row">
                    <span className="text-center w-full">JavaScript</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                    <div
                      className="bg-cyan-900 h-2 rounded-full"
                      style={{ width: '85%' }}
                    ></div>
                  </div>
                </div>
                <div className="flex flex-row items-center space-x-5">
                  <div className="m-1 border-solid border-2 border-cyan-100 p-1 rounded-xl bg-cyan-100 w-1/3 flex flex-row">
                    <span className="text-center w-full">Node</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                    <div
                      className="bg-cyan-400 h-2 rounded-full"
                      style={{ width: '85%' }}
                    ></div>
                  </div>
                </div>
                <div className="flex flex-row items-center space-x-5">
                  <div className="m-1 border-solid border-2 border-cyan-100 p-1 rounded-xl bg-cyan-100 w-1/3 flex flex-row">
                    <span className="text-center w-full">React</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                    <div
                      className="bg-cyan-900 h-2 rounded-full"
                      style={{ width: '50%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div
          id="projects"
          className="h-screen flex flex-row justify-center items-center content-center"
        >
          <h1>Projects</h1>
          <button className="btn-blue">Olá</button>
        </div>
        <div
          id="contact"
          className="h-screen flex flex-row justify-center items-center content-center bg-white"
        >
          Contact
        </div>
      </main>
      <footer className="h-60 bg-cyan-950">Rodapé</footer>
    </div>
  );
}
