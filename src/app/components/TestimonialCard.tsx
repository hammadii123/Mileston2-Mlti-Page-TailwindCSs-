/* eslint-disable @next/next/no-img-element */
export default function TestimonialCard({
    name,
    role,
    comment,
    avatar,
  }: {
    name: string
    role: string
    comment: string
    avatar: string
  }) {
    return (
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <div className="flex items-center gap-4 mb-6">
          <img
            src={avatar}
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="text-lg font-bold text-gray-900">{name}</h3>
            <p className="text-sm text-gray-600">{role}</p>
          </div>
        </div>
        <p className="text-gray-600">{comment}</p>
      </div>
    )
  }