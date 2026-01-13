import { useForm } from "react-hook-form";
import "../styling/add.scss";
import PersonalInformation from "./components/PersonalInformation";

interface FormInput {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  mobileNumber: number;
  address: string;
  contractType: string;
  startDate: Date;
  endDate: Date;
  dateOngoing: Boolean;
  workingPattern: string;
  hoursPerWeek: number;
}

function Add() {
  const { handleSubmit } = useForm<FormInput>();

  const onSubmit = (data: FormInput) => {
    alert(JSON.stringify(data));
  };

  return (
    <>
      <div className="heading">
        <h1>Employee Details</h1>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <PersonalInformation />
          <input type="submit" />
        </form>
      </div>
    </>
  );
}

export default Add;
