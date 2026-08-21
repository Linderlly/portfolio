/**
 * Seção de certificados do portfólio
 * Exibe uma grade de cards com certificados, imagens e links para PDF
 * 
 * @component
 * @author Linderlly Santana
 */

import { FaFilePdf, FaExternalLinkAlt } from 'react-icons/fa'
import { useLanguage } from '../context/LanguageContext'

// ===== IMPORTS DOS ARQUIVOS PDF =====
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

// ===== IMPORTS DAS IMAGENS DOS CERTIFICADOS =====
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

/**
 * Dados completos dos certificados
 */
const CERTIFICATES_DATA = [
  {
    id: 1,
    titleKey: 'certificatesData.0.title',
    descriptionKey: 'certificatesData.0.description',
    image: certificado1Img,
    pdf: certificado1
  },
  {
    id: 2,
    titleKey: 'certificatesData.1.title',
    descriptionKey: 'certificatesData.1.description',
    image: certificado2Img,
    pdf: certificado2
  },
  {
    id: 3,
    titleKey: 'certificatesData.2.title',
    descriptionKey: 'certificatesData.2.description',
    image: certificado3Img,
    pdf: certificado3
  },
  {
    id: 4,
    titleKey: 'certificatesData.3.title',
    descriptionKey: 'certificatesData.3.description',
    image: certificado4Img,
    pdf: certificado4
  },
  {
    id: 5,
    titleKey: 'certificatesData.4.title',
    descriptionKey: 'certificatesData.4.description',
    image: C_sharp_basicoImg,
    pdf: C_sharp_basico
  },
  {
    id: 6,
    titleKey: 'certificatesData.5.title',
    descriptionKey: 'certificatesData.5.description',
    image: C_sharp_intermediarioImg,
    pdf: C_sharp_intermediario
  },
  {
    id: 7,
    titleKey: 'certificatesData.6.title',
    descriptionKey: 'certificatesData.6.description',
    image: C_sharp_av1Img,
    pdf: C_sharp_av1
  },
  {
    id: 8,
    titleKey: 'certificatesData.7.title',
    descriptionKey: 'certificatesData.7.description',
    image: C_sharp_av2Img,
    pdf: C_sharp_av2
  },
  {
    id: 9,
    titleKey: 'certificatesData.8.title',
    descriptionKey: 'certificatesData.8.description',
    image: angularImg,
    pdf: angular
  },
  {
    id: 10,
    titleKey: 'certificatesData.9.title',
    descriptionKey: 'certificatesData.9.description',
    image: ionicImg,
    pdf: ionic
  },
  {
    id: 11,
    titleKey: 'certificatesData.10.title',
    descriptionKey: 'certificatesData.10.description',
    image: cordovaImg,
    pdf: cordova
  },
  {
    id: 12,
    titleKey: 'certificatesData.11.title',
    descriptionKey: 'certificatesData.11.description',
    image: ExcelImg,
    pdf: Excel
  },
  {
    id: 13,
    titleKey: 'certificatesData.12.title',
    descriptionKey: 'certificatesData.12.description',
    image: Excel_Av1Img,
    pdf: Excel_Av1
  },
  {
    id: 14,
    titleKey: 'certificatesData.13.title',
    descriptionKey: 'certificatesData.13.description',
    image: Excel_Av2Img,
    pdf: Excel_Av2
  },
  {
    id: 15,
    titleKey: 'certificatesData.14.title',
    descriptionKey: 'certificatesData.14.description',
    image: gamesImg,
    pdf: games
  },
  {
    id: 16,
    titleKey: 'certificatesData.15.title',
    descriptionKey: 'certificatesData.15.description',
    image: IAImg,
    pdf: IA
  },
  {
    id: 17,
    titleKey: 'certificatesData.16.title',
    descriptionKey: 'certificatesData.16.description',
    image: logicaImg,
    pdf: logica
  },
  {
    id: 18,
    titleKey: 'certificatesData.17.title',
    descriptionKey: 'certificatesData.17.description',
    image: manutencao_moveisImg,
    pdf: manutencao_moveis
  },
  {
    id: 19,
    titleKey: 'certificatesData.18.title',
    descriptionKey: 'certificatesData.18.description',
    image: PowerBIImg,
    pdf: PowerBI
  },
  {
    id: 20,
    titleKey: 'certificatesData.19.title',
    descriptionKey: 'certificatesData.19.description',
    image: pythonImg,
    pdf: python
  },
  {
    id: 21,
    titleKey: 'certificatesData.20.title',
    descriptionKey: 'certificatesData.20.description',
    image: SegurancaImg,
    pdf: Seguranca
  },
  {
    id: 22,
    titleKey: 'certificatesData.21.title',
    descriptionKey: 'certificatesData.21.description',
    image: SQLImg,
    pdf: SQL
  },
  {
    id: 23,
    titleKey: 'certificatesData.22.title',
    descriptionKey: 'certificatesData.22.description',
    image: trabalhoEQImg,
    pdf: trabalhoEQ
  },
  {
    id: 24,
    titleKey: 'certificatesData.23.title',
    descriptionKey: 'certificatesData.23.description',
    image: inovatechImg,
    pdf: inovatech
  }
]

