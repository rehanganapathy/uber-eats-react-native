import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, {useState, useEffect} from 'react'
import HeaderTabs from '../components/home/HeaderTabs'
import SearchBar from '../components/home/SearchBar'
import Categories from '../components/home/Categories'
import RestaurantItem, { localRestaurants } from '../components/home/RestaurantItem'
import { Divider } from "react-native-elements";
import BottomTabs from '../components/home/BottomTabs'

const YELP_API_KEY = "MwtCuCAeNzDDzVqeEXK9XSU_24n_Sfrvezgk2-njkLuuneN3E0M0uwJI1eDHknbkQ6sDARAcAK0UypbyxqGrRWB2XrmVI5dHuKhtMswSgzNklcn0QbicJMJ2ZTOaYnYx";

export default function Home({navigation}) {
   const [restaurantData, setRestaurantData] = useState(localRestaurants)
   const [city, setCity] = useState("Hollywood");
   const [activeTab, setActiveTab] = useState("Delivery");

   const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
          (json.businesses.filter((business) =>
          business.transactions.includes(activeTab.toLowerCase()
          )
          )
          ))
        )
        
      
  };
  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);

    return (
    <SafeAreaView style={{backgroundColor: '#eee', flex: 1}}>
        <View style={{backgroundColor:'white', padding:15}}>
      <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
      <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Categories />
      <RestaurantItem restaurantData={restaurantData} 
       navigation ={navigation} />
      </ScrollView >
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  )
}