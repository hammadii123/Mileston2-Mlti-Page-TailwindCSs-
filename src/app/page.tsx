// import Image from "next/image";
// import Link from "next/link"
import HeroSection from './components/HeroSection'
import ServiceCard from './components/ServiceCard'
import TestimonialCard from './components/TestimonialCard'

const services = [
  {
    title: 'Web Development',
    description: 'Build modern, responsive websites with cutting-edge technology.',
    icon: '💻',
  },
  {
    title: 'Mobile Apps',
    description: 'Create cross-platform mobile applications for iOS and Android.',
    icon: '📱',
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable and secure cloud infrastructure for your business.',
    icon: '☁️',
  },
]

const testimonials = [
  {
    name: 'Hammad Mustafa',
    role: 'CEO, TechCorp',
    comment: 'NextGen transformed our business with their expertise and professionalism.',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  
]

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
      <div className="py-24 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}