import React from 'react'
import {
    ContainerFooter, 
    ContainerInfo, 
    ContainerItem, 
    ItemContato,
    ContainerEndereco,
    Redes
} from './styled'
import {AiOutlinePhone, AiOutlineMail} from 'react-icons/ai'
import {FaFacebook, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa'
import labeninjas2 from '../../img/labeninjas2.png'

class Footer extends React.Component{
    render(){
        return (
            <ContainerFooter>
                <ContainerInfo>
                    <ContainerItem>
                        <img src={labeninjas2} alt="Logo da Labeninjas" />
                    </ContainerItem>

                    <ContainerItem>
                        <h2>Contato</h2>
                        <ItemContato>
                            <span><AiOutlinePhone/></span>
                            <a href="tel:+5599999999999">(99) 99999-9999</a>
                        </ItemContato>

                        <ItemContato>
                            <span><AiOutlineMail/></span>
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
                                <a href="https://pt-br.facebook.com/" target='_blank'>
                                    <span><FaFacebook/></span>
                                    <p>Facebook</p>
                                </a>
                            </li>

                            <li>
                                <a href="https://www.instagram.com/" target='_blank'>
                                    <span><FaInstagram/></span>
                                    <p>Instagram</p>
                                </a>
                            </li>

                            <li>
                                <a href="https://twitter.com/" target='_blank'>
                                    <span><FaTwitter/></span>
                                    <p>Twitter</p>
                                </a>
                            </li>

                            <li>
                                <a href="https://www.youtube.com/" target='_blank'>
                                    <span><FaYoutube/></span>
                                    <p>Youtube</p>
                                </a>
                            </li>
                            
                        </Redes>
                    </ContainerItem>
                </ContainerInfo>

                <p>Copyright © 2021 JILIT All rights reserved.</p>
            </ContainerFooter>
        )
    }
}

export default Footer
