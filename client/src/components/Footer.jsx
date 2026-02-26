import { assets, footer_data } from '../assets/assets'

const Footer = () => {
  return (
    <footer className="relative mt-24 bg-gradient-to-b from-white to-gray-50 border-t border-gray-200">

      {/* Soft Glow Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[600px] h-[400px] bg-blue-200 opacity-20 blur-3xl rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Logo + Description */}
          <div>
            <img src={assets.logo} alt="logo" className="w-36 mb-6" />
            <p className="text-gray-600 max-w-[340px] leading-relaxed text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto, earum. Tenetur optio officiis aut reprehenderit modi.
            </p>
          </div>

          {/* Dynamic Sections */}
          {footer_data.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-gray-900 mb-6 text-sm tracking-wide uppercase">
                {section.title}
              </h3>

              <ul className="space-y-3 text-gray-600 text-sm">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="relative inline-block transition-all duration-200 hover:text-blue-600 group"
                    >
                      {link}
                      <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Divider */}
        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">

          <p>
            Copyright 2026 © Blogify All Rights Reserved
          </p>

          {/* Optional subtle branding accent */}
          <div className="mt-4 md:mt-0 text-xs text-gray-400">
            Built for creators.
          </div>

        </div>

      </div>
    </footer>
  )
}

export default Footer