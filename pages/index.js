import Head from 'next/head';
import React from 'react';

import StayCard from '../components/StayCard';
import stays from '../data/stays.json';
import { locationSearchOptions as searchOptions } from '../util';

export default function Home() {
  const [locations, setLocations] = React.useState([]);

  React.useEffect(() => {
    const options = searchOptions(stays);
    setLocations(options);
  }, []);

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
            <form className='form'>
              <div className='form__group'>
                <select name='locations' id='location-select'>
                  {locations.map((location, index) => (
                    <option
                      key={index}
                      value={`${location.city}-${location.country}`}
                    >
                      {location.city}, {location.country}
                    </option>
                  ))}
                </select>
              </div>
              <div className='form__group'></div>
            </form>
          </div>
        </header>

        <main className='main'>
          <div className='main__sectionTop'>
            <h1 className='main__title'>Stays in Finland</h1>
            <p className='stay-count'>{`${stays.length}+ stays`}</p>
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