/**
 * Componente CertificateCard - Card individual para cada certificado
 */
function CertificateCard({ certificate, t }) {
  return (
    <div
      className="
        bg-white/80 dark:bg-slate-900/70
        backdrop-blur-lg
        border border-slate-200 dark:border-slate-800
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
          alt={`${t(certificate.titleKey)} - Certificado`}
          loading="lazy"
          decoding="async"
          width="800"
          height="600"
          className="
            w-full h-48 md:h-56
            object-cover
            transition-transform duration-700
            hover:scale-110
          "
        />
      </div>

      <div className="p-5 md:p-7 flex flex-col flex-1">
        <h3 className="
          text-lg md:text-2xl font-bold mb-3 md:mb-4
          text-slate-800 dark:text-white
        ">
          {t(certificate.titleKey)}
        </h3>

        <p className="
          text-slate-600 dark:text-gray-400
          leading-6 md:leading-7 text-sm md:text-base flex-1
        ">
          {t(certificate.descriptionKey)}
        </p>

        <div className="flex gap-3 md:gap-4 mt-6 md:mt-8">
          <a
            href={certificate.pdf}
            target="_blank"
            rel="noreferrer"
            className="
              flex-1 flex items-center justify-center gap-2 md:gap-3
              bg-red-500 hover:bg-red-400
              py-2.5 md:py-3 rounded-xl
              font-semibold text-sm md:text-base
              text-white
              transition-all hover:scale-105
            "
          >
            <FaFilePdf />
            {t('certificates.pdf')}
          </a>

          <a
            href={certificate.image}
            target="_blank"
            rel="noreferrer"
            className="
              flex-1 flex items-center justify-center gap-2 md:gap-3
              bg-cyan-500 hover:bg-cyan-400
              py-2.5 md:py-3 rounded-xl
              font-semibold text-sm md:text-base
              text-white
              transition-all hover:scale-105
            "
          >
            <FaExternalLinkAlt />
            {t('certificates.view')}
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Certificates() {
  const { t } = useLanguage()

  return (
    <section 
      id="certificates" 
      className="px-4 md:px-6 py-10 md:py-16"
    >
      <div className="container-custom">
        <h2 className="
          text-center font-bold
          text-3xl md:text-5xl
          mb-8 md:mb-12
          text-slate-900 dark:text-white
        ">
          {t('certificates.title')}
        </h2>

        <div className="
          grid grid-cols-1 md:grid-cols-2
          gap-5 md:gap-8
        ">
          {CERTIFICATES_DATA.map((certificate) => (
            <CertificateCard 
              key={certificate.id} 
              certificate={certificate} 
              t={t}
            />
          ))}
        </div>
      </div>
    </section>
  )
}