import { useEffect, useState } from "react";
import PlacesList from "../components/Places/PlacesList";
import { deletePlace, fetchPlaces } from "../util/database";

function DeletePlace({ route }) {
  const [loadedPlaces, setLoadedPlaces] = useState();

  const deletedId = route.params.placeId;

  useEffect(() => {
    async function leftPlaces() {
      await deletePlace(deletedId);
      const places = await fetchPlaces();
      setLoadedPlaces(places);
    }
    leftPlaces();
  }, [deletedId]);

  return <PlacesList places={loadedPlaces} />;
}

export default DeletePlace;
