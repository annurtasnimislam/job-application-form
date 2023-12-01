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
          <input type="text" name="name" onChange={handleOnchange} required />
        </InputField>
        <InputField label="Email" star>
          <input type="email" name="email" onChange={handleOnchange} required />
        </InputField>
        <InputField label="Phone Number">
          <input type="text" name="phone" onChange={handleOnchange} />
        </InputField>
        <InputField label="Address">
          <input type="tel" name="address" onChange={handleOnchange} />
        </InputField>
        <div className={classes.btnHolder}>
          <p>Previous</p>
          <Button title="Next" onClick={() => props.setActive(2)} />
        </div>
      </form>
    </div>
  );
}
