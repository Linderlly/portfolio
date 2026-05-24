import certificado1 from '../assets/certificates/certificado1.pdf'
import certificado2 from '../assets/certificates/certificado2.pdf'
import certificado3 from '../assets/certificates/certificado3.pdf'
import certificado4 from '../assets/certificates/certificado4.pdf'
import angular from '../assets/certificates/angular.pdf'
import ionic from '../assets/certificates/ionic.pdf'
import cordova from '../assets/certificates/cordova.pdf'
import C_sharp_basico from '../assets/certificates/C_sharp_basico.pdf'
import C_sharp_intermediario from '../assets/certificates/C_sharp_intermediario.pdf'
import C_sharp_av1 from '../assets/certificates/C_sharp_av1.pdf'
import C_sharp_av2 from '../assets/certificates/C_sharp_av2.pdf'
import Excel from '../assets/certificates/excel.pdf'
import Excel_Av1 from '../assets/certificates/Excel_Av1.pdf'
import Excel_Av2 from '../assets/certificates/Excel_Av2.pdf'
import games from '../assets/certificates/games.pdf'
import IA from '../assets/certificates/IA.pdf'
import logica from '../assets/certificates/logica.pdf'
import manutencao_moveis from '../assets/certificates/manutencao_moveis.pdf'
import PowerBI from '../assets/certificates/PowerBI.pdf'
import python from '../assets/certificates/python.pdf'
import Seguranca from '../assets/certificates/Seguranca.pdf'
import SQL from '../assets/certificates/SQL.pdf'
import trabalhoEQ from '../assets/certificates/trabalhoEQ.pdf'
import inovatech from '../assets/certificates/inovatech.pdf'

import certificado1Img from '../assets/images/certificado1.png'
import certificado2Img from '../assets/images/certificado2.png'
import certificado3Img from '../assets/images/certificado3.png'
import certificado4Img from '../assets/images/certificado4.png'
import angularImg from '../assets/images/angular.png'
import ionicImg from '../assets/images/ionic.png'
import cordovaImg from '../assets/images/cordova.png'
import C_sharp_basicoImg from '../assets/images/C_sharp_basico.png'
import C_sharp_intermediarioImg from '../assets/images/C_sharp_intermediario.png'
import C_sharp_av1Img from '../assets/images/C_sharp_av1.png'
import C_sharp_av2Img from '../assets/images/C_sharp_av2.png'
import ExcelImg from '../assets/images/excel.png'
import Excel_Av1Img from '../assets/images/Excel_Av1.png'
import Excel_Av2Img from '../assets/images/Excel_Av2.png'
import gamesImg from '../assets/images/games.png'
import IAImg from '../assets/images/IA.png'
import logicaImg from '../assets/images/logica.png'
import manutencao_moveisImg from '../assets/images/manutencao_moveis.png'
import PowerBIImg from '../assets/images/PowerBI.png'
import pythonImg from '../assets/images/python.png'
import SegurancaImg from '../assets/images/Seguranca.png'
import SQLImg from '../assets/images/SQL.png'
import trabalhoEQImg from '../assets/images/trabalhoEQ.png'
import inovatechImg from '../assets/images/inovatech.png'

import { FaFilePdf, FaExternalLinkAlt } from 'react-icons/fa'

