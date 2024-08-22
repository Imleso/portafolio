import "./contact.scss"

const Contact = ({contactRef}) => {
  return (
    <div className="contact" ref={contactRef}>
        <div className="contact-content">
            <h1>Contacto</h1>
            <div className="contact-section">
                <img className="contact-img-wsp" src="public\assets\wspLogo.png" alt="" />
                <p>51 906837252</p>
            </div>
            <div className="contact-section">
                <img className="contact-img-wsp" src="public\assets\gmailLogo.png" alt="" />
                <p>edusaaoli@gmail.com</p>
            </div>
        </div>
        <img className="contact-img" src="public\assets\Contacto.png" alt="" />
    </div>
  )
}
export default Contact