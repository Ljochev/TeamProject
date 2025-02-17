import React from "react";
import classes from "./Search.module.css";
import Input from "../Input/Input";
import MyButton from "../Button/MyButton";

const Search = ({ vertical = false }) => {
  return (
    <div className={vertical ? classes.searchHome : classes.search}>
      <Input name={"leaving"} id={"leaving"} placeholder="Место на тргнување" />
      <Input
        name={"arriving"}
        id={"arriving"}
        placeholder="Место на пристигнување"
      />
      <Input name={"date"} id={"date"} placeholder="Дата" />
      <Input
        name={"passangers"}
        id={"passangers"}
        placeholder="Број на патници"
      />
      <MyButton
        name="Барај"
        className={vertical ? "searchButton" : "horizontalButton"}
      />
    </div>
  );
};

export default Search;
