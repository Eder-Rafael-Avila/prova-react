import './index.scss';

export default function Header() {
    return (
        <header className='comp-header'>
            <div className="logo">
                <img src="/assets/images/gato.png" alt="" />
            </div>
            <nav className="navegacao">
                <ul>
                    <li>Home</li>
                    <li>Sobre</li>
                    <li>Contato</li>
                    <li>Suporte</li>
                </ul>
            </nav>
        </header>
    );
}