import Link from 'next/link';
import style from './style.min.module.css';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <p>
        <Link href="/">Politica de privacidade</Link> -{' '}
        <Link href="/">Termos de uso</Link>
      </p>
      <p>Desenvolvido por Hydrah Tecnologia - todos os direitos reservados</p>
    </footer>
  );
};
export default Footer;
