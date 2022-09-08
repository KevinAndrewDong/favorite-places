import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import PlacesList from "../components/Places/PlacesList";
import { fetchPlaces, deletePlace } from "../util/database";

function AllPlaces({ route }) {
  const [loadedPlaces, setLoadedPlaces] = useState([]);

  const isFocused = useIsFocused();

  const deletedId = route.params && route.params.placeId;

  useEffect(() => {
    async function leftPlaces() {
      //有longPress的id的话，执行delete语句
      deletedId && deletePlace(deletedId);
      //获取数据库中places数据
      const places = await fetchPlaces();
      setLoadedPlaces(places);
    }
    if (isFocused) {
      leftPlaces();
    }
  }, [isFocused, deletedId]);

  // useEffect(() => {
  //   async function loadPlaces() {
  //     const places = await fetchPlaces();
  //     setLoadedPlaces(places);
  //   }

  //   if (isFocused) {
  //     loadPlaces();
  //     //setLoadedPlaces((curPlaces) => [...curPlaces, route.params.place]);
  //   }
  // }, [isFocused]);

  return <PlacesList places={loadedPlaces} />;
}

export default AllPlaces;
