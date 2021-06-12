import { mocks, mockImages } from "./mock";
import camelize from "camelize";

export const restaurantRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) reject("No location found");

    resolve(mock);
  });
};

export const restaurantTransform = (result: any) => {
  const mappedResults = result.results.map((restaurant: any) => {
    restaurant.photos = restaurant.photos.map((p: any) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });

    return {
      ...restaurant,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
    };
  });
  const newResult = camelize(mappedResults);
  return newResult;
};
