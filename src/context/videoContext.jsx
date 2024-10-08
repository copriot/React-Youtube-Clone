import { useEffect, useState, createContext } from "react";
import { categories } from "../constants";
import api from "../utils/api";

//* 1.adım: Context yapısının temelini oluşturduk
export const VideoContext = createContext();

//* 2.adım: Sağlayıcı bileşeni oluşturduk
export const VideoProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [isLoading, setIsLoading] = useState(true);
  const [videos, setVideos] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    // seçilen typeı belirle
    const type = selectedCategory.type;

    // Seçilen kategorinin type'ı menu ise fonksiyonunu burada durdurur.
    if (type === "menu") return;
    // yüklenmeyi true'ya çek
    setIsLoading(true);

    // istek atılacak urli belirle
    const url =
      type === "home"
        ? "/home"
        : type === "trending"
        ? "/trending"
        : type === "category"
        ? `/search?query=${selectedCategory.name}`
        : "";

    // api isteği at ve durumu state aktar
    api
      .get(url)
      .then((res) => {
        setVideos(res.data.data);
        setError(null); // eskiden olan hatları kaldır
      })

      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [selectedCategory]);
  //console.log(videos);
  return (
    <VideoContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        videos,
        error,
        isLoading,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};
