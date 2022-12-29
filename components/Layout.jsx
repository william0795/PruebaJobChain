import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Layout.module.css'
import Link from 'next/link'
import utilStyles from '../styles/Utils.module.css'

const name = 'Ferruzola'
export default function Layout({ children, title, description, home }) {
  return (
    <div className={styles.container}>
         <Head>
            <link rel="icon" href="/favicon.ico" />
            <title>{title}</title>
            <meta name="descripcion" content={description}></meta>
        </Head>

        <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/img/1.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/img/1.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>

        <nav>
            <Link legacyBehavior href="/">
                <a>Inicio | </a>
            </Link>
            <Link legacyBehavior href="/blog">
                <a>Blog | </a>
            </Link>
            <Link legacyBehavior href="/about">
                <a>about</a>
            </Link>
        </nav>
        <main>
            {children}
        </main>

        {!home && (
            <div className={styles.backToHome}>
            <Link href="/">← Back to home</Link>
            </div>
        )}
    </div>
  )
}
Layout.defaultProps = {
    title:"Next.js | mi sitio web",
    description:"Description de mi sitio web"
}