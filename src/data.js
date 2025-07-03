export const hotels = [
  { id: 1, name: "Foodies Junction", location: "Delhi", img: "https://b.zmtcdn.com/data/pictures/7/20185647/49dc9aca81aa82493396ec55d2f5ecf5.jpg" },
  { id: 2, name: "Spice Villa", location: "Mumbai", img: "https://www.venuelook.com/_next/image?url=https%3A%2F%2Fcdn.venuelook.com%2Fuploads%2Fspace_21985%2F1579335018_595x400.png&w=1080&q=75" },
  { id: 3, name: "Urban Bites", location: "Bangalore", img: "  https://content.jdmagicbox.com/v2/comp/bangalore/t2/080pxx80.xx80.240326201105.h7t2/catalogue/urban-bites-bangalore-restaurants-b8kbz9v40e.jpg " },
  { id: 4, name: "Tandoori Nights", location: "Hyderabad", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/4c/8c/85/tandoori-night-s-original.jpg?w=500&h=-1&s=1   " },
  { id: 5, name: "The Curry House", location: "Chennai", img: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh8Jkbj1UR94kVgZPo6TYb04YVftTrqMhcOg&s  " },
  { id: 6, name: "Delhi Diner", location: "Delhi", img: "  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuJ8EpxP2m7OCwj5IHHrB627jFkJ6_eNeLTg&s " },
  { id: 7, name: "Mumbai Masala", location: "Mumbai", img: " https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/26/f8/65/foto.jpg?w=900&h=-1&s=1   " },
  { id: 8, name: "Bangalore BBQ", location: "Bangalore", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTssuhtkd7K_bafmyLCfUkcRY0PxUZ5xmX_dQ&s "     },
  { id: 9, name: "Hyderabadi Heat", location: "Hyderabad", img: "   https://z.cdrst.com/foto/hotel-sf/128b8128/granderesp/foto-hotel-128b767e.jpg  " },
  { id: 10, name: "Chennai Chaats", location: "Chennai", img: "    https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/1a/08/67/saravana-bhavan.jpg?w=700&h=400&s=1   " },
  { id: 11, name: "Capital Feast", location: "Delhi", img: "   https://image.wedmegood.com/resized/720X/uploads/member/934528/1576937126_Screenshot_1.jpg     " },
  { id: 12, name: "South Spice", location: "Chennai", img: "    https://content.jdmagicbox.com/v2/comp/chennai/n6/044pxx44.xx44.230427224935.u4n6/catalogue/hotel-south-spices-minjur-chennai-restaurants-xm7smgd343-250.jpg    " },
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
    id: 102, name: "Tomato Soup", price: 89, hotelId: 1, img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/11/tomato-soup-recipe.jpg", rating: 4.1,
    description: "Creamy tomato soup served with croutons.",
    cookingMethod: "Slow-simmered with herbs for 30 minutes.",
    toppings: ["Cream", "Parsley", "Croutons"]
  },
  {
    id: 103, name: "Paneer Wrap", price: 149, hotelId: 6, img: "https://www.vegrecipesofindia.com/wp-content/uploads/2017/01/paneer-kathi-roll-recipe-1.jpg", rating: 4.3,
    description: "Spicy paneer rolled in soft rumali roti.",
    cookingMethod: "Grilled paneer cubes and sautéed veggies.",
    toppings: ["Cheese", "Lettuce", "Chutney"]
  },
  {
    id: 104, name: "Dahi Bhalla", price: 99, hotelId: 6, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3QEe9gaLQSdbhgoq5wP_97GMKw6CedWlrLQ&s", rating: 4.2,
    description: "Soft lentil dumplings soaked in yogurt and spices.",
    cookingMethod: "Fried and soaked overnight in yogurt.",
    toppings: ["Pomegranate", "Tamarind", "Mint"]
  },
  {
    id: 105, name: "Chole Bhature", price: 169, hotelId: 11, img: "https://chefadora.b-cdn.net/medium_23ff54faa8628ac0b378003d51b400e4_511694cd35.jpg", rating: 4.5,
    description: "Spicy chickpeas served with fluffy fried bread.",
    cookingMethod: "Slow-cooked chickpeas with masala.",
    toppings: ["Onion", "Green Chili", "Lemon"]
  },
  {
    id: 106, name: "Butter Chicken", price: 299, hotelId: 11, img: "https://www.spiceroots.com/spiceroots/wp-content/uploads/2008/05/butterchicken-1024x682.jpg", rating: 4.6,
    description: "Rich and creamy North Indian chicken curry.",
    cookingMethod: "Tandoor-cooked chicken simmered in butter gravy.",
    toppings: ["Cream", "Coriander", "Butter"]
  },
  {
    id: 107, name: "Samosa", price: 20, hotelId: 1, img: "https://static.toiimg.com/thumb/61050397.cms?imgsize=246859&width=800&height=800", rating: 4.0,
    description: "Crispy triangle filled with spicy potato mix.",
    cookingMethod: "Deep-fried golden brown.",
    toppings: ["Mint Chutney", "Tamarind", "Onion"]
  },
  {
    id: 108, name: "Tandoori Roti", price: 15, hotelId: 11, img: "https://www.tarladalal.com/media/recipe/method/2025/01/16/tandoori-roti_9659-5-198090.webp", rating: 4.1,
    description: "Whole wheat roti baked in clay oven.",
    cookingMethod: "Tandoor-cooked over charcoal flame.",
    toppings: ["Butter", "Ghee"]
  },
  {
    id: 109, name: "Stuffed Paratha", price: 80, hotelId: 6, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrSDK4UaWhTXy-MsSZF-QBunAieMQxcovNog&s", rating: 4.2,
    description: "Flaky paratha filled with potato or paneer.",
    cookingMethod: "Griddled with ghee.",
    toppings: ["Butter", "Pickle", "Curd"]
  },
  {
    id: 110, name: "Rajma Chawal", price: 120, hotelId: 1, img: "https://www.indianfoodforever.com/iffwd/wp-content/uploads/rajma-chawal-500x450.jpg", rating: 4.3,
    description: "Red kidney beans curry with rice.",
    cookingMethod: "Pressure-cooked with Punjabi masala.",
    toppings: ["Onion", "Lemon", "Coriander"]
  },

  // Mumbai (10)
  {
    id: 111, name: "Pav Bhaji", price: 149, hotelId: 2, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbAkmrFvae2JywfLhlJztbFmrlan9MEqYpbg&s", rating: 4.7,
    description: "Mixed veg curry with buttery pav.",
    cookingMethod: "Griddle-cooked mash with spices.",
    toppings: ["Onion", "Lemon", "Butter"]
  },
  {
    id: 112, name: "Vada Pav", price: 30, hotelId: 2, img: "https://blog.swiggy.com/wp-content/uploads/2024/11/Image-1_mumbai-vada-pav-1024x538.png", rating: 4.4,
    description: "Spicy potato fritter in soft bun.",
    cookingMethod: "Deep-fried vada, toasted bun.",
    toppings: ["Chutney", "Green Chili", "Garlic Powder"]
  },
  {
    id: 113, name: "Chicken Frankie", price: 120, hotelId: 7, img: "https://www.licious.in/blog/wp-content/uploads/2022/06/shutterstock_311878256-750x750.jpg", rating: 4.2,
    description: "Spiced chicken roll in soft wrap.",
    cookingMethod: "Grilled chicken wrapped with onions.",
    toppings: ["Egg", "Mayo", "Lettuce"]
  },
  {
    id: 114, name: "Bombay Sandwich", price: 90, hotelId: 2, img: "https://vanitascorner.com/wp-content/uploads/2023/04/Bombay-Sandwich-VC.jpg", rating: 4.3,
    description: "Triple layered veg sandwich with chutney.",
    cookingMethod: "Grilled or served cold.",
    toppings: ["Beetroot", "Potato", "Chutney"]
  },
  {
    id: 115, name: "Ragda Pattice", price: 100, hotelId: 7, img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/ragda-patties-recipe-500x500.jpg", rating: 4.1,
    description: "Potato patties with white peas curry.",
    cookingMethod: "Boiled peas, shallow-fried patties.",
    toppings: ["Sev", "Onion", "Mint"]
  },
  {
    id: 116, name: "Misal Pav", price: 110, hotelId: 7, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUNZbBx89oWYecQHm1sXljQBKszYxNFWknog&s", rating: 4.5,
    description: "Spicy sprout curry with pav.",
    cookingMethod: "Tempered curry mix.",
    toppings: ["Farsan", "Onion", "Lemon"]
  },
  {
    id: 117, name: "Chicken Biryani", price: 299, hotelId: 2, img: "https://www.kannammacooks.com/wp-content/uploads/buhari-hotel-chennai-chicken-biryani-recipe-1-4.jpg", rating: 4.6,
    description: "Layered rice with marinated chicken.",
    cookingMethod: "Dum-cooked in sealed pot.",
    toppings: ["Raita", "Onion", "Fried Cashew"]
  },
  {
    id: 118, name: "Veg Biryani", price: 199, hotelId: 7, img: "https://i.ytimg.com/vi/Do7ZdUodDdw/maxresdefault.jpg", rating: 4.3,
    description: "Mixed vegetables layered with spiced rice.",
    cookingMethod: "Pressure cooked or dum-style.",
    toppings: ["Mint", "Fried Onion", "Lemon"]
  },
  {
    id: 119, name: "Bhendi Fry", price: 89, hotelId: 2, img: "https://cdn3.foodviva.com/static-content/food-images/curry-recipes/stuffed-bhindi-recipe/stuffed-bhindi-recipe.jpg", rating: 4.0,
    description: "Crispy okra sautéed with spices.",
    cookingMethod: "Shallow fried with gram flour.",
    toppings: ["Curry Leaves", "Lemon", "Onion"]
  },
  {
    id: 120, name: "Poha", price: 60, hotelId: 2, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrHbt5xMup6YQV75XUtbc4phhnYY2sBAOwaQ&s", rating: 4.2,
    description: "Flattened rice with turmeric and peanuts.",
    cookingMethod: "Stir-fried for light breakfast.",
    toppings: ["Sev", "Coriander", "Lemon"]
  },

  // Bangalore (10)
  {
    id: 121, name: "Set Dosa", price: 70, hotelId: 3, img: "https://vanitascorner.com/wp-content/uploads/2021/10/Set-Dosa.jpg", rating: 4.3,
    description: "Soft and spongy dosas served as a set of 3.",
    cookingMethod: "Pan-fried on tawa.",
    toppings: ["Chutney", "Sambar", "Butter"]
  },
  {
    id: 122, name: "Idli Vada", price: 55, hotelId: 8, img: "https://images.healthshots.com/healthshots/hi/uploads/2021/11/29201838/Idli-vs-vada-1.jpg", rating: 4.5,
    description: "Steamed idlis and crispy medu vada.",
    cookingMethod: "Steamed & deep-fried combo.",
    toppings: ["Chutney", "Sambar", "Coconut Oil"]
  },
  {
    id: 123, name: "Bisi Bele Bath", price: 130, hotelId: 3, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHpiTzBq5date-8SzZ8l3FkAW6GP17k-oxPw&s", rating: 4.4,
    description: "Spiced rice-lentil dish with vegetables.",
    cookingMethod: "Pressure-cooked in spice mix.",
    toppings: ["Boondi", "Ghee", "Coriander"]
  },
  {
    id: 124, name: "Mangalore Buns", price: 45, hotelId: 8, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbhMV0oCFEfMuzUjYaVuVAQEQtrJ4-6cnl3A&s", rating: 4.2,
    description: "Sweet fluffy puri made with banana dough.",
    cookingMethod: "Deep-fried to golden brown.",
    toppings: ["Coconut Chutney", "Sambar"]
  },
  {
    id: 125, name: "Rava Idli", price: 65, hotelId: 3, img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/08/rava-idli-recipe.jpg", rating: 4.3,
    description: "Semolina idli with veggies.",
    cookingMethod: "Steamed with Eno and spices.",
    toppings: ["Chutney", "Ghee", "Cashew"]
  },
  {
    id: 126, name: "Neer Dosa", price: 80, hotelId: 8, img: "https://www.awesomecuisine.com/wp-content/uploads/2013/08/Neer-Dosa.jpg", rating: 4.2,
    description: "Thin rice dosa from Mangalore.",
    cookingMethod: "Made with soaked rice batter.",
    toppings: ["Coconut Chutney", "Veg Curry"]
  },
  {
    id: 127, name: "Veg Cutlet", price: 50, hotelId: 8, img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/06/cutlet-recipe-veg-cutlet.jpg", rating: 4.1,
    description: "Mashed vegetable patties.",
    cookingMethod: "Breaded and shallow fried.",
    toppings: ["Ketchup", "Onion Rings"]
  },
  {
    id: 128, name: "Chitranna", price: 60, hotelId: 3, img: "https://madhurasrecipe.com/wp-content/uploads/2023/03/Chitranna-Featured-Resized.jpg", rating: 4.0,
    description: "Lemon-flavored rice with spices.",
    cookingMethod: "Tempered rice with curry leaves.",
    toppings: ["Peanuts", "Coconut", "Coriander"]
  },
  {
    id: 129, name: "Upma", price: 55, hotelId: 3, img: "https://www.flavoursonplate.com/wp-content/uploads/2020/04/semiya-upma.jpg", rating: 4.2,
    description: "Semolina porridge with vegetables.",
    cookingMethod: "Dry-roasted and cooked with water.",
    toppings: ["Ghee", "Coconut", "Curry Leaves"]
  },
  {
    id: 130, name: "Kesari Bath", price: 65, hotelId: 8, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTakwZeLFoMu9zMRToeSbWjcwRUrXoZUtLOpQ&s", rating: 4.4,
    description: "Sweet semolina dessert.",
    cookingMethod: "Cooked with ghee and saffron.",
    toppings: ["Cashew", "Raisin", "Ghee"]
  },
];
