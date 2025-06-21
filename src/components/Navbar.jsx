const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 md:px-20 py-6 text-white">
      <div className="text-xl font-bold tracking-widest">
        <span className="text-indigo-400">ZEUS</span>
      </div>
      <div className="flex space-x-4">
        <button className="text-sm text-gray-300 hover:text-white">Read Docs</button>
        <button className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded text-sm font-medium">Join Waitlist</button>
      </div>
    </nav>
  );
};

export default Navbar;
