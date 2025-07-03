export const hotels = [
  { id: 1, name: "Foodies Junction", location: "Delhi", img: "/hotel1.jpg" },
  { id: 2, name: "Spice Villa", location: "Mumbai", img: "/hotel2.jpg" },
  { id: 3, name: "Urban Bites", location: "Bangalore", img: "/hotel3.jpg" },
  { id: 4, name: "Tandoori Nights", location: "Hyderabad", img: "/hotel4.jpg" },
  { id: 5, name: "The Curry House", location: "Chennai", img: "/hotel5.jpg" },
  { id: 6, name: "Delhi Diner", location: "Delhi", img: "/hotel6.jpg" },
  { id: 7, name: "Mumbai Masala", location: "Mumbai", img: "/hotel7.jpg" },
  { id: 8, name: "Bangalore BBQ", location: "Bangalore", img: "/hotel8.jpg" },
  { id: 9, name: "Hyderabadi Heat", location: "Hyderabad", img: "/hotel9.jpg" },
  { id: 10, name: "Chennai Chaats", location: "Chennai", img: "/hotel10.jpg" },
  { id: 11, name: "Capital Feast", location: "Delhi", img: "/hotel11.jpg" },
  { id: 12, name: "South Spice", location: "Chennai", img: "/hotel12.jpg" },
];

