import React from 'react';
import { HiLocationMarker } from 'react-icons/hi';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import hero from '/src/assets/images/hero-image.png';
import { HoverEffectCard, Card, Card2, Card3, Form1 } from '../../components/ui/card';
import { MdSchool } from "react-icons/md";
import { useTranslation } from "react-i18next";

function Inicio(){

  const { t, i18n } = useTranslation("inicio");

  return (
    <>
    <section className="relative h-screen flex flex-col items-center justify-center text-center text-white">
      <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <video
          className="min-w-full min-h-full absolute object-cover"
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
          type="video/mp4"
          autoPlay
          muted
          loop
        ></video>
        <div className="absolute w-full h-full bg-black opacity-60"></div>
      </div>
      <div className="video-content space-y-2 z-10">
        <h1 className="font-light text-6xl">Arenas Martinez</h1>
        <h3 className="font-light text-3xl">& Asociados</h3>
      </div>
    </section>

    <section className="mt-10 px-5 sm:px-20">
      <div className='flex flex-col md:flex-row gap-5'>
        <Card
          colorBg="white"
          colorCi="green"
          icon={<MdSchool color='white' style={{height:50}}/>}
          title={t("intro.education.title")} 
          content={t("intro.education.description")} 
        />
        <Card
          colorBg="white"
          colorCi="white"
          icon={<MdSchool />} 
          title={t("intro.partnerships.title")}
          content={t("intro.partnerships.description")}
        />
        <Card
          colorBg="white"
          colorCi="white"
          icon={<MdSchool />} 
          title={t("intro.certification.title")} 
          content={t("intro.certification.description")} 
        />
        <Card
          colorBg="white"
          colorCi="white"
          icon={<MdSchool />} 
          title={t("intro.validity.title")} 
          content={t("intro.validity.description")}
        />
      </div>
      
    </section>
    </>
  )
}
export default Inicio