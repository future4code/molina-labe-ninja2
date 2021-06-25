import React from 'react'
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

import {
  ContainerFooter,
  ContainerInfo,
  ContainerItem,
  ItemContato,
  ContainerEndereco,
  Redes,
  Line
} from './styled'

class Footer extends React.Component {
  render() {
    return (
      <ContainerFooter>
        <div className="footer">
          <ContainerInfo>
            <ContainerItem>
              <img src="https://trello-attachments.s3.amazonaws.com/60d212b05330d07730605142/268x299/d53f45f3d2783562a88d3c81024efedc/Logo_Header.png" alt="Logo da Labeninjas" />
            </ContainerItem>

            <div className="contactSocial">
              <ContainerItem>
                <h2>Contato</h2>
                <ItemContato>
                  <span><AiOutlinePhone /></span>
                  <a href="tel:+5599999999999">(99) 99999-9999</a>
                </ItemContato>

                <ItemContato>
                  <span><AiOutlineMail /></span>
                  <a href='mailto:contato@labeninjas.com'>contato@labeninjas.com</a>
                </ItemContato>

                <ContainerEndereco>
                  <p>Rua Inexiste, n 333, Atlantis - Rio de Janeiro</p>
                </ContainerEndereco>
              </ContainerItem>

              <ContainerItem>
                <h2>Redes Sociais</h2>
                <Redes>
                  <li>
                    <a href="https://pt-br.facebook.com/" target='_blank' rel="noopener noreferrer">
                      <span><FaFacebook /></span>
                      <p>Facebook</p>
                    </a>
                  </li>

                  <li>
                    <a href="https://www.instagram.com/" target='_blank' rel="noopener noreferrer">
                      <span><FaInstagram /></span>
                      <p>Instagram</p>
                    </a>
                  </li>

                  <li>
                    <a href="https://twitter.com/" target='_blank' rel="noopener noreferrer">
                      <span><FaTwitter /></span>
                      <p>Twitter</p>
                    </a>
                  </li>

                  <li>
                    <a href="https://www.youtube.com/" target='_blank' rel="noopener noreferrer">
                      <span><FaYoutube /></span>
                      <p>Youtube</p>
                    </a>
                  </li>

                </Redes>
              </ContainerItem>
            </div>
          </ContainerInfo>
          <Line/>
          <p>Copyright © 2021 JILIT All rights reserved.</p>
        </div>
      </ContainerFooter>
    )
  }
}

export default Footer
