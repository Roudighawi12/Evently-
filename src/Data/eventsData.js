export const categories = [
  { id: 1, name: 'Concerts' },
  { id: 2, name: 'Sports' },
  { id: 3, name: 'Theater' },
  { id: 4, name: 'Conferences' },
  { id: 5, name: 'Festivals' },
];

export const venues = [
  { id: 1, name: 'City Arena', city: 'Central City', capacity: 5000 },
  { id: 2, name: 'Grand Theater', city: 'Central City', capacity: 800 },
  { id: 3, name: 'Expo Hall', city: 'Lakeside', capacity: 2000 },
];

export const events = [
  { id: 1, title: 'Summer Rock Night', description: 'A live rock concert with three bands.', date: '2026-12-12T20:00', price: 25, totalTickets: 500, ticketsLeft: 320, categoryId: 1, venueId: 1 },
  { id: 2, title: 'City Derby Match', description: 'The big football match of the season.', date: '2026-12-18T18:30', price: 15, totalTickets: 4000, ticketsLeft: 2750, categoryId: 2, venueId: 1 },
  { id: 3, title: 'The Last Act', description: 'A new stage play in three acts.', date: '2026-12-20T19:00', price: 30, totalTickets: 400, ticketsLeft: 180, categoryId: 3, venueId: 2 },
  { id: 4, title: 'Tech Future Summit', description: 'A one-day conference on new technology.', date: '2027-01-10T09:00', price: 60, totalTickets: 1000, ticketsLeft: 640, categoryId: 4, venueId: 3 },
  { id: 5, title: 'Winter Lights Festival', description: 'Food, music, and lights all weekend.', date: '2027-01-15T16:00', price: 20, totalTickets: 1800, ticketsLeft: 1200, categoryId: 5, venueId: 3 },
  { id: 6, title: 'Acoustic Evening', description: 'A quiet evening of acoustic music.', date: '2027-01-22T20:30', price: 18, totalTickets: 300, ticketsLeft: 95, categoryId: 1, venueId: 2 },
];

export const users = [
  { id: 1, name: 'Admin', email: 'admin@tickets.com', role: 'admin' },
  { id: 2, name: 'Alex Morgan', email: 'alex@mail.com', role: 'user' },
  { id: 3, name: 'Sam Lee', email: 'sam@mail.com', role: 'user' },
];

export const bookings = [
  { id: 1, userId: 2, eventId: 1, quantity: 2, totalPrice: 50, status: 'Confirmed', createdAt: '2026-11-20' },
  { id: 2, userId: 2, eventId: 3, quantity: 1, totalPrice: 30, status: 'Confirmed', createdAt: '2026-11-21' },
  { id: 3, userId: 3, eventId: 2, quantity: 4, totalPrice: 60, status: 'Cancelled', createdAt: '2026-11-22' },
];