const certificates = [
  { title: 'Programação de sistemas da informação', description: 'Programação I e Modelagem de sistemas', image: certificado1Img, pdf: certificado1 },
  { title: 'Gerência de projetos de T.I', description: 'Medidas de esforço de desenvolvimento de Software e Gestão de projetos para T.I', image: certificado2Img, pdf: certificado2 },
  { title: 'Direitos e Privacidade dos usuários', description: 'Gestão de segurança da informação e Linhas de produtos de Software', image: certificado3Img, pdf: certificado3 },
  { title: 'Aplicação melhorada contínua', description: 'Modelagem de dados, Modelagem de Sistemas e Métodos Ágeis', image: certificado4Img, pdf: certificado4 },
  { title: 'C# básico', description: 'C-Sharp básico, tipos de dados, estruturas de controle, funções e arrays', image: C_sharp_basicoImg, pdf: C_sharp_basico },
  { title: 'C# Intermediário', description: 'C-Sharp intermediário, orientação a objetos, bancos de dados e desenvolvimento de aplicações', image: C_sharp_intermediarioImg, pdf: C_sharp_intermediario },
  { title: 'C# Avançado I', description: 'C-Sharp avançado, programação funcional, design patterns e arquitetura de software', image: C_sharp_av1Img, pdf: C_sharp_av1 },
  { title: 'C# Avançado II', description: 'C-Sharp avançado II, desenvolvimento de aplicações web e integração com serviços', image: C_sharp_av2Img, pdf: C_sharp_av2 },
  { title: 'Angular', description: 'Angular, TypeScript e desenvolvimento de aplicações web', image: angularImg, pdf: angular },
  { title: 'Ionic', description: 'Ionic, TypeScript e desenvolvimento de aplicações móveis', image: ionicImg, pdf: ionic },
  { title: 'Cordova', description: 'Cordova, TypeScript e desenvolvimento de aplicações móveis', image: cordovaImg, pdf: cordova },
  { title: 'Excel', description: 'Excel, fórmulas, funções e análise de dados', image: ExcelImg, pdf: Excel },
  { title: 'Excel Avançado I', description: 'Excel avançado, tabelas dinâmicas, gráficos e análise de dados avançada', image: Excel_Av1Img, pdf: Excel_Av1 },
  { title: 'Excel Avançado II', description: 'Excel avançado II, análise de dados e automação com VBA', image: Excel_Av2Img, pdf: Excel_Av2 },
  { title: 'Desenvolvimento de Games', description: 'Desenvolvimento de Games 2D com Construct 3', image: gamesImg, pdf: games },
  { title: 'Inteligência Artificial', description: 'Inteligencia Artificial, prompts, criação de imagens e vídeos com IA', image: IAImg, pdf: IA },
  { title: 'Lógica de Programação', description: 'Lógica de Programação, algoritmos, estruturas de dados e resolução de problemas', image: logicaImg, pdf: logica },
  { title: 'Manutenção de Dispositivos Móveis', description: 'Manutencão de Dispositivos Móveis, diagnóstico, reparo e manutenção de smartphones e tablets', image: manutencao_moveisImg, pdf: manutencao_moveis },
  { title: 'Power BI', description: 'Power BI, análise de dados, visualização e criação de dashboards', image: PowerBIImg, pdf: PowerBI },
  { title: 'Python', description: 'Python, programação básica, bibliotecas e desenvolvimento de aplicações', image: pythonImg, pdf: python },
  { title: 'Segurança na Era Digital', description: 'Segurança na Era Digital, ameaças cibernéticas, proteção de dados e melhores práticas de segurança', image: SegurancaImg, pdf: Seguranca },
  { title: 'Banco de Dados SQL', description: 'Banco de Dados SQL, modelagem de dados, consultas e administração de bancos de dados', image: SQLImg, pdf: SQL },
  { title: 'Trabalho em Equipe', description: 'Trabalho em Equipe, comunicação, colaboração e gestão de conflitos', image: trabalhoEQImg, pdf: trabalhoEQ },
  { title: 'Inovatech Fametro', description: 'Participação no Inovatech Fametro Manaus, evento de inovação e tecnologia', image: inovatechImg, pdf: inovatech }
]

export default function Certificates() {
  return (
    <section id="certificates" className="py-12 md:py-20 px-4 md:px-6">
      <div className="container-custom">
        <h2 className="
          text-3xl md:text-5xl
          font-bold text-center
          mb-10 md:mb-16
        ">
          Certificados
        </h2>

        <div className="
          grid grid-cols-1 md:grid-cols-2
          gap-5 md:gap-8
        ">
          {certificates.map((certificate, index) => (
            <div
              key={index}
              className="
                bg-slate-900/70 backdrop-blur-lg
                border border-slate-800
                rounded-3xl overflow-hidden
                hover:border-cyan-400
                hover:-translate-y-2
                hover:shadow-2xl hover:shadow-cyan-500/10
                transition-all duration-500
                flex flex-col
              "
            >
              <div className="overflow-hidden">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="
                    h-44 md:h-56
                    w-full object-cover
                    hover:scale-105
                    transition-transform duration-700
                  "
                />
              </div>

              <div className="p-5 md:p-7 flex flex-col flex-1">
                <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4">
                  {certificate.title}
                </h3>

                <p className="text-gray-400 leading-6 md:leading-7 text-sm md:text-base flex-1">
                  {certificate.description}
                </p>

                <div className="flex gap-3 md:gap-4 mt-6 md:mt-8">
                  <a
                    href={certificate.pdf}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex-1 flex items-center justify-center gap-2 md:gap-3
                      bg-red-500 hover:bg-red-400
                      py-2.5 md:py-3
                      rounded-xl
                      font-semibold text-sm md:text-base
                      transition-all
                    "
                  >
                    <FaFilePdf />
                    PDF
                  </a>

                  <a
                    href={certificate.image}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex-1 flex items-center justify-center gap-2 md:gap-3
                      bg-cyan-500 hover:bg-cyan-400
                      py-2.5 md:py-3
                      rounded-xl
                      font-semibold text-sm md:text-base
                      transition-all
                    "
                  >
                    <FaExternalLinkAlt />
                    Visualizar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}