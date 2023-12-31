import { Button, InputField } from "../../Resource";
import classes from "./Education.module.css";

export default function Education(props) {
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
        <InputField label="Highest Degree">
          <input
            type="text"
            name="degree"
            value={props.info?.degree}
            onChange={handleOnchange}
          />
        </InputField>
        <InputField label="Field of Study">
          <input
            type="text"
            name="study"
            value={props.info?.study}
            onChange={handleOnchange}
          />
        </InputField>
        <InputField label="Institution Name">
          <input
            type="text"
            name="institute"
            value={props.info?.institute}
            onChange={handleOnchange}
          />
        </InputField>
        <InputField label="Graduation Year">
          <input
            type="number"
            name="graduation_year"
            value={props.info?.graduation_year}
            onChange={handleOnchange}
          />
        </InputField>
        <div className={classes.btnHolder}>
          <p onClick={() => props.setActive(1)}>Previous</p>
          <Button title="Next" />
        </div>
      </form>
    </div>
  );
}
