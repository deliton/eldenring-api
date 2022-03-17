import Head from 'next/head'

const siteTitle = "FanAPIs Template"

function Index() {
  return (
    <div className="container">
      <Head>
      <link rel="icon" href="/icon.png" />
        <title>FanAPIs Template</title>
        <meta
          name="description"
          content="API Description here"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main className='heroBanner'>
        <div className="container">
          <img className='apiLogo' src='https://user-images.githubusercontent.com/47995046/155302964-ce7f4d85-3a0f-4410-b803-42282cb1434c.png'/>
          <div className='buttons'>
            <a className='myButton'
              href='https://docs.<project>.fanapis.com/docs'>
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
          // background: url(zelda-background.jpg) no-repeat center center fixed;
          background: linear-gradient(to right, rgb(236, 0, 140), rgb(252, 103, 103));
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
