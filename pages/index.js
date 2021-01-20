import Head from 'next/head';
import React from 'react';

import StayCard from '../components/StayCard';
import staysData from '../data/stays.json';
import { useStays } from '../hooks';
import { locationSearchOptions as searchOptions } from '../util';

export default function Home() {
  const [stays, locationOptions, guestsCount, location, dispatch] = useStays(
    staysData
  );

  React.useEffect(() => {
    dispatch({ type: 'LOAD_INITIAL_DATA', payload: staysData });
    dispatch({
      type: 'ADD_SEARCH_OPTIONS',
      payload: searchOptions(staysData),
    });
  }, []);

  React.useEffect(() => {
    dispatch({ type: 'FILTER_STAYS', payload: location });
  }, [location]);

  const handleLocationChange = (event) => {
    const { name, value } = event.target;
    dispatch({ type: 'UPDATE_LOCATION', payload: value });
  };

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
                <select
                  name='location'
                  id='location-select'
                  value={location}
                  onChange={handleLocationChange}
                >
                  <option value=''>All Stays</option>
                  {locationOptions.map((loc, index) => (
                    <option key={index} value={loc.city}>
                      {loc.city}, {loc.country}
                    </option>
                  ))}
                </select>
              </div>
              <div className='form__group'>
                <input
                  type='text'
                  name='guests-count'
                  value={guestsCount || 0}
                  id='guests-count'
                  aria-label='guests-count'
                  placeholder='Add guests'
                  onChange={(event) => {
                    const { value } = event.target;
                    dispatch({
                      type: 'UPDATE_GUESTS_COUNT',
                      payload: parseInt(value, 10),
                    });
                  }}
                />
              </div>
              <div>
                <img src='/images/search.svg' alt='search icon' />
              </div>
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
