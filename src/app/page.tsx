"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Sparkles, ChefHat, Quote, Phone } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="small"
      sizing="small"
      background="grid"
      cardStyle="glass-flat"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="outline"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Modus"
          navItems={[
            { name: "Chi Siamo", id: "about" },
            { name: "La Pizza", id: "features" },
            { name: "Dove Siamo", id: "locations" },
            { name: "Contatti", id: "contact" }
          ]}
          button={{ text: "Prenota Ora", href: "contact" }}
          className="bg-white/80 backdrop-blur-md"
          navItemClassName="text-sm font-medium"
          buttonClassName="bg-gradient-to-r from-purple-600 to-purple-400"
          buttonTextClassName="font-semibold"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="L'Autenticità dei Sapori Cilentani nel Cuore di Milano"
          description="Modus è l'evoluzione di un sogno: portare l'autenticità dei sapori cilentani nel cuore di Milano. Nato dalla passione di Paolo De Simone e dalla tradizione che affonda le radici nella terra che ha dato vita alla dieta mediterranea."
          tag="Premium Italian"
          tagIcon={Sparkles}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764078554692-p68p68uv.jpg"
          imageAlt="Authentic wood-fired Italian pizza"
          frameStyle="card"
          buttons={[
            { text: "Prenota Ora", href: "contact" },
            { text: "Scopri di Più", href: "about" }
          ]}
          className="py-16 md:py-24"
          titleClassName="text-4xl md:text-5xl lg:text-6xl font-bold"
          descriptionClassName="text-lg md:text-xl text-gray-700"
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="Chi Siamo"
          description="Modus Pizzeria è un sogno che prende vita dalle mani esperte di Paolo De Simone, un artigiano del gusto le cui radici affondano nel Cilento, la terra che ha dato vita alla dieta mediterranea. Ogni pizza racconta una storia di passione, tradizione e amore per l'eccellenza. Portiamo l'autenticità dei sapori campani in ogni morso, utilizzando ingredienti prelibati e tecniche tradizionali perfezionate nel tempo."
          className="py-16 md:py-24"
          tagClassName="text-purple-600 font-semibold"
          descriptionClassName="text-2xl md:text-3xl lg:text-4xl leading-relaxed"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardOne
          title="La Nostra Filosofia"
          description="Scopri cosa rende Modus speciale: ingredienti autentici, tecnica artigianale e amore per il Cilento in ogni piatto"
          tag="La Pizza"
          tagIcon={ChefHat}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
          features={[
            {
              title: "Ingredienti Prelibati",
              description: "Selezioniamo solo le migliori materie prime dal Cilento: pomodori San Marzano, mozzarella di bufala, olio extravergine d'oliva e farine gourmet per garantire autenticità in ogni boccone.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764078555601-5ngplh7q.jpg",
              imageAlt: "Premium Mediterranean ingredients"
            },
            {
              title: "Tecnica Artigianale",
              description: "I nostri maestri pizzaioli seguono le tradizioni autentiche, impastando a mano e facendo fermentare il nostro impasto con cura per sviluppare sapori complessi e profondi.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/tmp/geneate-an-image-of-premium-pasta-bologn-1764079013442-1e0b836f.jpg",
              imageAlt: "Artisan pizza preparation"
            },
            {
              title: "Amore per il Cilento",
              description: "Ogni pizza racconta una storia della nostra terra. Portiamo la magia dei sapori cilentani direttamente a Milano, mantenendo viva la tradizione che affonda nelle radici della dieta mediterranea.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764078557108-v3dheppo.jpg",
              imageAlt: "Traditional authentic pizza"
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="Quando Trovarci"
          description="Visita le nostre location in Milano per un'esperienza autentica"
          tag="Orari"
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="two-columns-alternating-heights"
          metrics={[
            {
              id: "1",
              value: "12:30 - 23:30",
              description: "Aperti Lun - Dom per Colazione, Pranzo e Cena"
            },
            {
              id: "2",
              value: "2 Sedi",
              description: "Milano Centro - Via Andrea Maffei e Corso Magenta"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Cosa Dicono i Nostri Ospiti"
          description="Scopri le esperienze autentiche di chi ha assaggiato la vera pizza cilentana a Milano"
          tag="Testimonial"
          tagIcon={Quote}
          textboxLayout="default"
          animationType="slide-up"
          carouselMode="buttons"
          testimonials={[
            {
              id: "1",
              name: "Marco Rossi",
              role: "Critico Gastronomico",
              testimonial: "Modus è una scoperta straordinaria. L'autenticità che Paolo De Simone porta in ogni pizza è rara e preziosa. Finalmente Milano ha una vera pizzeria cilentana.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764078559302-6sootc7q.jpg",
              imageAlt: "Marco Rossi"
            },
            {
              id: "2",
              name: "Giulia Conti",
              role: "Chef Stellato",
              testimonial: "La qualità degli ingredienti è impressionante. Ogni dettaglio testimonia passione e dedizione. Consiglio Modus a chiunque ami la vera pizza italiana.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764078560059-jud1e4bu.jpg",
              imageAlt: "Giulia Conti"
            },
            {
              id: "3",
              name: "Luca Bianchi",
              role: "Food Blogger",
              testimonial: "Non è solo pizza, è un viaggio nel Cilento. I sapori autentici, la tradizione rispettata, l'atmosfera accogliente: tutto perfetto.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764078560923-yzxeewss.jpg",
              imageAlt: "Luca Bianchi"
            },
            {
              id: "4",
              name: "Elena Moretti",
              role: "Ospite Regolare",
              testimonial: "Vengo a Modus almeno due volte a settimana. Ogni volta scopro nuove sfumature di gusto. É diventato il mio posto preferito a Milano.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764078561653-bws4k1t4.jpg",
              imageAlt: "Elena Moretti"
            },
            {
              id: "5",
              name: "Antonio Ferrara",
              role: "Sommelier",
              testimonial: "Le pizze si abbinano magnificamente con i nostri vini selezionati. Paolo ha creato qualcosa di veramente speciale qui.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764078562566-wv2xt94c.jpg",
              imageAlt: "Antonio Ferrara"
            },
            {
              id: "6",
              name: "Sofia Rossi",
              role: "Direttore Ristorante",
              testimonial: "La dedizione alla qualità e all'autenticità è evidente in ogni aspetto. Modus è diventato un punto di riferimento nella ristorazione milanese.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764078563308-e5jzsu8i.jpg",
              imageAlt: "Sofia Rossi"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Contatti"
          title="Prenota il Tuo Tavolo"
          description="Vieni a scoprire l'autenticità della pizza cilentana nel cuore di Milano. Contattaci per prenotazioni e informazioni."
          tagIcon={Phone}
          inputPlaceholder="Il tuo numero di telefono"
          buttonText="Prenota"
          termsText="Chiama direttamente per prenotazioni rapide. Siamo qui per offrirti la migliore esperienza culinaria."
          className="py-16 md:py-24"
          containerClassName="max-w-2xl mx-auto"
          titleClassName="text-3xl md:text-4xl font-bold"
          descriptionClassName="text-lg text-gray-600 mt-4"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Modus"
          columns={[
            {
              items: [
                { label: "Home", href: "/" },
                { label: "Chi Siamo", href: "about" },
                { label: "La Nostra Storia", href: "about" }
              ]
            },
            {
              items: [
                { label: "La Pizza", href: "features" },
                { label: "I Prodotti", href: "features" },
                { label: "Filosofia", href: "about" }
              ]
            },
            {
              items: [
                { label: "Le Pizzerie", href: "locations" },
                { label: "Orari", href: "metrics" },
                { label: "Contatti", href: "contact" }
              ]
            },
            {
              items: [
                { label: "Scarica Menu", href: "#" },
                { label: "Blog", href: "#" },
                { label: "News", href: "#" }
              ]
            }
          ]}
          className="bg-gradient-to-br from-purple-50 to-purple-100"
          logoClassName="text-3xl font-bold text-purple-600 mb-8"
          itemClassName="text-sm hover:text-purple-600 transition-colors"
        />
      </div>
    </ThemeProvider>
  );
}