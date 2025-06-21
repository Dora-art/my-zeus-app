const Footer = () => {
  return (
    <footer className="bg-[#0a0a1f] text-gray-400 text-sm py-8 px-6 md:px-20 text-center">
      <p>© {new Date().getFullYear()} Zeus AI. All rights reserved.</p>
      <p className="mt-2">Built for DevOps Engineers. Join the waitlist to get early access.</p>
    </footer>
  );
};

export default Footer;
