export default function ServiceCard({
    title,
    description,
    icon,
  }: {
    title: string
    description: string
    icon: string
  }) {
    return (
      <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
        <div className="text-4xl mb-6">{icon}</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    )
  }