import React, { useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";
import Button from "../components/Button";
import Card from "../components/Card";
import colors from "../config/colors";
import listingsApi from "../api/listings";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import AppText from "../components/Text";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";
function ListingsScreen({ navigation }) {
  const {data: listings, error, loading, request:loadListings} = useApi(listingsApi.getListings);

  useEffect(() => {
    loadListings();
  }, []);

  
  return (
    <Screen style={styles.screen}>
      {loadListings.error && (
        <>
          <AppText>Couldn't retrieve the listings.</AppText>
          <Button title="Retry" onPress={loadListings.request} />
        </>
      )}
      <ActivityIndicator visible = {true}/>
      <FlatList
        data={loadListings.data}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
