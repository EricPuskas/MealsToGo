import faker from "faker";

/**
 * Imports Components
 */
import { RestaurantInfoCardProps as Restaurant } from "../RestaurantInfoCard";

/**
 * Defines a mock restaurant
 */
export const defaultRestaurant: Restaurant = {
  name: "Some Restaurant",
  icon: "",
  photos: [
    "https://media.istockphoto.com/photos/cheesy-pepperoni-pizza-picture-id938742222?k=6&m=938742222&s=612x612&w=0&h=on_9ZYG1SG4Xgk7BLZSlaXJl8VYb6ZePDHTN6zukDHM="
  ],
  address: "Cumbaya Street",
  isOpenNow: true,
  rating: 4,
  isClosedTemporarily: false
};

/**
 * Gets the restaurant status
 */
const getRestaurantStatus = () => {
  const isOpenNow = faker.datatype.boolean();
  const isClosedTemporarily = !isOpenNow;

  return { isOpenNow, isClosedTemporarily };
};

const randomImages = [
  "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636",
  "https://media.istockphoto.com/photos/cheesy-pepperoni-pizza-picture-id938742222?k=6&m=938742222&s=612x612&w=0&h=on_9ZYG1SG4Xgk7BLZSlaXJl8VYb6ZePDHTN6zukDHM=",

  "https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg",

  "https://img.freepik.com/free-photo/assorted-indian-recipes-food-various_79295-7226.jpg?size=626&ext=jpg&ga=GA1.2.2026071262.1616976000",

  "https://www.sciencenewsforstudents.org/wp-content/uploads/2020/11/1030_teen_brain_food_choices.jpg",

  "https://c.ndtvimg.com/2020-04/dih4ifhg_pasta_625x300_22_April_20.jpg",

  "https://i.ndtvimg.com/i/2016-07/pasta_625x350_51467797057.jpg",

  "https://www.rnz.co.nz/assets/news_crops/60885/eight_col_32917696_l.jpg?1531180823"
];

const getRandomImage = () => {
  const index = faker.datatype.number({
    min: 0,
    max: randomImages.length - 1
  });

  const image = randomImages[index];

  if (index > -1) {
    randomImages.splice(index, 1);
  }

  return image;
};

const generateRestaurants = (count: number) => {
  const restaurants: Restaurant[] = [];

  for (let i = 0; i < count; i++) {
    const { isOpenNow, isClosedTemporarily } = getRestaurantStatus();

    restaurants.push({
      name: faker.lorem.sentence(2, 3),
      icon: "",
      photos: [getRandomImage()],
      address: faker.lorem.sentence(5),
      isOpenNow: isOpenNow,
      rating: faker.datatype.number({
        min: 3,
        max: 5
      }),
      isClosedTemporarily: isClosedTemporarily
    });
  }

  return restaurants;
};

export const restaurants = generateRestaurants(7);
