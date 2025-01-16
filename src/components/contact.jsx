import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { init, send } from 'emailjs-com';
import { useState } from 'react';

init('z39wvqhGhvNDrcrmS'); // Remplacez par votre User ID d'EmailJS
//template_klmajnu
//service_orfr5w9
//z39wvqhGhvNDrcrmS
  
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
});

const [loading, setLoading] = useState(false);


const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};

const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)

    send('service_orfr5w9', 'template_klmajnu', {
          from_name: formData.name,
          to_name: "AIA-LAB",
          from_email: formData.email,
          to_email: 'contactus@aialabcm.com',
          message: formData.message
       }, 'z39wvqhGhvNDrcrmS')
        .then((response) => {
            setLoading(false)
            alert("merci,  je vous reviens aussi vite que possible")
            setFormData({
              name: '',
              email: '',
              message: '',
            })
            console.log('Email envoyé avec succès!', response.status, response.text);
            // Réinitialiser le formulaire ou afficher un message de succès
        })
        .catch((err) => {
          setLoading(false)
            alert("echec de l'envoie de l'email verifier votre connexion")
            console.log('Échec de l\'envoi de l\'email', err);
        });
};
  return (
    <section id="contact" className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl  font-bold text-white mb-4">
          Contactez-nous
          </h2>
          <div className="w-20 h-1 bg-[#08c1dc] mx-auto mb-8"></div>
          <p className="text-lg text-white max-w-2xl mx-auto">
          Vous avez un projet en tête ? Discutons de la manière dont nous pouvons vous aider à atteindre vos objectifs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Mail className="w-6 h-6 text-[#08c1dc]" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white text-start">Email au</h3>
                <p className="mt-1 text-white-400">contact@aialabcm.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Phone className="w-6 h-6 text-[#08c1dc]" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white text-start">Appelez-Nous</h3>
                <p className="mt-1 text-gray-300">+237 693 421 763</p>
                <p className="mt-1 text-gray-300">+237 670 517 728</p>
                <p className="mt-1 text-gray-300">+237 658 579 635</p>
                
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <MapPin className="w-6 h-6 text-[#08c1dc]" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white text-start">Visité nous</h3>
                <p className="mt-1 text-gray-300 text-start">rue valle longkak immeuble manengouba, <br/>Tsinga
                Ancienne Mairie<br/>Yaounde,Cameroun</p>
              </div>
            </div>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nom
              </label>
              <input
                type="text"
                id="name"
                className="px-10 mt-1 block w-full rounded-md border-gray-500 shadow-sm h-10 focus:border-white focus:ring-white placeholder:text-gray-600 placeholder:text-sm"
                name='name'
                value={formData.name}
                onChange={handleChange}
                placeholder="quelle est votre nom?"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="px-10 h-10 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#08c1dc] focus:ring-[#08c1dc] placeholder:text-gray-600 placeholder:text-sm"
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder="quelle est votre email?"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="px-10 mt-1 block w-full rounded-md border-gray-500 shadow-sm focus:border-[#08c1dc] focus:ring-[#08c1dc] placeholder:text-gray-600 placeholder:text-sm"
                name='message'
                value={formData.message}
                onChange={handleChange}
                placeholder="envoyer nous un message" 
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#08c1dc] text-white py-3 px-6 rounded-md hover:bg-blue-400 transition-colors"
            >
              {loading? "encours d'envoie..." : "envoyer"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;