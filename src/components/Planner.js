import React from "react";
import Meal from "./Meal/Meal";
import style from "./Planner.module.scss";
import Week from "./Week/Week";

const Planner = () => {
  return (
    <div className={style.Planner}>
      <div className={style.RowWrapper}>
        <div className={style.Name}></div>
        <Week />
      </div>

      <div className={style.RowWrapper}>
        <div className={style.Name}>
          <span className={style.Description}>Breakfast</span>
        </div>
        <Meal />
      </div>

      <div className={style.RowWrapper}>
        <div className={style.Name}>
          <span className={style.Description}>Snack</span>
        </div>
        <Meal />
      </div>
      <div className={style.RowWrapper}>
        <div className={style.Name}>
          <span className={style.Description}>Lunch</span>
        </div>
        <Meal />
      </div>
      <div className={style.RowWrapper}>
        <div className={style.Name}>
          <span className={style.Description}>Snack</span>
        </div>
        <Meal />
      </div>
      <div className={style.RowWrapper}>
        <div className={style.Name}>
          <span className={style.Description}>Dinner</span>
        </div>
        <Meal />
      </div>
      <div className={style.RowWrapper}>
        <div className={style.Name}>
          <span className={style.Description}>Supper</span>
        </div>
        <Meal />
      </div>
    </div>
  );
};

export default Planner;
