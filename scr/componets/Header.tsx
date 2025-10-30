import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-secondary shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* Logo */}
            <div className="w-10 h-10 relative">
              <Image
                src="/genshin-logo.png"
                alt="Genshin Impact Logo"
                fill
                className="object-contain"
              />
            </div>
            <h1 className="text-2xl font-bold text-white">Team Builder</h1>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a href="/" className="text-white hover:text-accent transition-colors">
              Home
            </a>
            <a href="/teams" className="text-white hover:text-accent transition-colors">
              My Teams
            </a>
            <a href="/characters" className="text-white hover:text-accent transition-colors">
              Characters
            </a>
          </nav>
          
          {/* Mobile menu button */}
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}