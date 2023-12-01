import classes from "./Input.module.css";

export default function Input({ children, label, star }) {
  return (
    <div className={classes.wrapper}>
      <p>
        {label}
        {star && <span className={classes.star}>*</span>}
      </p>
      {children}
    </div>
  );
}
