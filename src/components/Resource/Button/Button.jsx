import classes from "./Button.module.css";

export default function Button({ title }) {
  return (
    <div className={classes.btnSubmit}>
      <button type="submit">{title}</button>
    </div>
  );
}
