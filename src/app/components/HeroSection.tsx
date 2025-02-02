export default function HeroSection() {
    return (
      <div className="bg-indigo-600">
        <div className="max-w-7xl mx-auto px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Transform Your Business
            </h1>
            <p className="mt-6 text-xl leading-8 text-indigo-100">
              Professional digital solutions tailored to your needs. Let us help you
              achieve your business goals.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/pages/contact"
                className="rounded-md bg-white px-6 py-3 text-lg font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }