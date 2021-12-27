import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import './AboutMe.css'

library.add(fab, fas)

export function AboutMe() {
  return (
    <div className='PresentationCard'>
      <div className='PresentationCard__Information'>
        <img className='PresentationCard__Information__Img' src="https://media-exp1.licdn.com/dms/image/C4D03AQEcUFV6R8xufQ/profile-displayphoto-shrink_800_800/0/1522721786823?e=1645660800&v=beta&t=vqbEtN2_k4N8HPPmv1Jio8-I_FUimIX37wpmoFlCE_4"/>
        <div className='PresentationCard__Information__Text'>
          <div className='PresentationCard__Information__Text__Content'>
            <h6>¡Hola mundo! Yo soy</h6>
            <h3>Renzo Enrique Palomino Távara</h3>
            <h4>Futuro egresado del Top-15 de <a href="https://makeitreal.camp/">Make It Real</a></h4>
            <p>Lo más resaltante que he podido aprender hasta ahora en el programa es:</p>
            <ul className='PresentationCard__Information__Text__Content_Ul'>
              <li><p>React</p></li>
              <li><p>CSS</p></li>
              <li><p>Jest</p></li>
            </ul>
            <ul className='PresentationCard__Information__Text__Content_Ul'>
              <li>
                <p>
                  <a href = "mailto: renzopt94@outlook.com"><FontAwesomeIcon className='PresentationCard__Information__Text__Content_Ul_Icon' icon={['fas', 'envelope']}/>renzopt94@outlook.com</a>
                </p>
              </li>
              <li>
                <p>
                  <a href = "https://github.com/renz1503"><FontAwesomeIcon className='PresentationCard__Information__Text__Content_Ul_Icon' icon={['fab','github']} />@Renz1503</a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}