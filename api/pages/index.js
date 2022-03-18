import Head from 'next/head'

const siteTitle = "Elden Ring API"

function Index() {
  return (
    <div className="container">
      <Head>
      <link rel="icon" href="/eldenring-rune-icon.png" />
        <title>Elden Ring API</title>
        <meta
          name="description"
          content="The ultimate open source Elden Ring API"
        />
        <meta
          property="og:image"
          content={`/eldenring-rune-icon.png`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main className='heroBanner'>
        <div className="container">
          <img className='apiLogo' src='/eldenring-opensource-logo.png'/>
          <div className='buttons'>
            <a className='myButton'
              href='https://docs.eldenring.fanapis.com/docs'>
              Go to Documentation
            </a>
          </div>
        </div>
      </main>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
        .heroBanner {
          height: 100vh;
          background: url(elden-ring-bg.webp) no-repeat center center fixed;
          background-color: linear-gradient(180deg, rgba(36,100,119,1) 0%, rgba(135,143,77,1) 51%, rgba(14,57,57,1) 100%);
          -webkit-background-size: cover;
          -moz-background-size: cover;
          -moz-background-size: cover;
          -moz-background-size: cover;
          background-size: cover;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        
        .apiLogo {
          margin-top: 15%;
          min-width: 350px;
          max-width: 25%;
          height: auto;
        }

        .buttons {
          margin-top: 32px;
        }

       a {
         color: white;
         text-decoration: none;
         letter-spacing: 2px;
         font-size: 18px;
         border: 2px solid #ffffff55;
         text-align: center;
         padding: 24px 50px;
         transition: all .35s;
         border-radius: 15px;
       }

       a:hover {
        color: black;
        border: 3px solid #fff;
        background: #fff
      }
        
      `}</style>
    </div>
  )
}

export default Index
