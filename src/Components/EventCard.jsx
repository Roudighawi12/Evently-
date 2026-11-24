import {Link} from 'react-router-dom';
import {categories, venues} from '../Data/eventsData';
import '../Styles/EventCard.css'

const EventCard = ({id, title, date, price, categoryId, venueId}) => {
    // javascript
    const category = categories.find((c) => c.id === categoryId);
    const venue = venues.find((v) => v.id === venueId);
    const eventDate = new Date(date).toLocaleDateString('en-US', {month: 'short', day: 'numeric', year: 'numeric'});

    return (
        <div className='eventCard'>
            <div className='eventImage'> Event image </div>
            <div className='eventBody'>
                <span className='eventCategory'> {category.name} </span>
                <h2> {title} </h2>
                <p> {eventDate} · {venue.name}, {venue.city} </p>
                <div className='eventFooter'>
                    <span className='eventPrice'> ${price} </span>
                    <Link to={`/EventDetails/${id}`}> View details </Link>
                </div>
            </div>
        </div>
    )
}
export default EventCard;