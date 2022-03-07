import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_API_KEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";

const GooglePlacesInput = () => {
  const dispatch = useDispatch();

  return (
    <GooglePlacesAutocomplete
      placeholder="Where from"
      styles={{
        container: {
          flex: 0,
        },
        textInput: {
          fontSize: 18,
        },
      }}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        dispatch(
          setOrigin({
            location: details.geometry.location,
            description: data.description,
          })
        );
        dispatch(setDestination(null));
        console.log(data, details);
      }}
      fetchDetails={true}
      returnKeyType={"search"}
      nearbyPlacesAPI="GooglePlacesSearch"
      enablePoweredByContainer={false}
      minLength={2}
      debounce={400}
      query={{
        key: GOOGLE_API_KEY,
        language: "en",
      }}
    />
  );
};

export default GooglePlacesInput;
