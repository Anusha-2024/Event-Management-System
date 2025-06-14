import EventModel from '../models/eventModel.js';

export const getAllEvents = async (req, res, next) => {
  try {
    const events = await EventModel.getAllEvents();

    // Map event titles to updated image URLs
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

    // Add image URL to each event if title matches
    const eventsWithImages = events.map(event => ({
      ...event,
      image: eventImageMap[event.title.toLowerCase()] || event.image || 'https://via.placeholder.com/300x180?text=No+Image'
    }));

    res.json(eventsWithImages);
  } catch (error) {
    next(error);
  }
};

export const getEventById = async (req, res, next) => {
  try {
    const event = await EventModel.getEventById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.json(event);
  } catch (error) {
    next(error);
  }
};

export const createEvent = async (req, res, next) => {
  try {
    const eventId = await EventModel.createEvent(req.body);
    res.status(201).json({ id: eventId });
  } catch (error) {
    next(error);
  }
};

export const updateEvent = async (req, res, next) => {
  try {
    await EventModel.updateEvent(req.params.id, req.body);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

export const deleteEvent = async (req, res, next) => {
  try {
    await EventModel.deleteEvent(req.params.id);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
