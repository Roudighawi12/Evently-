import {useState} from 'react';
import {useParams} from 'react-router-dom';
import {events, categories, venues} from '../Data/eventsData';
import '../Styles/EventDetails.css'

const EventDetails = () => {
    const {id} = useParams();
    const [quantity, setQuantity] = useState(1);

    const event = events.find((e) => e.id === Number(id));
    if(event == null)
    {
        return <h2> Event not found </h2>
    }

    const category = categories.find((c) => c.id === event.categoryId);
    const venue = venues.find((v) => v.id === event.venueId);
    const eventDate = new Date(event.date).toLocaleString('en-US', {dateStyle: 'medium', timeStyle: 'short'});
    const total = quantity * event.price;

    const handleBook = () =>
    {
        alert('Please log in or register to book tickets');
    }

    return (
        <div className='details-container'>
            <div className='details-info'>
                <div className='details-image'> Event image </div>
                <span className='details-category'> {category.name} </span>
                <h1> {event.title} </h1>
                <p className='details-meta'>
                    Date: {eventDate} <br />
                    Venue: {venue.name}, {venue.city} <br />
                    Tickets left: {event.ticketsLeft}
                </p>
                <p> {event.description} </p>
            </div>
            <div className='booking-box'>
                <h2> Book tickets </h2>
                <div className='booking-row'> <span> Price per ticket </span> <span> ${event.price} </span> </div>
                <label htmlFor='quantity'> Quantity </label>
                <input id='quantity' type='number' min='1' max={event.ticketsLeft} value={quantity}
                 onChange={(e) => setQuantity(Number(e.target.value))} />
                <div className='booking-row'> <span> Total </span> <span className='booking-total'> ${total} </span> </div>
                <button onClick={handleBook}> Book now </button>
            </div>
        </div>
    )
}
export default EventDetails;