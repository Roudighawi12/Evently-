import {events, bookings} from '../Data/eventsData';
import '../Styles/Tables.css'

const MyBookings = () => {
    // demo: the bookings of user number 2
    const myBookings = bookings.filter((booking) => booking.userId === 2);

    return (
        <div className='page-container'>
            <h1> My Bookings </h1>
            <div className='table-box'>
                <table>
                    <thead>
                        <tr>
                            <th> Event </th>
                            <th> Booked on </th>
                            <th> Tickets </th>
                            <th> Total </th>
                            <th> Status </th>
                        </tr>
                    </thead>
                    <tbody>
                        {myBookings.map((booking) => {
                            const event = events.find((e) => e.id === booking.eventId);
                            return (
                                <tr key={booking.id}>
                                    <td> {event.title} </td>
                                    <td> {booking.createdAt} </td>
                                    <td> {booking.quantity} </td>
                                    <td> ${booking.totalPrice} </td>
                                    <td>
                                        <span className={booking.status === 'Cancelled' ? 'status cancelled' : 'status'}>
                                            {booking.status}
                                        </span>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default MyBookings;