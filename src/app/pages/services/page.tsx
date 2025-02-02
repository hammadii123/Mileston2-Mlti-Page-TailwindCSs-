import ServiceCard from "../../components/ServiceCard"

const services = [
  {
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies.',
    icon: '💻',
  },
  {
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications.',
    icon: '📱',
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and services.',
    icon: '☁️',
  },
]

export default function Services() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Our Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  )
}