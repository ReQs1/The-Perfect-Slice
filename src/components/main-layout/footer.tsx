function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-4 border-t-1 border-t-gray-200 flex justify-center">
      <p className="text-center">
        <span>&copy;</span> {year} The Perfect Slice. Made with love 🍕
      </p>
    </footer>
  );
}

export default Footer;
