import classes from "./Button.module.css";

export default function Button({ onClick, title }) {
  return (
    <div className={classes.btnSubmit}>
      <button type="submit" onClick={onClick}>
        {title}
      </button>
    </div>
  );
}
