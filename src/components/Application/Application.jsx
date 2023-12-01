import Personal from "./PersonalInfo/Personal";
import classes from "./Application.module.css";
import { useState } from "react";
import { Header, SwitchTab } from "../Resource";
import Work from "./Work/Work";
import Education from "./Education/Education";

export default function Application() {
  const [active, setActive] = useState(1);
  const [info, setInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    degree: "",
    study: "",
    institute: "",
    graduation_year: "",
    company: "",
    position: "",
    duration: "",
    description: "",
  });

  console.log(info);
  return (
    <div className={classes.wrapper}>
      <Header />
      <SwitchTab active={active} />
      {active === 1 ? (
        <Personal
          info={info}
          setInfo={setInfo}
          active={active}
          setActive={setActive}
        />
      ) : active === 2 ? (
        <Education
          info={info}
          setInfo={setInfo}
          active={active}
          setActive={setActive}
        />
      ) : (
        <Work
          info={info}
          setInfo={setInfo}
          active={active}
          setActive={setActive}
        />
      )}
    </div>
  );
}
