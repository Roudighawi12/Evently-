import {Link} from 'react-router-dom';
import EventCard from '../Components/EventCard';
import {events} from '../Data/eventsData';
import '../Styles/Home.css'

const Home = () => {
    const featuredEvents = events.slice(0, 3);

    return (
        <div>
            <div className='hero'>
                <div className='hero-content'>
                    <h1> Find and book your next event </h1>
                    <p> Browse concerts, sports, theater and more. </p>
                    <Link to='/Events' className='btn'> Browse events </Link>
                </div>
            </div>
            <div className='home-section'>
                <h2> Featured events </h2>
                <div className='featured-grid'>
                    {featuredEvents.map((event) => (
                        <EventCard key={event.id} id={event.id} title={event.title} date={event.date}
                         price={event.price} categoryId={event.categoryId} venueId={event.venueId} />
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Home;