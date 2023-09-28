import { useEffect, useState } from "react";
import { MENU_API_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [menuInfo, setMenuInfo] = useState(null);

  useEffect(() => {
    fetchRestuarantMenu();
  }, []);

  const fetchRestuarantMenu = async () => {
    const resMenuData = await fetch(MENU_API_URL + resId);
    const json = await resMenuData.json();
    setMenuInfo(json.data);
  };

  return menuInfo;
};

export default useRestaurantMenu;
