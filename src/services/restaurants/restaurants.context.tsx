import React, { useState, createContext, useEffect, useMemo } from "react";
import { restaurantRequest, restaurantTransform } from "./restaurants.service";

interface ContextInterface {
  restaurants: any[];
  isLoading: boolean;
  error: any;
}

export const RestaurantsContext = createContext<ContextInterface>({
  restaurants: [],
  isLoading: false,
  error: "",
});

export const RestaurantsContextProvider: React.FC = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const retrieveRestaurants = async () => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantRequest()
        .then(restaurantTransform)
        .then((result) => {
          setRestaurants(result);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err);
          setIsLoading(false);
        });
    }, 2000);
  };

  useEffect(() => {
    retrieveRestaurants();
  }, []);

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
