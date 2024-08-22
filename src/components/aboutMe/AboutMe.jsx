import "./aboutMe.scss"


const AboutMe = ({ contentRef }) => {
  
  const initial = "< "
  const closed = " />"
  return (
    <div className="aboutMe" ref={ contentRef } >
        <div className="aboutMe-text">
            <h1>LUIS EDUARDO SAAVEDRA OLIVA</h1>
            <h3>{initial}DESARROLLADOR FRONT-END{closed}</h3>
            <div className="aboutMe-text-p">
                <p>Desarrollador front-end, apasionado por los retos y la adquisición de nuevas experiencias, actualmente enfocado en React Js.</p>
                <p>Me entusiasma crear interfaces de usuario intuitivas y desarrollar aplicaciones robustas que funcionen a la perfección.</p>
                <p>Estoy en un aprendizaje constante. Cada nuevo problema es una oportunidad para aprender, así que, si tienes un desafío, estoy preparado para asumirlo.</p>
            </div>
        </div>
        <div className="aboutMe-imgContent">
          <img className="aboutMe-img" src="public\assets\Me.png" alt="" />
          <img className="aboutMe-bg" src="public\assets\fondoMe.svg" alt="" />
          <img className="aboutMe-logoJs" src="public\assets\logoJs.png" alt="" />
          <img className="aboutMe-logoHtml" src="public\assets\logoHtml.png" alt="" />
          <img className="aboutMe-logoReact" src="public\assets\reactLogo.png" alt="" />
          <img className="aboutMe-logoSass" src="public\assets\logoSass.png" alt="" />
        </div>
        
    </div>
  )
}
export default AboutMe