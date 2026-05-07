import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUpRight,
  ShieldCheck,
  Eye
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { name: 'Men Spectacles', href: '#' },
      { name: 'Women Spectacles', href: '#' },
      { name: 'Sunglasses', href: '#' },
      { name: 'Computer Glasses', href: '#' },
      { name: 'Contact Lenses', href: '#' },
    ],
    services: [
      { name: 'Book Home Eye Test', href: '#' },
      { name: 'Store Locator', href: '#' },
      { name: 'Virtual Try-On', href: '#' },
      { name: 'Eye Health Guide', href: '#' },
      { name: 'Prescription Guide', href: '#' },
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Our Blog', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Contact Us', href: '#' },
    ]
  };

  return (
    <footer className="bg-slate-50 pt-24 pb-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Section: Brand & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div className="max-w-md">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-[var(--brand-primary)] rounded-xl flex items-center justify-center text-white">
                <Eye size={24} />
              </div>
              <span className="text-2xl font-black text-slate-900 tracking-tighter">
                Brite Vision <span className="text-[var(--brand-primary)]">Optical</span>
              </span>
            </div>
            <p className="text-slate-500 font-medium leading-relaxed">
              Redefining eye care with precision technology and designer style. 
              Join our community for the latest in optical innovation and fashion.
            </p>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-[40px] shadow-sm border border-slate-100 relative overflow-hidden">
            <div className="relative z-10">
              <h4 className="text-2xl font-bold text-slate-900 mb-2">Join our Newsletter</h4>
              <p className="text-slate-500 font-medium mb-6">Get 10% off your first frame purchase.</p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-[var(--brand-primary)] outline-none font-medium"
                />
                <button className="bg-[var(--brand-primary)] text-white px-8 py-4 rounded-2xl font-bold hover:bg-emerald-700 transition-all shadow">
                  Subscribe
                </button>
              </div>
            </div>
            {/* Decorative pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full blur-3xl -mr-16 -mt-16" />
          </div>
        </div>

        {/* Middle Section: Links & Contact */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          <div className="col-span-2 lg:col-span-1 space-y-6">
            <h5 className="font-black text-slate-900 uppercase tracking-widest text-xs">Reach Us</h5>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <MapPin className="text-emerald-600 shrink-0 mt-1" size={18} />
                <span className="text-slate-500 font-medium text-sm leading-relaxed">
                  55, Gandhi Road, oop.to Indian Overseas Bank, Panruti - 607106
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="text-emerald-600 shrink-0" size={18} />
                <span className="text-slate-500 font-medium text-sm">99623-06965</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="text-emerald-600 shrink-0" size={18} />
                <span className="text-slate-500 font-medium text-sm">care@britevision.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-black text-slate-900 uppercase tracking-widest text-xs mb-8">Shop</h5>
            <ul className="space-y-4">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-500 font-medium text-sm hover:text-emerald-600 transition-colors flex items-center gap-1 group">
                    {link.name} <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 -translate-y-1 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-black text-slate-900 uppercase tracking-widest text-xs mb-8">Services</h5>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-500 font-medium text-sm hover:text-emerald-600 transition-colors flex items-center gap-1 group">
                    {link.name} <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 -translate-y-1 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-black text-slate-900 uppercase tracking-widest text-xs mb-8">Company</h5>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-500 font-medium text-sm hover:text-emerald-600 transition-colors flex items-center gap-1 group">
                    {link.name} <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 -translate-y-1 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:block">
             <div className="p-6 bg-white border border-emerald-100 rounded-3xl text-center">
                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mx-auto mb-4">
                  <ShieldCheck size={24} />
                </div>
                <p className="text-xs font-bold text-slate-900 mb-1">Authenticity Guaranteed</p>
                <p className="text-[10px] text-slate-400 font-medium uppercase tracking-tighter">100% Original Products</p>
             </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">
            © {currentYear} Brite Vision Panruti. All Rights Reserved.
          </p>
          <div className="flex items-center gap-8">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Secure Payments via</span>
            <div className="flex items-center gap-4 opacity-30 grayscale">
              {/* These would be payment logos in a real app */}
              <div className="w-8 h-5 bg-slate-400 rounded-sm" />
              <div className="w-8 h-5 bg-slate-400 rounded-sm" />
              <div className="w-8 h-5 bg-slate-400 rounded-sm" />
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;