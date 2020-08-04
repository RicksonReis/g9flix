import React from 'react';
import { FooterBase } from './styles';
import IconeFooter from '../../assets/img/Logo.png';
import './styles.css';

function Footer() {
  return (
    <FooterBase>
      <a href="https://github.com/emersondevelops">
        <img className="iconeFooter" src={IconeFooter} alt="Github do desenvovedor" />
      </a>
      <p>
        Desenvolvido por
        {' '}
        <a href="https://www.linkedin.com/in/rickson-reis-g9/">Rickson Reis</a>
        {' '}
        durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
