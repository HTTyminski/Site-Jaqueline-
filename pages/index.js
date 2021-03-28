import Head from 'next/head'
import styles from '../styles/Home.module.css'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Páscoa 2021</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bem vindos a página da Jaqueline
        </h1>
        <a 
          href="https://web.whatsapp.com/send?phone=5541985336174" 
          target="_blank">
          <p style={{fontSize: 16}}>faça seu pedido aqui <WhatsAppIcon htmlColor="#34af23"/></p>
        </a>

        <div className={styles.grid}>
        <a className={styles.card}>
            <img src="/promocao.jpeg" alt="Vercel Logo" className={styles.logo} />
          </a>
          <a className={styles.card}>
              <h3 className={styles.titulo}>Surpresa</h3>
          
            <div className={styles.itemSurpresa}>
              <h3>Kinder Bueno</h3>
              <p className={styles.rosa}>R$32</p>
              <p>1 casca</p>
              <p>1 kinder ovo</p>
              <p>4 chocolates</p>
              <p>kinder</p>
            </div>
       
            <div className={styles.itemSurpresa}>
              <h3>Bis</h3>
              <p className={styles.rosa}>R$32</p>
              <p>1 casca</p>
              <p>1 caixa de biz</p>
            </div>

            <div className={styles.itemSurpresa}>
              <h3>Sonho de Valsa</h3>
              <p className={styles.rosa}>R$27</p>
              <p>Ouro Branco</p>
              <p>1 casca</p>
              <p>7 bomboms</p>
            </div>
          </a>
          <a className={styles.card}>
            
    
            <div>
             <h3 className={styles.titulo}>Tadicionais</h3>
             <p className={styles.rosa}>R$40</p>
             <p>Brigadeiro</p>
             <p>Branco</p>
             <p>Confete</p>
             <p>Paçoca</p>
             <p>Dois Amores</p>
            </div>
          </a>
          <a className={styles.card}>
            <div>
              <h3 className={styles.titulo}>Gourmet</h3>
              <p className={styles.rosa}>R$50</p>
              <p>Kinder Bueno</p>
              <p>Oreo</p>
              <p>Rafaelo</p>
              <p>Morango</p>
              <p>Uva</p>
            </div>
          </a>
          <a className={styles.card}>
            <img src="/fotosd.jpeg" alt="Vercel Logo" className={styles.logo} />
            <p className={styles.description}>Para celebrar a Páscoa, o Farinha Pura Meio Ovo recheado 
              de ovinhos em chocolate belga ao leite (R$ 59,90); 
              maleta com 4 mini ovos de chocolate ao leite (R$ 19,90); entre outras delicias.
            </p>
          </a>
          <a className={styles.card}>
            <h3>TITULO</h3>
            <img src="/image245.jpeg" alt="Vercel Logo" className={styles.logo} />
            <p className={styles.description}>Para celebrar a Páscoa, o Farinha Pura Meio Ovo recheado 
              de ovinhos em chocolate belga ao leite (R$ 59,90); 
              maleta com 4 mini ovos de chocolate ao leite (R$ 19,90); entre outras delicias.
            </p>
          </a>
          
          <a className={styles.card}>
            <img src="/buque.jpeg" alt="Vercel Logo" className={styles.logo} />
          </a>
          <a className={styles.card}>
            <img src="/ovo4.jpeg" alt="Vercel Logo" className={styles.logo} />
          </a>


        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}Discovery ® Henrique Tiago Tyminski
          
        </a>
      </footer>
    </div>
  )
}
