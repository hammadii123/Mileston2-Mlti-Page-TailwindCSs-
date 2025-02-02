// import Image from 'next/image'
import TestimonialCard from '../../components/TestimonialCard'

const teamMembers = [
  {
    name: 'Hammad Mustafa',
    role: 'CEO & Founder',
    bio: 'John has over 15 years of experience in digital transformation and business strategy.',
    image: '/myImage.jpg',
  },
  {
    name: 'Jane Smith',
    role: 'CTO',
    bio: 'Jane is a tech visionary with expertise in cloud computing and AI-driven solutions.',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    name: 'Michael Brown',
    role: 'Lead Developer',
    bio: 'Michael specializes in building scalable and secure web applications.',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
]

const coreValues = [
  {
    title: 'Innovation',
    description: 'We constantly push boundaries to deliver cutting-edge solutions.',
    icon: '🚀',
  },
  {
    title: 'Integrity',
    description: 'We believe in transparency and ethical business practices.',
    icon: '🤝',
  },
  {
    title: 'Excellence',
    description: 'We strive for perfection in everything we do.',
    icon: '🏆',
  },
]

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, InnovateTech',
    comment: 'NextGen helped us scale our business with their innovative solutions.',
    avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    name: 'David Wilson',
    role: 'Founder, Cloudify',
    comment: 'Their team is professional, knowledgeable, and truly cares about client success.',
    avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
]

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-indigo-600">
        <div className="max-w-7xl mx-auto px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              About Us
            </h1>
            <p className="mt-6 text-xl leading-8 text-indigo-100">
              We are a team of passionate professionals dedicated to helping businesses thrive in the digital age.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2015, NextGen Solutions started as a small team of tech enthusiasts with a vision to revolutionize the digital landscape. Over the years, we have grown into a trusted partner for businesses worldwide, delivering innovative solutions that drive growth and success.
              </p>
              <p className="text-gray-600">
                Our journey has been marked by a commitment to excellence, a passion for innovation, and a deep understanding of our clients needs. We take pride in our ability to adapt to the ever-changing tech environment and deliver results that exceed expectations.
              </p>
            </div>
            <div className="relative h-96">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                alt="Our Team"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="py-24 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="relative h-48 w-48 mx-auto mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 text-center">
                  {member.name}
                </h3>
                <p className="text-lg text-indigo-600 text-center mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 text-center">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-6">{value.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Client Success Stories */}
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