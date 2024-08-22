import "./header.scss"
const Header = ({ scrollToRef, scrollContactRef }) => {
  const handleScroll = () => {
    const offset = 150; 
    const elementPosition = scrollToRef.current.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;

    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  const handleContactScroll = () => {
    // Realizar el scroll a la sección referenciada
    scrollContactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="header">
        <span className="header-section" onClick={()=> handleScroll()}>SOBRE MI</span>
        <span className="header-section">PROYECTOS</span>
        <span className="header-section" onClick={()=> handleContactScroll()}>CONTACTO</span>
    </div>
  )
}
export default Header