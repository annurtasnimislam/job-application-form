import classes from "./Header.module.css";

export default function Header() {
  return (
    <div className={classes.header}>
      <p>Registration Form</p>
      <p>Please fill out this form with the required information</p>
    </div>
  );
}
