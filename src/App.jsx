import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Linkedin, Mail, Phone } from 'lucide-react';

// Header Component
const Header = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('about');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Logo */}
      <motion.img
        src="/src/assets/image_1_-removebg-preview.png"
        alt="Best Food for All"
        className="w-36 mx-auto pt-8"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
      />

      {/* Content Section */}
      <motion.div
        className="flex flex-col justify-center items-center mt-8 shadow-black rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1.2 }}
      >
        <div className="relative mx-4 w-max-10/12">
          <img
            src="/src/assets/bfa-6.svg"
            alt=""
            className="w-full rounded-lg h-[400px]"
          />
          <div className="absolute inset-0 bg-black/50 rounded-lg p-6 flex flex-col items-center justify-center">
            <p className="text-white text-center text-lg max-w-2xl">
              Creemos en un mundo donde todos tengan acceso a alimentos nutritivos 
              y de calidad. En BFFA, ofrecemos oportunidades de empleo a miembros 
              de las comunidades donde operamos, fomentando el crecimiento y el 
              desarrollo.
            </p>
            <motion.button
              className="mt-8 bg-orange-500 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow"
              onClick={scrollToNextSection}
              whileHover={{ scale: 1.05, backgroundColor: "#ffffff", color: "#f97316" }}
              whileTap={{ scale: 0.95 }}
            >
              Conoce más
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// About Component
const Card = ({ img, text, delay }) => (
  <motion.div
    className="relative overflow-hidden rounded-lg mb-4"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
  >
    <img 
      src={img} 
      alt="" 
      className="w-full h-48 object-cover"
    />
    <div className="absolute inset-0 bg-black/50 p-4 flex items-center">
      <p className="text-white text-center w-full">{text}</p>
    </div>
  </motion.div>
);

const About = () => {
  const cards = [
    {
      img: "src/assets/bfa-2.png",
      text: "Sabores de tu tierra: nutrición para la vida. Recetas que reflejan el color y los ingredientes locales, creando alternativas saludables que reflejan la riqueza cultural de cada región. (Desde 2006)"
    },
    {
      img: "src/assets/bfa1.png",
      text: "Juntos construimos un futuro mejor. Al emplear a personas de nuestras comunidades, invertimos en su futuro y en el de todos. (Desde 2010)"
    },
    {
      img: "src/assets/bfa-3.png",
      text: "Por cada tres platillos vendidos, uno llega para favorecer a sectores comunitarios que lo necesitan. Sin cargos extra, unidos hacia una mejor vida.    (Desde 2011)"
    }
  ];

  return (
    <div id="about" className="min-h-screen py-16 ">
      <hr className='w-screen bg-white mb-12'/>
      <div className='px-4'>
      <motion.h2 
        className="text-3xl font-bold text-center text-white mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Nosotros
      </motion.h2>

      <div className="max-w-md mx-auto">
        {cards.map((card, index) => (
          <Card 
            key={index}
            img={card.img}
            text={card.text}
            delay={index * 0.2}
          />
        ))}
      </div>
      </div>

      <motion.button
        onClick={() => {
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="mx-auto mt-8 block text-orange-500 text-xl p-2 px-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Si quieres saber más, Síguenos
      </motion.button>
    </div>
  );
};

// Contact Component
const SocialIcon = ({ Icon, href, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-orange-200 transition-colors"
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }}
    aria-label={label}
  >
    <Icon size={32} />
  </motion.a>
);

const Contact = () => {
  return (
    <div id="contact" className="min-h-screen relative">
      <hr className='bg-white mb-6'/>
      <div className="absolute inset-0">
        <svg 
          viewBox="0 0 1440 320" 
          className="w-full h-full"
          preserveAspectRatio="none"
        >
        </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6">
        <motion.div
          className="flex space-x-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SocialIcon Icon={Instagram} href="https://instagram.com" label="Instagram" />
          <SocialIcon Icon={Facebook} href="https://facebook.com" label="Facebook" />
          <SocialIcon Icon={Linkedin} href="https://linkedin.com" label="LinkedIn" />
        </motion.div>

        <motion.div
          className="text-white text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl mb-6">También nos puedes contactar:</h2>
          <p className="flex items-center justify-center gap-2">
            <Mail size={20} />
            BFA@email.com
          </p>
          <p className="flex items-center justify-center gap-2">
            <Phone size={20} />
            2132435690
          </p>
        </motion.div>

        <motion.img
          src="/src/assets/image_1_-removebg-preview.png"
          alt="Best Food for All"
          className="w-24 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        />
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  return (
      <main className="overflow-x-hidden z-50">
        <Header />
        <About />
        <Contact />
      </main>
  );
};

export default App;