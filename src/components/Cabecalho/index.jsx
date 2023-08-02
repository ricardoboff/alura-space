import logo from 'assets/logo.png'
import search from 'assets/search.png'
import styles from './cabecalho.module.scss'

export default function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <img src={logo} alt="Logo do Alura Space" />
            <div className={styles.cabecalho__container}>
                <input className={styles.cabecalho__input} type="text" placeholder="O que você procura?"/>
                <img src={search} alt="icone de lupa" />
            </div>
        </header>
    )
}