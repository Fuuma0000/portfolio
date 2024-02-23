const Footer = ({ index }: { index: number }) => {
  return (
    <div className={`bg-${index % 2 === 0 ? 'even' : 'odd'} `} id="footer">
      <footer className="mx-auto max-w-7xl py-1">
        <p className="text-center text-white">© 2024 - Copyright Fuuma.</p>
      </footer>
    </div>
  );
};

export default Footer;
