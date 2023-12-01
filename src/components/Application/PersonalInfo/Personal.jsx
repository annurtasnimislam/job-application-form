import { Button, InputField } from "../../Resource";
import classes from "./Personal.module.css";

export default function Personal(props) {
  const handleOnchange = (e) => {
    props.setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    props.setActive(2);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputField label="Name" star>
          <input
            type="text"
            name="name"
            value={props.info?.name}
            onChange={handleOnchange}
            required
          />
        </InputField>
        <InputField label="Email" star>
          <input
            type="email"
            name="email"
            value={props.info?.email}
            onChange={handleOnchange}
            required
          />
        </InputField>
        <InputField label="Phone Number">
          <input
            type="text"
            name="phone"
            value={props.info?.phone}
            onChange={handleOnchange}
          />
        </InputField>
        <InputField label="Address">
          <input
            type="tel"
            name="address"
            value={props.info?.address}
            onChange={handleOnchange}
          />
        </InputField>
        <div className={classes.btnHolder}>
          <p>Previous</p>
          <Button title="Next" />
        </div>
      </form>
    </div>
  );
}
