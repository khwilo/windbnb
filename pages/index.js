import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Windbnb</title>
        <link rel='icon' href='/images/devchallenges.png' />
      </Head>

      <header className='header'>
        <img src='/images/logo.svg' className='logo-image' />

        <div className='header__form'>
          {/* TODO: Add input fields here */}
          <p>Select input</p>
        </div>
      </header>

      <main className='main'>
        <h1 className='main__title'>Stays in Finland</h1>

        <div className='stays'>
          <section className='section'>
            <h2 className='section__title'>
              Stylist apartment in center of the city
            </h2>
            <img
              className='section__img'
              src='https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80'
              alt=''
            />
            <div className='stay'>
              <div className='stay__tag-container'>
                <p className='stay__tag-title'>Super host</p>
              </div>
              <p className='stay__type'>Entire apartment . 2 beds</p>
              <div className='rating'>
                <img
                  className='rating__img'
                  src='/images/star_rate.svg'
                  alt='star rating icon'
                />
                <p className='rating__number'>4.40</p>
              </div>
            </div>
          </section>

          <section className='section'>
            <h2 className='section__title'>
              Stylist apartment in center of the city
            </h2>
            <img
              className='section__img'
              src='https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80'
              alt=''
            />
            <div className='stay'>
              <div className='stay__tag-container'>
                <p className='stay__tag-title'>Super host</p>
              </div>
              <p className='stay__type'>Entire apartment . 2 beds</p>
              <div className='rating'>
                <img
                  className='rating__img'
                  src='/images/star_rate.svg'
                  alt='star rating icon'
                />
                <p className='rating__number'>4.40</p>
              </div>
            </div>
          </section>

          <section className='section'>
            <h2 className='section__title'>
              Stylist apartment in center of the city
            </h2>
            <img
              className='section__img'
              src='https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80'
              alt=''
            />
            <div className='stay'>
              <div className='stay__tag-container'>
                <p className='stay__tag-title'>Super host</p>
              </div>
              <p className='stay__type'>Entire apartment . 2 beds</p>
              <div className='rating'>
                <img
                  className='rating__img'
                  src='/images/star_rate.svg'
                  alt='star rating icon'
                />
                <p className='rating__number'>4.40</p>
              </div>
            </div>
          </section>

          <section className='section'>
            <h2 className='section__title'>
              Stylist apartment in center of the city
            </h2>
            <img
              className='section__img'
              src='https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80'
              alt=''
            />
            <div className='stay'>
              <div className='stay__tag-container'>
                <p className='stay__tag-title'>Super host</p>
              </div>
              <p className='stay__type'>Entire apartment . 2 beds</p>
              <div className='rating'>
                <img
                  className='rating__img'
                  src='/images/star_rate.svg'
                  alt='star rating icon'
                />
                <p className='rating__number'>4.40</p>
              </div>
            </div>
          </section>

          <section className='section'>
            <h2 className='section__title'>
              Stylist apartment in center of the city
            </h2>
            <img
              className='section__img'
              src='https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80'
              alt=''
            />
            <div className='stay'>
              <div className='stay__tag-container'>
                <p className='stay__tag-title'>Super host</p>
              </div>
              <p className='stay__type'>Entire apartment . 2 beds</p>
              <div className='rating'>
                <img
                  className='rating__img'
                  src='/images/star_rate.svg'
                  alt='star rating icon'
                />
                <p className='rating__number'>4.40</p>
              </div>
            </div>
          </section>

          <section className='section'>
            <h2 className='section__title'>
              Stylist apartment in center of the city
            </h2>
            <img
              className='section__img'
              src='https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80'
              alt=''
            />
            <div className='stay'>
              <div className='stay__tag-container'>
                <p className='stay__tag-title'>Super host</p>
              </div>
              <p className='stay__type'>Entire apartment . 2 beds</p>
              <div className='rating'>
                <img
                  className='rating__img'
                  src='/images/star_rate.svg'
                  alt='star rating icon'
                />
                <p className='rating__number'>4.40</p>
              </div>
            </div>
          </section>

          <section className='section'>
            <h2 className='section__title'>
              Stylist apartment in center of the city
            </h2>
            <img
              className='section__img'
              src='https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80'
              alt=''
            />
            <div className='stay'>
              <div className='stay__tag-container'>
                <p className='stay__tag-title'>Super host</p>
              </div>
              <p className='stay__type'>Entire apartment . 2 beds</p>
              <div className='rating'>
                <img
                  className='rating__img'
                  src='/images/star_rate.svg'
                  alt='star rating icon'
                />
                <p className='rating__number'>4.40</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
