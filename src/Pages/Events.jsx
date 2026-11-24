import {useState} from 'react';
import EventCard from '../Components/EventCard';
import {events, categories} from '../Data/eventsData';
import '../Styles/Events.css'

const Events = () => {
    const [selectedCategory, setSelectedCategory] = useState(0); // 0 means All

    let filteredEvents = events;
    if(selectedCategory !== 0)
    {
        filteredEvents = events.filter((event) => event.categoryId === selectedCategory);
    }

    return (
        <div className='events-container'>
            <h1> Events </h1>
            <div className='categoryFilter'>
                <button className={selectedCategory === 0 ? 'chip active' : 'chip'}
                 onClick={() => setSelectedCategory(0)}> All </button>
                {categories.map((category) => (
                    <button key={category.id}
                     className={selectedCategory === category.id ? 'chip active' : 'chip'}
                     onClick={() => setSelectedCategory(category.id)}> {category.name} </button>
                ))}
            </div>
            <div className='events-grid'>
                {filteredEvents.map((event) => (
                    <EventCard key={event.id} id={event.id} title={event.title} date={event.date}
                     price={event.price} categoryId={event.categoryId} venueId={event.venueId} />
                ))}
            </div>
        </div>
    )
}
export default Events;