import { useJsApiLoader } from "@react-google-maps/api";

const libraries = ["places"];

const useGoogleMaps = () => {
  return useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API,
    libraries,
  });
};

export default useGoogleMaps;
