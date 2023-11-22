import { useState, useEffect } from "react";
import { type Item } from "../App";
import "../components/Item.css";

export const useItems = () => {
  const [items, setItems] = useState<Item[]>(() => {
    const storedItems = localStorage.getItem("taskListItems");
    return storedItems ? JSON.parse(storedItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("taskListItems", JSON.stringify(items));
  }, [items]);

  const addItem = (text: string) => {
    const newItem: Item = {
      id: crypto.randomUUID(),
      text,
      timestamp: Date.now(),
    };

    setItems((prevItems) => {
      return [...prevItems, newItem];
    });
  };

  const removeItem = (id: string) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  };

  return {
    items,
    addItem,
    removeItem,
  };
};
