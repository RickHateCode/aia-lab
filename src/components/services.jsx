
import { Globe, Palette, BarChart, Megaphone, Hexagon } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: ' developement web et mobile ',
      description: " Nous créons des applications et des sites internet sur mesure qui s'adaptent parfaitement à tous les appareils, garantissant une expérience utilisateur fluide et engageante pour aider nosclients à se démarquer sur le web et le mobile",
    },
    {
      icon: Hexagon,
      title: ' Identité visuelle',
      description: "  nous créons des logos et des designs de marque pour aider nos clients à se démarquer de la concurrence et à renforcer leur image de marque",
    },
    {
      icon: Palette,
      title: ' Design graphique',
      description: ' nous proposons des designs graphiques pour des supports de communication comme les brochures, les flyers, les affiches, les cartes de visite, les présentations',
    },
    {
      icon: Palette,
      title: "Design d'emballage",
      description: ' nous aidons nos clients à concevoir des emballages pour leurs produits qui soient à la fois attrayants et fonctionnels',
    },
    {
      icon: BarChart,
      title: 'Digital Marketing',
      description: 'nous assurons le référencement SEO et le « Community Management » de nos clients afin de maximiser leur potentiel en ligne.',
    },
    {
      icon: Megaphone,
      title: 'Conseil en communication', 
      description: 'nous offrons des conseils en communication pour aider nos clients à élaborer leur stratégie de communication et à communiquer efficacement sur leur cible.',
    },
  ];

  return (
    <section id="services" className="py-20 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl  font-bold text-white mb-4">
            Nos Services
          </h2>
          <div className="w-20 h-1 bg-[#08c1dc] mx-auto mb-8"></div>
          <p className="text-lg text-white max-w-2xl mx-auto">
          Nous offrons des solutions numériques complètes pour aider votre entreprise à prospérer dans le monde moderne.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                <service.icon className="w-8 h-8 text-[#08c1dc] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 text-justify px-0">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;