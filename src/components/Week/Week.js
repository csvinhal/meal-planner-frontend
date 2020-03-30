import React from "react";
import style from "./Week.module.scss";

const Week = () => {
  return (
    <div className={style.Week}>
      <div className={style.Cols}>
        <span className={style.WeekName}>Domingo</span>
      </div>
      <div className={style.Cols}>
        <span className={style.WeekName}>Segunda</span>
      </div>
      <div className={style.Cols}>
        <span className={style.WeekName}>Terça</span>
      </div>
      <div className={style.Cols}>
        <span className={style.WeekName}>Quarta</span>
      </div>
      <div className={style.Cols}>
        <span className={style.WeekName}>Quinta</span>
      </div>
      <div className={style.Cols}>
        <span className={style.WeekName}>Sexta</span>
      </div>
      <div className={style.Cols}>
        <span className={style.WeekName}>Sábado</span>
      </div>
    </div>
  );
};

export default Week;
