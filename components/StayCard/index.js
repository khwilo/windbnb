export default function StayCard({ title, photo, superHost, type, rating }) {
  return (
    <section className='section'>
      <h2 className='section__title'>{title}</h2>
      <img className='section__img' src={photo} alt={title} />
      <div className='stay section__stay'>
        <div className='stay__type'>
          {superHost ? <p className='stay__type-tag'>Super host</p> : null}
          <p className='stay__type-info'>{type}</p>
        </div>
        <div className='rating'>
          <img
            className='rating__img'
            src='/images/star_rate.svg'
            alt='star rating icon'
          />
          <p className='rating__number'>{rating}</p>
        </div>
      </div>
    </section>
  );
}
