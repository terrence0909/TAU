const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-gray-700 bg-gray-900">
      <div className="container mx-auto text-center">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Tshepo Tau. All rights reserved.
        </p>
        <p className="text-gray-500 text-xs mt-2">
          Built with React, TypeScript & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;