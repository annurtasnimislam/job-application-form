import { Button, InputField } from "../../Resource";
import classes from "./Work.module.css";

export default function Work(props) {
  const handleOnchange = (e) => {
    props.setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    props.setActive(3);
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <InputField label="Company name">
          <input type="text" name="company" onChange={handleOnchange} />
        </InputField>
        <InputField label="Position Held">
          <input type="text" name="position" onChange={handleOnchange} />
        </InputField>
        <InputField label="Employment Duration">
          <input type="text" name="duration" onChange={handleOnchange} />
        </InputField>
        <InputField label="Description">
          <input type="text" name="description" onChange={handleOnchange} />
        </InputField>
        <div className={classes.btnHolder}>
          <p onClick={() => props.setActive(2)}>Previous</p>
          <Button title="Next" />
        </div>
      </form>
    </div>
  );
}
