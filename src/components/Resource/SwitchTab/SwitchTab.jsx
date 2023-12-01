import classes from "./SwitchTab.module.css";

export default function SwitchTab({ active }) {
  return (
    <div className={classes.container}>
      <div className={classes.switch}>
        <p
          className={
            active === 1
              ? classes.activeNum
              : active === 2
              ? classes.activeNum
              : active === 3
              ? classes.activeNum
              : classes.num
          }
        >
          1
        </p>
        <div
          className={
            active === 1
              ? classes.active
              : active === 2
              ? classes.active
              : active === 3
              ? classes.active
              : classes.inActive
          }
        ></div>
        <p
          className={
            active === 2
              ? classes.activeNum
              : active === 1
              ? classes.pendingNum
              : active === 3
              ? classes.activeNum
              : classes.num
          }
        >
          2
        </p>
        <div
          className={
            active === 2
              ? classes.active
              : active === 3
              ? classes.active
              : classes.inActive
          }
        ></div>
        <p
          className={
            active === 3
              ? classes.activeNum
              : active === 2
              ? classes.pendingNum
              : classes.num
          }
        >
          3
        </p>
      </div>
      <div className={classes.about}>
        <p>Personal Information</p>
        <p>Education Background</p>
        <p>Work Experirence</p>
      </div>
    </div>
  );
}
