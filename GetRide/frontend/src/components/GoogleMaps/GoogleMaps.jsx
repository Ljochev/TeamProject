import {
  useJsApiLoader,
  GoogleMap,
  Autocomplete,
} from "@react-google-maps/api";
import useGoogleMaps from "../../hooks/useGoogleMaps";

const GoogleMaps = () => {
  const { isLoaded } = useGoogleMaps();

  if (!isLoaded) {
    return <p>is loading</p>;
  }

  const center = { lat: 48.8584, lng: 2.2945 };
  return (
    <div>
      <GoogleMap
        center={center}
        zoom={15}
        mapContainerStyle={{ width: "50vw", height: "50vh" }}
      ></GoogleMap>
      <Autocomplete>
        <input type="text" />
      </Autocomplete>
    </div>
  );
};

export default GoogleMaps;
