import React from "react";
import style from "./Meal.module.scss";
import meal from "../../assets/images/breakfast.svg";

const Meal = () => {
  return (
    <div className={style.Meal}>
      <div className={style.Cols}>
        <div className={style.EmptyMeal}>
          <img className={style.SvgMeal} src={meal} alt="Meal" />
        </div>
      </div>
      <div className={style.Cols}>
        <div className={style.EmptyMeal}>
          <img className={style.SvgMeal} src={meal} alt="Meal" />
        </div>
      </div>
      <div className={style.Cols}>
        <div className={style.EmptyMeal}>
          <img className={style.SvgMeal} src={meal} alt="Meal" />
        </div>
      </div>
      <div className={style.Cols}>
        <div className={style.EmptyMeal}>
          <img className={style.SvgMeal} src={meal} alt="Meal" />
        </div>
      </div>
      <div className={style.Cols}>
        <div className={style.EmptyMeal}>
          <img className={style.SvgMeal} src={meal} alt="Meal" />
        </div>
      </div>
      <div className={style.Cols}>
        <div className={style.EmptyMeal}>
          <img className={style.SvgMeal} src={meal} alt="Meal" />
        </div>
      </div>
      <div className={style.Cols}>
        <div className={style.EmptyMeal}>
          <img className={style.SvgMeal} src={meal} alt="Meal" />
        </div>
      </div>
    </div>
  );
};

export default Meal;
