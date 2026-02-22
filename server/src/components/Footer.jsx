import { assets, footer_data } from '../assets/assets'

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-20">

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-14">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Logo + Description */}
          <div>
            <img src={assets.logo} alt="logo" className="w-36 mb-6" />
            <p className="text-gray-600 max-w-[350px] leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto, earum. Tenetur optio officiis aut reprehenderit modi.
            </p>
          </div>

          {/* Dynamic Sections */}
          {footer_data.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-gray-900 mb-5">
                {section.title}
              </h3>

              <ul className="space-y-2 text-gray-600 text-sm">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-black transition">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 mt-12 pt-6 text-center text-sm text-gray-500">
          Copyright 2026 © Blogify All Rights Reserved
        </div>

      </div>
    </footer>
  )
}

export default Footer