export const foodItems = [
  // Delhi (10)
  {
    id: 101, name: "Margherita Pizza", price: 199, hotelId: 1, img: "https://cdn.loveandlemons.com/wp-content/uploads/2023/07/margherita-pizza-recipe-719x1024.jpg", rating: 4.5,
    description: "Classic cheese pizza with tomato sauce and fresh basil.",
    cookingMethod: "Baked in a stone oven at 400°C for 12 minutes.",
    toppings: ["Extra Cheese", "Olives", "Basil"]
  },
  {
    id: 102, name: "Tomato Soup", price: 89, hotelId: 1, img: "/soup.jpg", rating: 4.1,
    description: "Creamy tomato soup served with croutons.",
    cookingMethod: "Slow-simmered with herbs for 30 minutes.",
    toppings: ["Cream", "Parsley", "Croutons"]
  },
  {
    id: 103, name: "Paneer Wrap", price: 149, hotelId: 6, img: "/wrap.jpg", rating: 4.3,
    description: "Spicy paneer rolled in soft rumali roti.",
    cookingMethod: "Grilled paneer cubes and sautéed veggies.",
    toppings: ["Cheese", "Lettuce", "Chutney"]
  },
  {
    id: 104, name: "Dahi Bhalla", price: 99, hotelId: 6, img: "/dahi.jpg", rating: 4.2,
    description: "Soft lentil dumplings soaked in yogurt and spices.",
    cookingMethod: "Fried and soaked overnight in yogurt.",
    toppings: ["Pomegranate", "Tamarind", "Mint"]
  },
  {
    id: 105, name: "Chole Bhature", price: 169, hotelId: 11, img: "/chole.jpg", rating: 4.5,
    description: "Spicy chickpeas served with fluffy fried bread.",
    cookingMethod: "Slow-cooked chickpeas with masala.",
    toppings: ["Onion", "Green Chili", "Lemon"]
  },
  {
    id: 106, name: "Butter Chicken", price: 299, hotelId: 11, img: "/butterchicken.jpg", rating: 4.6,
    description: "Rich and creamy North Indian chicken curry.",
    cookingMethod: "Tandoor-cooked chicken simmered in butter gravy.",
    toppings: ["Cream", "Coriander", "Butter"]
  },
  {
    id: 107, name: "Samosa", price: 20, hotelId: 1, img: "/samosa.jpg", rating: 4.0,
    description: "Crispy triangle filled with spicy potato mix.",
    cookingMethod: "Deep-fried golden brown.",
    toppings: ["Mint Chutney", "Tamarind", "Onion"]
  },
  {
    id: 108, name: "Tandoori Roti", price: 15, hotelId: 11, img: "/roti.jpg", rating: 4.1,
    description: "Whole wheat roti baked in clay oven.",
    cookingMethod: "Tandoor-cooked over charcoal flame.",
    toppings: ["Butter", "Ghee"]
  },
  {
    id: 109, name: "Stuffed Paratha", price: 80, hotelId: 6, img: "/paratha.jpg", rating: 4.2,
    description: "Flaky paratha filled with potato or paneer.",
    cookingMethod: "Griddled with ghee.",
    toppings: ["Butter", "Pickle", "Curd"]
  },
  {
    id: 110, name: "Rajma Chawal", price: 120, hotelId: 1, img: "/rajma.jpg", rating: 4.3,
    description: "Red kidney beans curry with rice.",
    cookingMethod: "Pressure-cooked with Punjabi masala.",
    toppings: ["Onion", "Lemon", "Coriander"]
  },

  // Mumbai (10)
  {
    id: 111, name: "Pav Bhaji", price: 149, hotelId: 2, img: "/pavbhaji.jpg", rating: 4.7,
    description: "Mixed veg curry with buttery pav.",
    cookingMethod: "Griddle-cooked mash with spices.",
    toppings: ["Onion", "Lemon", "Butter"]
  },
  {
    id: 112, name: "Vada Pav", price: 30, hotelId: 2, img: "/vadapav.jpg", rating: 4.4,
    description: "Spicy potato fritter in soft bun.",
    cookingMethod: "Deep-fried vada, toasted bun.",
    toppings: ["Chutney", "Green Chili", "Garlic Powder"]
  },
  {
    id: 113, name: "Chicken Frankie", price: 120, hotelId: 7, img: "/frankie.jpg", rating: 4.2,
    description: "Spiced chicken roll in soft wrap.",
    cookingMethod: "Grilled chicken wrapped with onions.",
    toppings: ["Egg", "Mayo", "Lettuce"]
  },
  {
    id: 114, name: "Bombay Sandwich", price: 90, hotelId: 2, img: "/sandwich.jpg", rating: 4.3,
    description: "Triple layered veg sandwich with chutney.",
    cookingMethod: "Grilled or served cold.",
    toppings: ["Beetroot", "Potato", "Chutney"]
  },
  {
    id: 115, name: "Ragda Pattice", price: 100, hotelId: 7, img: "/ragda.jpg", rating: 4.1,
    description: "Potato patties with white peas curry.",
    cookingMethod: "Boiled peas, shallow-fried patties.",
    toppings: ["Sev", "Onion", "Mint"]
  },
  {
    id: 116, name: "Misal Pav", price: 110, hotelId: 7, img: "/misal.jpg", rating: 4.5,
    description: "Spicy sprout curry with pav.",
    cookingMethod: "Tempered curry mix.",
    toppings: ["Farsan", "Onion", "Lemon"]
  },
  {
    id: 117, name: "Chicken Biryani", price: 299, hotelId: 2, img: "/biryani.jpg", rating: 4.6,
    description: "Layered rice with marinated chicken.",
    cookingMethod: "Dum-cooked in sealed pot.",
    toppings: ["Raita", "Onion", "Fried Cashew"]
  },
  {
    id: 118, name: "Veg Biryani", price: 199, hotelId: 7, img: "/veg-biryani.jpg", rating: 4.3,
    description: "Mixed vegetables layered with spiced rice.",
    cookingMethod: "Pressure cooked or dum-style.",
    toppings: ["Mint", "Fried Onion", "Lemon"]
  },
  {
    id: 119, name: "Bhendi Fry", price: 89, hotelId: 2, img: "/bhendi.jpg", rating: 4.0,
    description: "Crispy okra sautéed with spices.",
    cookingMethod: "Shallow fried with gram flour.",
    toppings: ["Curry Leaves", "Lemon", "Onion"]
  },
  {
    id: 120, name: "Poha", price: 60, hotelId: 2, img: "/poha.jpg", rating: 4.2,
    description: "Flattened rice with turmeric and peanuts.",
    cookingMethod: "Stir-fried for light breakfast.",
    toppings: ["Sev", "Coriander", "Lemon"]
  },

  // Bangalore (10)
  {
    id: 121, name: "Set Dosa", price: 70, hotelId: 3, img: "/dosa.jpg", rating: 4.3,
    description: "Soft and spongy dosas served as a set of 3.",
    cookingMethod: "Pan-fried on tawa.",
    toppings: ["Chutney", "Sambar", "Butter"]
  },
  {
    id: 122, name: "Idli Vada", price: 55, hotelId: 8, img: "/idli.jpg", rating: 4.5,
    description: "Steamed idlis and crispy medu vada.",
    cookingMethod: "Steamed & deep-fried combo.",
    toppings: ["Chutney", "Sambar", "Coconut Oil"]
  },
  {
    id: 123, name: "Bisi Bele Bath", price: 130, hotelId: 3, img: "/bbb.jpg", rating: 4.4,
    description: "Spiced rice-lentil dish with vegetables.",
    cookingMethod: "Pressure-cooked in spice mix.",
    toppings: ["Boondi", "Ghee", "Coriander"]
  },
  {
    id: 124, name: "Mangalore Buns", price: 45, hotelId: 8, img: "/buns.jpg", rating: 4.2,
    description: "Sweet fluffy puri made with banana dough.",
    cookingMethod: "Deep-fried to golden brown.",
    toppings: ["Coconut Chutney", "Sambar"]
  },
  {
    id: 125, name: "Rava Idli", price: 65, hotelId: 3, img: "/ravaidli.jpg", rating: 4.3,
    description: "Semolina idli with veggies.",
    cookingMethod: "Steamed with Eno and spices.",
    toppings: ["Chutney", "Ghee", "Cashew"]
  },
  {
    id: 126, name: "Neer Dosa", price: 80, hotelId: 8, img: "/neerdosa.jpg", rating: 4.2,
    description: "Thin rice dosa from Mangalore.",
    cookingMethod: "Made with soaked rice batter.",
    toppings: ["Coconut Chutney", "Veg Curry"]
  },
  {
    id: 127, name: "Veg Cutlet", price: 50, hotelId: 8, img: "/cutlet.jpg", rating: 4.1,
    description: "Mashed vegetable patties.",
    cookingMethod: "Breaded and shallow fried.",
    toppings: ["Ketchup", "Onion Rings"]
  },
  {
    id: 128, name: "Chitranna", price: 60, hotelId: 3, img: "/chitranna.jpg", rating: 4.0,
    description: "Lemon-flavored rice with spices.",
    cookingMethod: "Tempered rice with curry leaves.",
    toppings: ["Peanuts", "Coconut", "Coriander"]
  },
  {
    id: 129, name: "Upma", price: 55, hotelId: 3, img: "/upma.jpg", rating: 4.2,
    description: "Semolina porridge with vegetables.",
    cookingMethod: "Dry-roasted and cooked with water.",
    toppings: ["Ghee", "Coconut", "Curry Leaves"]
  },
  {
    id: 130, name: "Kesari Bath", price: 65, hotelId: 8, img: "/kesari.jpg", rating: 4.4,
    description: "Sweet semolina dessert.",
    cookingMethod: "Cooked with ghee and saffron.",
    toppings: ["Cashew", "Raisin", "Ghee"]
  },
];
