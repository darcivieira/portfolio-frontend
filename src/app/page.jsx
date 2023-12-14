'use client';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './style.css';
import { useState } from 'react';

export default function Home() {
  const [modal, setModal] = useState(null);

  const handleClick = (e) => {
    setModal(e);
  };
  return (
    <div className="flex-col h-screen w-screen text-white text-sm">
      {/* <header className="z-20 fixed flex flex-row w-full h-16 bg-cyan-800 items-center space-x-6 pr-4 pl-4">
        <div>
          <h1 className="text-xl font-bold">Backend developer</h1>
        </div>
        <nav className="flex text-white font-semibold justify-end flex-1">
          <ul className="flex flex-row justify-between space-x-4 list-none">
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
        <aside className="flex flex-row flex-4 justify-end space-x-4 flex-1">
          <a href="">Login</a>
          <a href="">Registrar</a>
        </aside>
      </header> */}
      <nav className="fixed top-1/3 space-x-10 p-4 rounded-r-lg bg-cyan-800 z-10">
        <ul className="space-y-4 list-none">
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
      <main className="bg-cyan-100 text-cyan-900">
        <div
          id="home"
          className="h-screen flex flex-col justify-end items-center content-center"
        >
          <div className="mb-40 flex flex-col justify-center">
            <h3 className="text-cyan-950">
              Backend Developer & Network Engineer
            </h3>
            <span className="text-center font-normal text-sm">
              Automatizo processos e desenvolvo soluções corporativas.{' '}
            </span>
          </div>
          <div className="w-full h-4/6 bg-white flex flex-col justify-start items-center content-center relative">
            <div className="rounded-full bg-white p-2 absolute top-[-40px] md:top-[-50px] lg:top-[-140px]">
              <img
                className="inline-block h-20 w-20 rounded-full ring-2 ring-white object-cover md:h-20 md:w-20 lg:h-40 lg:w-40"
                src="/djvjr.png"
                alt=""
              />
            </div>
            <div className="static h-full w-full">
              <img
                src="/hero-devices.svg"
                className="object-scale-down w-full h-full"
                alt=""
              />
            </div>
          </div>
        </div>
        <div
          id="about"
          className="min-h-screen flex flex-col justify-start items-center content-center"
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
          <div className="w-full h-full bg-white flex flex-col items-center">
            <div className="relative flex flex-col items-center w-full h-[600px]">
              <div className="h-[600px] w-10/12 absolute bg-white top-[-120px] rounded-xl border-solid border-[1px] border-cyan-200 flex divide-x">
                <div className="w-1/2 flex flex-col items-center justify-start">
                  <div className="flex flex-col items-center h-2/6 justify-start mt-10">
                    <div
                      id="image-container"
                      className="relative flex flex-col items-center justify-center overflow-hidden w-10"
                    >
                      <div
                        id="container-wrapper"
                        className="flex animate-slide"
                      >
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
            </div>
          </div>
        </div>
        <div
          id="projects"
          className="flex flex-col justify-center items-center content-center space-y-2 p-10"
        >
          <h4 className="text-center font-bold mb-4">Ultimas experiências</h4>
          <div className="w-10/12 flex flex-row space-x-2">
            <div
              onClick={() => handleClick('backend')}
              className="w-6/12  bg-cyan-600 hover:bg-cyan-500 border-solid border-[1px] border-cyan-200 rounded-xl p-4 flex flex-col space-y-4 items-center shadow-lg active:shadow-sm active:translate-y-[4px] active:scale-95 active:ease-in-out active:duration-200 cursor-pointer select-none"
            >
              <img src="/panteu.png" className="w-40" alt="" />
              <h6 className="text-center">Desenvolvedor Backend</h6>
              <span>Descrição</span>
            </div>
            <div
              onClick={() => handleClick('devops')}
              className="w-6/12  bg-cyan-600 hover:bg-cyan-500 border-solid border-[1px] border-cyan-200 rounded-xl p-4 flex flex-col space-y-4 items-center shadow-lg active:shadow-sm active:translate-y-[4px] active:scale-95 active:ease-in-out active:duration-200 cursor-pointer select-none"
            >
              <img src="/involves.svg" className="w-40" alt="" />
              <h6>DevOps Analyst</h6>
              <span>Descrição</span>
            </div>
            <div
              onClick={() => handleClick('network')}
              className="w-6/12  bg-cyan-600 hover:bg-cyan-500 border-solid border-[1px] border-cyan-200 rounded-xl p-4 flex flex-col space-y-4 items-center shadow-lg active:shadow-sm active:translate-y-[4px] active:scale-95 active:ease-in-out active:duration-200 cursor-pointer select-none"
            >
              <img src="/involves.svg" className="w-40" alt="" />
              <h6>Network engineer</h6>
              <span>Descrição</span>
            </div>
          </div>
          {modal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      {modal === 'backend' && (
                        <h6>Panteu Tecnologia - Desenvolvedor Backend</h6>
                      )}
                      {modal === 'devops' && <h6>Involves - DevOps Analyst</h6>}
                      {modal === 'network' && (
                        <h6>Involves - Network engineer</h6>
                      )}
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-20 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => handleClick(null)}
                      >
                        <span className="bg-transparent text-black opacity-95 font-bold h-6 w-6 text-2xl block outline-none focus:outline-none">
                          x
                        </span>
                      </button>
                    </div>
                    <div className="relative p-6 text-sm flex-auto mb-4">
                      {modal === 'backend' && (
                        <>
                          <span className="my-4 text-blueGray-500 text-normal font-normal leading-relaxed">
                            Construção de uma nova solução de mercado:
                          </span>
                          <ul>
                            <li>
                              Atuei no levantamento de requisitos para
                              construção de uma solução viável de mercado.
                            </li>
                            <li>
                              Implementei as pipelines que automatizam os
                              processos de CI/CD da aplicação.
                            </li>
                            <li>
                              Liderei o desenvolvimento da principal estrutura
                              de back-end.
                            </li>
                            <li>
                              Apoiei no desenvolvimento do micro serviço
                              responsável pelas notificações do sistema.
                            </li>
                            <li>
                              Atuei intensamente no desenvolvimento do micro
                              serviço responsável pela integração com as APIs
                              das maiores seguradoras do Brasil.
                            </li>
                            <li>
                              Trabalhei na criação de um micro serviço que
                              permitia a interação do sistema com um bot coleta
                              de processos via Web Scraping.
                            </li>
                            <li>
                              Atuei na integração entre frontend e backend da
                              aplicação.
                            </li>
                          </ul>
                          <br />
                          <span className="my-4 text-blueGray-500 text-normal font-normal leading-relaxed">
                            Principais tecnologias utilizadas:
                          </span>
                          <ul>
                            <li>
                              Python: Celery, Django, FastApi, Flask,
                              SQLAlchemy, pymongo
                            </li>
                            <li>Javascript: Node.js</li>
                            <li>Database: PostgreSQL, MongoDB</li>
                          </ul>
                        </>
                      )}
                      {modal === 'devops' && (
                        <>
                          <span className="my-4 text-blueGray-500 text-normal leading-relaxed font-semibold">
                            Automação dos processos:
                          </span>
                          <ul>
                            <li>
                              Integrei as plataformas AWS e GitHub a um sistema
                              de gestão de acesso desenvolvido internamente.
                            </li>
                            <li>
                              Desenvolvi um chatbot para interagir com a solução
                              Vault, para facilitar na pesquisa por credenciais
                              de acesso compartilhadas e individuais.
                            </li>
                            <li>
                              Implementei um script para gestão das credenciais
                              de acesso a VPN
                            </li>
                          </ul>
                          <br />
                          <span className="my-4 text-blueGray-500 text-normal font-semibold leading-relaxed">
                            Criação de dashboard de monitoramento:
                          </span>
                          <ul>
                            <li>
                              Atuei no levantamento dos novos indicadores e no
                              desenvolvimento das dashboards.
                            </li>
                          </ul>
                          <br />
                          <span className="my-4 text-blueGray-500 text-normal font-semibold leading-relaxed">
                            Apoio ao time de desenvolvimento:
                          </span>
                          <ul>
                            <li>
                              Apoiei o time de desenvolvimento referente a
                              utilização da infraestrutura.
                            </li>
                          </ul>
                          <br />
                          <span className="my-4 text-blueGray-500 text-normal font-semibold leading-relaxed">
                            Principais tecnologias utilizadas:
                          </span>
                          <ul>
                            <li>Python: Django, Flask</li>
                            <li>Database: PostgreSQL, MongoDB</li>
                            <li>Monitoramento: Zabbix, Prometheus, Grafana</li>
                          </ul>
                        </>
                      )}
                      {modal === 'network' && (
                        <>
                          <span className="my-4 text-blueGray-500 text-normal font-semibold leading-relaxed">
                            Automação de processos:
                          </span>
                          <ul>
                            <li>
                              Integrei ao ERP uma solução que desenvolvi e que
                              permitiu a gestão de acessos a outras plataformas
                              adquiridas pela empresa
                            </li>
                            <li>
                              Implementei um chatbot para acompanhar o processo
                              de novas contratações da empresa e disponibilizar
                              a relação de novos colaboradores.
                            </li>
                            <li>
                              Desenvolvi um dashboard em React para visualizar a
                              utilização do sistema de VPN pelos colaboradores
                              da empresa.
                            </li>
                            <li>
                              Desenvolvi um script que gerava relatórios mensais
                              da utilização do sistema telefônico e encaminha as
                              lideranças de cada área.
                            </li>
                            <li>
                              Desenvolvi solução com um frontend em React, que
                              permitia agendar notificações e realizar os
                              disparos pelos principais canais utilizados da
                              empresa.
                            </li>
                            <li>
                              Desenvolvi um chatbot que permitisse manipular a
                              estrutura de redes, como por exemplo a de
                              atualizar portas dos switches.
                            </li>
                          </ul>
                          <br />
                          <span className="my-4 text-blueGray-500 text-normal font-semibold leading-relaxed">
                            Construção de uma estrutura de redes escalável:
                          </span>
                          <ul>
                            <li>
                              Atuei intensamente na elaboração de uma estrutura
                              de rede que diminuísse os gargalos proveniente ao
                              crescimento que a empresa vinha tendo.
                            </li>
                            <li>
                              Atuei na implantação de novas soluções que
                              permitissem esse crescimento: aquisição e
                              implantação de switches, aquisição e implantação
                              Firewall e implantação do protocolo 802.1X.
                            </li>
                            <li>
                              Atuei na implantação de sistemas de monitoramento
                              da rede.
                            </li>
                          </ul>
                          <br />
                          <span className="my-4 text-blueGray-500 text-normal font-semibold leading-relaxed">
                            Apoio aos colaboradores:
                          </span>
                          <ul>
                            <li>
                              Prestei suporte ao time referente a utilização da
                              infraestrutura.
                            </li>
                          </ul>
                          <br />
                          <span className="my-4 text-blueGray-500 text-normal font-semibold leading-relaxed">
                            Principais tecnologias utilizadas:
                          </span>
                          <ul>
                            <li>Python: Django, Flask</li>
                            <li>Javascript: Node.js, React.js</li>
                            <li>Database: PostgreSQL, MongoDB</li>
                            <li>Monitoramento: Zabbix</li>
                          </ul>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
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
