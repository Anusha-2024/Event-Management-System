import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookingForm from '../components/BookingForm';
import FeedbackForm from '../components/FeedbackForm';
import eventService from '../services/eventService';

const eventImageMap = {
  "book carnival": "https://img.freepik.com/premium-vector/open-book-fun-park_1308-23086.jpg",
  "tech mela 2025": "https://img.freepik.com/free-vector/technology-background-with-gradient-colors_23-2149110132.jpg",
  "gaming expo": "https://content.wepik.com/statics/24188408/preview-page0.jpg",
  "sports mania": "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/bf56705e00fd0f606c7fba920a2a3df9_screen.jpg?ts=1702249560",
  "health & wellness fair": "https://img.freepik.com/free-photo/healthy-lifestyle-concept-dumbbell-bottle-vegetables-top-view_23-2147925805.jpg",
  "music mania": "https://th.bing.com/th/id/OIP.iFlqt4amMtnuUFXiRw935wHaHa?rs=1&pid=ImgDetMain",
  "bollywood beats": "https://variety.com/wp-content/uploads/2022/07/Music-Streaming-Wars.jpg?w=1000&h=563&crop=1",
  "career fair": "https://i0.wp.com/www.hrnasty.com/wp-content/uploads/2011/10/college-career-fair1.jpg",
  "ai bootcamp": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd-M_r7bEyuBQzUODeKwobumjZ2bnoB_uelw&s",
  "eco summit": "https://static.vecteezy.com/system/resources/previews/040/717/248/non_2x/eco-logo-with-green-leaves-and-the-word-eco-vector.jpg",
  "comic con": "https://images.template.net/444305/Comic-Con-Logo-Clipart-edit-online.png",
  "swad india fest": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1200px-Good_Food_Display_-_NCI_Visuals_Online.jpg",
  "fashion fiesta": "https://pbs.twimg.com/profile_images/575727612904931328/z_JIi2Zc_400x400.jpeg",
  "food fusion": "https://cdn6.f-cdn.com/contestentries/2356472/73179244/659c34e207b79_thumb900.jpg",
  "startup conclave": "https://www.shutterstock.com/image-photo/startup-conclave-logo-600nw-2471813435.jpg",
  "science fest": "https://traffordpalazzo.co.uk/pictures/News-Blogs/~EDvkckOk/Science_Fest_Graphic.png",
  "dance fever": "https://alchetron.com/cdn/dance-fever-62cc5951-299a-4a26-8b00-ed8f168d5ab-resize-750.jpeg",
  "coding marathon": "https://th.bing.com/th/id/OIP.Ny2zSij__j5eSfGb-V-zNQHaHa?rs=1&pid=ImgDetMain",
  "film fest": "https://img.freepik.com/premium-photo/international-film-festival-images_951220-86825.jpg",
  "photography walk": "https://media1.thehungryjpeg.com/thumbs2/ori_3677776_sfxgxk8no4nzgyxdwf9w3u6ova1ngmejkzsfs7iz_photography-logo.jpg"
};


function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [feedbackSuccess, setFeedbackSuccess] = useState(false);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    async function fetchEvent() {
      try {
        const data = await eventService.getEventById(id);
        setEvent(data);
      } catch (error) {
        console.error('Failed to fetch event details', error);
      } finally {
        setLoading(false);
      }
    }
    fetchEvent();
  }, [id]);

  const handleStarClick = (star) => {
    setRating(star);
  };

  if (loading) {
    return <div className="centered-loading"><p>Loading event details...</p></div>;
  }

  if (!event) {
    return <div className="centered-loading"><p style={{ color: 'red' }}>Event not found.</p></div>;
  }

  const normalizedTitle = event.title.toLowerCase().trim();
  const bgImage = eventImageMap[normalizedTitle] || 'https://via.placeholder.com/1200x600?text=Event+Image+Not+Found';



  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem'
      }}
    >
      <div className="glass-card fade-in">
        <h2>{event.title}</h2>
        <p>{event.description}</p>

        <div className="event-meta">
          <div><strong>Date:</strong><br />{new Date(event.date).toLocaleString()}</div>
          <div><strong>Location:</strong><br />{event.location}</div>
        </div>

        <section className="form-section">
          <h3>Book this Event</h3>
          {bookingSuccess ? (
            <p className="success-msg">🎉 Booking successful!</p>
          ) : (
            <BookingForm eventId={id} onBookingSuccess={() => setBookingSuccess(true)} />
          )}
        </section>

        <section className="form-section">
          <h3>Submit Feedback</h3>

          <div className="rating-stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`star ${star <= rating ? 'filled' : ''}`}
                onClick={() => handleStarClick(star)}
              >
                ★
              </span>
            ))}
          </div>

          {feedbackSuccess ? (
            <p className="feedback-msg">🙌 Thank you for your feedback!</p>
          ) : (
            <FeedbackForm eventId={id} onFeedbackSubmitted={() => setFeedbackSuccess(true)} />
          )}
        </section>
      </div>

      <style>{`
        body {
          font-family: 'Poppins', sans-serif;
        }

        .centered-loading {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.5rem;
        }

        .glass-card {
          font-family: 'Poppins', sans-serif;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(18px);
          border-radius: 20px;
          padding: 3rem;
          max-width: 900px;
          width: 100%;
          color: #fff;
          box-shadow: 0 0 40px rgba(0, 0, 0, 0.3);
        }

        .glass-card h2 {
          font-family: 'Playfair Display', serif;
          font-size: 2.8rem;
          margin-bottom: 1rem;
          text-align: center;
        }

        .glass-card p {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          text-align: center;
        }

        .event-meta {
          display: flex;
          justify-content: space-around;
          padding: 1rem;
          margin-bottom: 2rem;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 12px;
          font-size: 1rem;
        }

        .form-section {
          margin-top: 2rem;
          text-align: center;
        }

        .form-section h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.8rem;
          margin-bottom: 1rem;
        }

        .success-msg, .feedback-msg {
          background-color: rgba(0, 255, 0, 0.1);
          padding: 1rem;
          border-radius: 10px;
          color: #4BB543;
          margin-top: 1rem;
          animation: fadeIn 1s ease-out forwards;
        }

        .feedback-msg {
          background-color: rgba(255, 215, 0, 0.1);
          color: #FFD700;
        }

        .rating-stars {
          margin-bottom: 1rem;
        }

        .star {
          font-size: 2rem;
          cursor: pointer;
          color: #ccc;
          transition: color 0.3s;
        }

        .star.filled {
          color: #FFD700;
        }

        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .fade-in {
          animation: fadeIn 1s ease-out;
        }

        @media (max-width: 768px) {
          .event-meta {
            flex-direction: column;
            gap: 1rem;
          }

          .glass-card {
            padding: 2rem;
          }
        }
      `}</style>
    </div>
  );
}

export default EventDetails;
