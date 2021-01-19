import Head from 'next/head';

import StayCard from '../components/StayCard';
import stays from '../data/stays.json';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Windbnb</title>
        <link rel='icon' href='/images/devchallenges.png' />
      </Head>

      <div className='wrapper'>
        <header className='header'>
          <img src='/images/logo.svg' className='logo-image' />

          <div className='header__form'>
            {/* TODO: Add input fields here */}
            <p>Select input</p>
          </div>
        </header>

        <main className='main'>
          <div className='main__sectionTop'>
            <h1 className='main__title'>Stays in Finland</h1>
            <p className='stay-count'>12+ stays</p>
          </div>

          <div className='stays'>
            {stays.map((stay, index) => (
              <StayCard
                key={index}
                title={stay.title}
                photo={stay.photo}
                superHost={stay.superHost}
                type={stay.type}
                rating={stay.rating}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
