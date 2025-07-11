export const hotels = [
  // 🏙️ Chennai
  { id: 5, name: "The Curry House", location: "Chennai", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh8Jkbj1UR94kVgZPo6TYb04YVftTrqMhcOg&s" },
  { id: 10, name: "Chennai Chaats", location: "Chennai", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/1a/08/67/saravana-bhavan.jpg?w=700&h=400&s=1" },
  { id: 12, name: "South Spice", location: "Chennai", img: "https://content.jdmagicbox.com/v2/comp/chennai/n6/044pxx44.xx44.230427224935.u4n6/catalogue/hotel-south-spices-minjur-chennai-restaurants-xm7smgd343-250.jpg" },

  // 🏙️ Delhi
  { id: 1, name: "Foodies Junction", location: "Delhi", img: "https://b.zmtcdn.com/data/pictures/7/20185647/49dc9aca81aa82493396ec55d2f5ecf5.jpg" },
  { id: 6, name: "Delhi Diner", location: "Delhi", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuJ8EpxP2m7OCwj5IHHrB627jFkJ6_eNeLTg&s" },
  { id: 11, name: "Capital Feast", location: "Delhi", img: "https://image.wedmegood.com/resized/720X/uploads/member/934528/1576937126_Screenshot_1.jpg" },

  // 🏙️ Mumbai
  { id: 2, name: "Spice Villa", location: "Mumbai", img: "https://www.venuelook.com/_next/image?url=https%3A%2F%2Fcdn.venuelook.com%2Fuploads%2Fspace_21985%2F1579335018_595x400.png&w=1080&q=75" },
  { id: 7, name: "Mumbai Masala", location: "Mumbai", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/26/f8/65/foto.jpg?w=900&h=-1&s=1" },

  // 🏙️ Bangalore
  { id: 3, name: "Urban Bites", location: "Bangalore", img: "https://content.jdmagicbox.com/v2/comp/bangalore/t2/080pxx80.xx80.240326201105.h7t2/catalogue/urban-bites-bangalore-restaurants-b8kbz9v40e.jpg" },
  { id: 8, name: "Bangalore BBQ", location: "Bangalore", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTssuhtkd7K_bafmyLCfUkcRY0PxUZ5xmX_dQ&s" },

  // 🏙️ Hyderabad
  { id: 4, name: "Tandoori Nights", location: "Hyderabad", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/4c/8c/85/tandoori-night-s-original.jpg?w=500&h=-1&s=1" },
  { id: 9, name: "Hyderabadi Heat", location: "Hyderabad", img: "https://z.cdrst.com/foto/hotel-sf/128b8128/granderesp/foto-hotel-128b767e.jpg" },
];


export const foodItems = [
  // Hyderabad (10)
  {
    id: 101, name: "Hyderabadi Biryani", price: 220, hotelId: 4,
    img: "https://vismaifood.com/storage/app/uploads/public/980/eb9/ed6/thumb__1200_0_0_0_auto.jpg", rating: 4.7,
    description: "Fragrant basmati rice layered with spiced marinated meat.",
    cookingMethod: "Dum-cooked in sealed pot.",
    toppings: ["Fried Onions", "Mint", "Boiled Egg"]
  },
  {
    id: 102, name: "Double Ka Meetha", price: 90, hotelId: 9,
    img: "https://lh3.googleusercontent.com/proxy/kQnD5jq6d5r4YfQkQuvDHYqGx3lmpzdWJnmM1jgI1InmgIxkL6yg24mbA60nMOOfdeNPfH26-IrUKhdlkYNpzxT2ZU2J8vJBgqc02nlVa7tJujVQtG8fLOvAldaibFmbzeFKgPYN3eL7EjGJw8zNt1XTSFkNXeR93PVbBgsuaQXFKNlblumcJg", rating: 4.4,
    description: "Sweet bread pudding soaked in saffron syrup.",
    cookingMethod: "Fried bread soaked in milk and sugar.",
    toppings: ["Dry Fruits", "Saffron", "Rose Water"]
  },
  {
    id: 103, name: "Mirchi Ka Salan", price: 110, hotelId: 4,
    img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/11/mirchi-ka-salan-recipe.jpg", rating: 4.3,
    description: "Spicy chili curry with sesame and peanuts.",
    cookingMethod: "Simmered in nutty masala gravy.",
    toppings: ["Coriander", "Crispy Chilies"]
  },
  {
    id: 104, name: "Qubani Ka Meetha", price: 85, hotelId: 9,
    img: "https://charminarhotel.com/wp-content/uploads/2024/07/Untitled-design-45.jpg", rating: 4.5,
    description: "Dessert made from dried apricots.",
    cookingMethod: "Soaked, boiled and sweetened.",
    toppings: ["Cream", "Chopped Nuts"]
  },
  {
    id: 105, name: "Haleem", price: 180, hotelId: 4,
    img: "https://images.slurrp.com/prod/recipe_images/transcribe/main%20course/Mutton-Haleem.webp?impolicy=slurrp-20210601&width=1200&height=675", rating: 4.6,
    description: "Slow-cooked meat and wheat stew.",
    cookingMethod: "Beaten and cooked overnight.",
    toppings: ["Lemon", "Fried Onions", "Mint"]
  },
  {
    id: 106, name: "Bagara Rice", price: 100, hotelId: 9,
    img: "https://static1.squarespace.com/static/6377aa05818ff4582d7b4dcf/6377e22b75f46a2d37e25c10/6377e22b75f46a2d37e25ca0/1668801067879/IMG_4414.jpg?format=original", rating: 4.2,
    description: "Mild spiced rice cooked with whole spices.",
    cookingMethod: "Tempered with bay leaf and garam masala.",
    toppings: ["Fried Cashew", "Coriander"]
  },
  {
    id: 107, name: "Khatti Dal", price: 95, hotelId: 4,
    img: "https://c.ndtvimg.com/2020-03/43fpvqa8_hyderabadi-khatti-dal_625x300_24_March_20.jpg", rating: 4.1,
    description: "Tangy lentil curry with tamarind.",
    cookingMethod: "Boiled and tempered with garlic and mustard.",
    toppings: ["Coriander", "Ghee"]
  },
  {
    id: 108, name: "Osmania Biscuit", price: 35, hotelId: 9,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm3HLwFVrN9PIQOgxinY_lD65McO54hsLD8w&s", rating: 4.3,
    description: "Popular tea biscuit of Hyderabad.",
    cookingMethod: "Baked with ghee and milk.",
    toppings: ["None"]
  },
  {
    id: 109, name: "Keema Samosa", price: 40, hotelId: 9,
    img: "https://butfirstchai.com/wp-content/uploads/2023/11/keema-samosa-recipe.jpg", rating: 4.4,
    description: "Crispy samosa stuffed with spiced minced meat.",
    cookingMethod: "Deep-fried to golden brown.",
    toppings: ["Mint Chutney", "Onion"]
  },
  {
    id: 110, name: "Chicken 65", price: 130, hotelId: 4,
    img: "https://bonmasala.com/wp-content/uploads/2022/06/Chicken-65-recipe.webp", rating: 4.5,
    description: "Crispy fried chicken bites.",
    cookingMethod: "Marinated and deep-fried.",
    toppings: ["Curry Leaves", "Green Chilies"]
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

  // Chennai (10)
{
  id: 141, name: "Sambar Idli", price: 60, hotelId: 12, img: "https://imgs.search.brave.com/j66SsGZf3ZQEuRhDSMCJ2OTHB3HYeE_ezlgwHaiVwac/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dmVncmVjaXBlc29m/aW5kaWEuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI1LzA0/L2lkbGktc2FtYmFy/LXRpZmZpbi01MDB4/NTAwLmpwZw", rating: 4.3,
  description: "Soft idlis dunked in hot sambar.",
  cookingMethod: "Steamed and soaked.",
  toppings: ["Ghee", "Coriander"]
},
{
  id: 142, name: "Murukku Sandwich", price: 55, hotelId: 5, img: "https://imgs.search.brave.com/XGAsxQNGj0qvkgA5lW2Ub0w8XsSRA9PQ8F2_IavoUfw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWct/Z2xvYmFsLmNwY2Ru/LmNvbS9yZWNpcGVz/LzQxZWRiNThhMGU4/MjdmMzAvNjgweDQ4/MmNxNzAvY2hlZXNl/LW11cnVra3Utc2Fu/ZHdpY2gtcmVjaXBl/LW1haW4tcGhvdG8u/anBn", rating: 4.1,
  description: "Street snack made with crispy murukku and fillings.",
  cookingMethod: "Assembled cold.",
  toppings: ["Carrot", "Chutney", "Onion"]
},
{
  id: 143, name: "Kothu Parotta", price: 120, hotelId: 5, img: "https://www.licious.in/blog/wp-content/uploads/2020/06/KUTTU-PORATTA.jpg", rating: 4.5,
  description: "Minced parotta tossed with eggs and masala.",
  cookingMethod: "Chopped and stir-fried.",
  toppings: ["Onion", "Curry Leaves"]
},
{
  id: 144, name: "Filter Coffee", price: 30, hotelId: 12, img: "https://www.thecaffeinebaar.com/cdn/shop/articles/Filter_1500x.jpg?v=1636717220", rating: 4.7,
  description: "Strong South Indian coffee with frothy top.",
  cookingMethod: "Brewed with decoction and milk.",
  toppings: ["Froth"]
},
{
  id: 145, name: "Podi Dosa", price: 75, hotelId: 10, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvB95EU5Fkmz8X2OmCNhf26s8wEit90bsMZw&s", rating: 4.2,
  description: "Dosa topped with spicy podi powder.",
  cookingMethod: "Tawa roasted with ghee.",
  toppings: ["Podi", "Butter", "Chutney"]
},
{
  id: 146, name: "Rasam Rice", price: 70, hotelId: 12, img: "https://vanitascorner.com/wp-content/uploads/2024/11/Dal-Rasam-Rice-FB-500x500.jpg", rating: 4.3,
  description: "Hot and tangy rasam poured over rice.",
  cookingMethod: "Tempered with garlic and mustard.",
  toppings: ["Papad", "Ghee"]
},
{
  id: 147, name: "Pongal", price: 80, hotelId: 5, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQurdrg9psTexh_4QHu8GtMg4L4RIT6SE_b0g&s", rating: 4.4,
  description: "Rice-lentil dish with pepper and cumin.",
  cookingMethod: "Pressure-cooked to soft consistency.",
  toppings: ["Ghee", "Cashew", "Pepper"]
},
{
  id: 148, name: "Medu Vada", price: 50, hotelId: 10, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbaqeRbG_S1cgllKzjLsTTYIklzBXMJbBeSA&s", rating: 4.3,
  description: "Crispy lentil donut-shaped fritter.",
  cookingMethod: "Deep-fried till golden.",
  toppings: ["Chutney", "Sambar"]
},
{
  id: 149, name: "Karuvadu Fry", price: 160, hotelId: 12, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVMHfFzmckG4E6FXRy7juHgwX8uTG6guqPqw&s", rating: 4.1,
  description: "Dry fish fry with spicy masala.",
  cookingMethod: "Pan-fried with chili and curry leaves.",
  toppings: ["Onion", "Lemon"]
},
{
  id: 150, name: "Veg Kurma", price: 90, hotelId: 12, img: "https://www.cookclickndevour.com/wp-content/uploads/2016/05/vegetable-korma-recipe-1.jpg", rating: 4.2,
  description: "Creamy coconut-based vegetable curry.",
  cookingMethod: "Simmered with spices and ground paste.",
  toppings: ["Coriander", "Ghee"]
},


// Delhi (10)
{
    id: 131, name: "Margherita Pizza", price: 199, hotelId: 1,
    img: "https://cdn.loveandlemons.com/wp-content/uploads/2023/07/margherita-pizza-recipe-719x1024.jpg", rating: 4.5,
    description: "Classic cheese pizza with tomato sauce and fresh basil.",
    cookingMethod: "Baked in a stone oven at 400°C for 12 minutes.",
    toppings: ["Extra Cheese", "Olives", "Basil"]
  },
  {
    id: 132, name: "Tomato Soup", price: 89, hotelId: 1,
    img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/11/tomato-soup-recipe.jpg", rating: 4.1,
    description: "Creamy tomato soup served with croutons.",
    cookingMethod: "Slow-simmered with herbs for 30 minutes.",
    toppings: ["Cream", "Parsley", "Croutons"]
  },
  {
    id: 133, name: "Paneer Wrap", price: 149, hotelId: 6,
    img: "https://www.vegrecipesofindia.com/wp-content/uploads/2017/01/paneer-kathi-roll-recipe-1.jpg", rating: 4.3,
    description: "Spicy paneer rolled in soft rumali roti.",
    cookingMethod: "Grilled paneer cubes and sautéed veggies.",
    toppings: ["Cheese", "Lettuce", "Chutney"]
  },
  {
    id: 134, name: "Dahi Bhalla", price: 99, hotelId: 6,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3QEe9gaLQSdbhgoq5wP_97GMKw6CedWlrLQ&s", rating: 4.2,
    description: "Soft lentil dumplings soaked in yogurt and spices.",
    cookingMethod: "Fried and soaked overnight in yogurt.",
    toppings: ["Pomegranate", "Tamarind", "Mint"]
  },
  {
    id: 135, name: "Chole Bhature", price: 169, hotelId: 11,
    img: "https://chefadora.b-cdn.net/medium_23ff54faa8628ac0b378003d51b400e4_511694cd35.jpg", rating: 4.5,
    description: "Spicy chickpeas served with fluffy fried bread.",
    cookingMethod: "Slow-cooked chickpeas with masala.",
    toppings: ["Onion", "Green Chili", "Lemon"]
  },
  {
    id: 136, name: "Butter Chicken", price: 299, hotelId: 11,
    img: "https://www.spiceroots.com/spiceroots/wp-content/uploads/2008/05/butterchicken-1024x682.jpg", rating: 4.6,
    description: "Rich and creamy North Indian chicken curry.",
    cookingMethod: "Tandoor-cooked chicken simmered in butter gravy.",
    toppings: ["Cream", "Coriander", "Butter"]
  },
  {
    id: 137, name: "Samosa", price: 20, hotelId: 1,
    img: "https://static.toiimg.com/thumb/61050397.cms?imgsize=246859&width=800&height=800", rating: 4.0,
    description: "Crispy triangle filled with spicy potato mix.",
    cookingMethod: "Deep-fried golden brown.",
    toppings: ["Mint Chutney", "Tamarind", "Onion"]
  },
  {
    id: 138, name: "Tandoori Roti", price: 15, hotelId: 11,
    img: "https://www.tarladalal.com/media/recipe/method/2025/01/16/tandoori-roti_9659-5-198090.webp", rating: 4.1,
    description: "Whole wheat roti baked in clay oven.",
    cookingMethod: "Tandoor-cooked over charcoal flame.",
    toppings: ["Butter", "Ghee"]
  },
  {
    id: 139, name: "Stuffed Paratha", price: 80, hotelId: 6,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrSDK4UaWhTXy-MsSZF-QBunAieMQxcovNog&s", rating: 4.2,
    description: "Flaky paratha filled with potato or paneer.",
    cookingMethod: "Griddled with ghee.",
    toppings: ["Butter", "Pickle", "Curd"]
  },
  {
    id: 140, name: "Rajma Chawal", price: 120, hotelId: 1,
    img: "https://www.indianfoodforever.com/iffwd/wp-content/uploads/rajma-chawal-500x450.jpg", rating: 4.3,
    description: "Red kidney beans curry with rice.",
    cookingMethod: "Pressure-cooked with Punjabi masala.",
    toppings: ["Onion", "Lemon", "Coriander"]
  }



];
