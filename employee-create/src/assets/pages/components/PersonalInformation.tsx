import { useForm } from "react-hook-form";

export interface PersonalInformationInput {
  firstName: string;
  middleName: string;
  lastName: string;
}

const PersonalInformation = () => {
  const {
    register,
    formState: { errors },
  } = useForm<PersonalInformationInput>();

  return (
    <>
      <div className="container-personalInformation">
        <h3>Personal Information</h3>
        {/* FIRST NAME */}
        <label>First Name</label>
        {
          <input
            {...register("firstName", {
              required: true,
              maxLength: 20,
              pattern: /^[A-Za-z]+$/i,
            })}
          />
        }
        {errors?.firstName?.type === "required" && (
          <p>This field is required</p>
        )}
        {errors?.firstName?.type === "maxLength" && (
          <p>First name cannot exceed 20 characters</p>
        )}
        {errors?.firstName?.type === "pattern" && (
          <p>Alphabetical characters only</p>
        )}
        {/* MIDDLE NAME */}
        <label>Middle Name</label>
        <input
          {...register("middleName", {
            required: false,
            maxLength: 20,
            pattern: /^[A-Za-z]+$/i,
          })}
        />{" "}
        {errors?.middleName?.type === "maxLength" && (
          <p>First name cannot exceed 20 characters</p>
        )}
        {errors?.middleName?.type === "pattern" && (
          <p>Alphabetical characters only</p>
        )}
        {/* LAST NAME */}
        <label>Last Name</label>
        <input
          {...register("lastName", {
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-z]+$/i,
          })}
        />
        {errors?.lastName?.type === "required" && <p>This field is required</p>}
        {errors?.lastName?.type === "maxLength" && (
          <p>Last name cannot exceed 20 characters</p>
        )}
        {errors?.lastName?.type === "pattern" && (
          <p>Alphabetical characters only</p>
        )}
      </div>
    </>
  );
};

export default PersonalInformation;
