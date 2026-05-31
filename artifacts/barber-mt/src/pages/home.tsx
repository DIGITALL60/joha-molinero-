import React from "react";
import { motion } from "framer-motion";
import { Scissors, Clock, MapPin, Instagram, Phone, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import heroImg from "@assets/IMG_2908_1780260666919.png";

const services = [
  { name: "Corte Clásico", price: "$6.000", desc: "Tijera o máquina. Lavado incluido." },
  { name: "Corte & Barba", price: "$9.000", desc: "Servicio completo con toalla caliente." },
  { name: "Solo Barba", price: "$4.000", desc: "Perfilado y cuidado." },
  { name: "Corte Kids", price: "$5.000", desc: "Para los más chicos (hasta 12 años)." },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Home() {
  const handleBooking = () => {
    window.location.href = "https://wa.me/";
  };

  return (
    <div className="bg-background text-foreground min-h-screen selection:bg-primary selection:text-black">
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="font-display text-2xl tracking-wider text-white">BARBER M.T</div>
        <Button onClick={handleBooking} variant="default" className="font-display tracking-widest text-sm rounded-none uppercase">
          Reservar
        </Button>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[100dvh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="Barber M.T Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-primary font-display tracking-[0.2em] mb-4 text-sm md:text-base">
              BARBER M.T · BUENOS AIRES
            </p>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-white leading-[0.85] mb-6 drop-shadow-lg">
              PARA UN BUEN DÍA,<br />
              <span className="text-primary">UN BUEN CORTE.</span>
            </h1>
            <p className="text-gray-300 max-w-xl mx-auto text-lg md:text-xl font-light mb-10">
              Reservá tu turno online en segundos. Sin esperas, sin llamadas.
            </p>
            <Button 
              onClick={handleBooking}
              className="bg-primary hover:bg-primary/90 text-black font-display text-xl px-10 py-7 rounded-none transition-all duration-300 hover:scale-105 uppercase tracking-wider group flex items-center gap-3"
            >
              RESERVAR TURNO
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 md:py-32 px-6 relative bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-16"
          >
            <div>
              <motion.h2 variants={fadeUp} className="font-display text-5xl md:text-7xl mb-6 text-white leading-none">
                NUESTROS<br />SERVICIOS
              </motion.h2>
              <motion.p variants={fadeUp} className="text-gray-400 text-lg mb-8 max-w-md">
                Cortes de precisión, atención al detalle y un ambiente pensado para tu comodidad. Solo trabajamos con los mejores productos.
              </motion.p>
              <motion.div variants={fadeUp}>
                <img src="/images/tools.jpg" alt="Barber Tools" className="w-full aspect-[4/3] object-cover grayscale opacity-80 hover:grayscale-0 transition-all duration-700" />
              </motion.div>
            </div>

            <div className="flex flex-col justify-center space-y-8">
              {services.map((service, idx) => (
                <motion.div 
                  key={idx}
                  variants={fadeUp}
                  className="group cursor-pointer"
                >
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="font-display text-2xl md:text-3xl text-white group-hover:text-primary transition-colors tracking-wide">
                      {service.name}
                    </h3>
                    <div className="flex-grow border-b border-dashed border-gray-700 mx-4 opacity-50 relative top-[-6px]" />
                    <span className="font-display text-xl text-primary">{service.price}</span>
                  </div>
                  <p className="text-gray-400 font-light">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vibe / Gallery Section */}
      <section className="py-24 bg-[#050505] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <motion.div variants={fadeUp} className="col-span-1 md:col-span-2">
              <div className="relative aspect-video overflow-hidden group">
                <img src="/images/interior.jpg" alt="Interior" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-80" />
                <div className="absolute inset-0 border border-primary/20 m-4 pointer-events-none" />
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="col-span-1">
              <div className="relative h-full min-h-[300px] overflow-hidden group">
                <img src="/images/haircut.jpg" alt="Haircut" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                  <h3 className="font-display text-3xl text-white">EL ARTE DEL DETALLE</h3>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Info / Contact Section */}
      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-12"
          >
            <motion.h2 variants={fadeUp} className="font-display text-5xl md:text-7xl text-white">
              LISTO PARA UN CAMBIO?
            </motion.h2>

            <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center space-y-4 p-6 bg-card border border-border/50 hover:border-primary/50 transition-colors">
                <MapPin className="w-8 h-8 text-primary" />
                <h4 className="font-display text-2xl tracking-wide text-white">UBICACIÓN</h4>
                <p className="text-gray-400 text-sm">Buenos Aires, Argentina<br/>(Dirección exacta al reservar)</p>
              </div>

              <div className="flex flex-col items-center space-y-4 p-6 bg-card border border-border/50 hover:border-primary/50 transition-colors">
                <Clock className="w-8 h-8 text-primary" />
                <h4 className="font-display text-2xl tracking-wide text-white">HORARIOS</h4>
                <p className="text-gray-400 text-sm">Mar a Sab: 10:00 - 20:00<br/>Dom y Lun: Cerrado</p>
              </div>

              <a href="https://instagram.com/mtbarbervm" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center space-y-4 p-6 bg-card border border-border/50 hover:border-primary/50 transition-colors group cursor-pointer">
                <Instagram className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                <h4 className="font-display text-2xl tracking-wide text-white">SÍGUENOS</h4>
                <p className="text-gray-400 text-sm">@MTBARBERVM</p>
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="pt-8">
              <Button 
                onClick={handleBooking}
                className="bg-primary hover:bg-primary/90 text-black font-display text-2xl px-12 py-8 rounded-none uppercase tracking-widest w-full md:w-auto"
              >
                RESERVAR AHORA
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-border">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-display text-3xl tracking-widest text-white">BARBER M.T</div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <button onClick={handleBooking} className="hover:text-primary transition-colors flex items-center gap-2">
              <Phone className="w-4 h-4" /> Bot de Reservas
            </button>
            <button onClick={handleBooking} className="hover:text-primary transition-colors flex items-center gap-2">
              <Scissors className="w-4 h-4" /> Atención Barbero (MT)
            </button>
          </div>
          
          <div className="text-gray-600 text-xs uppercase tracking-widest font-light">
            © {new Date().getFullYear()} Barber M.T
          </div>
        </div>
      </footer>
    </div>
  );
}