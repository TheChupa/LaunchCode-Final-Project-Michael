import TextBox from "./TextBox";
import BooleanBox from "./BooleanBox";

const IdentitySection = ({ data, setIdentityData }) => {
  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setIdentityData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="grouping-box">
      <h2>Identity Info</h2>
      <TextBox
        id="firstName"
        label="First Name"
        value={data.firstName}
        handleChange={handleChange}
      />
      <TextBox
        id="lastName"
        label="Last Name"
        value={data.lastName}
        handleChange={handleChange}
      />
      <TextBox
        id="address"
        label="Address"
        value={data.address}
        handleChange={handleChange}
      />
      <TextBox
        id="zipCode"
        label="Zip Code"
        value={data.zipCode}
        handleChange={handleChange}
      />
      <TextBox
        id="state"
        label="State"
        value={data.state}
        handleChange={handleChange}
      />
      <TextBox
        id="dob"
        label="Date of Birth"
        value={data.dob}
        handleChange={handleChange}
      />
      <TextBox
        id="phoneNumber"
        label="Phone Number"
        value={data.phoneNumber}
        handleChange={handleChange}
      />
      <TextBox
        id="email"
        label="Email"
        value={data.email}
        handleChange={handleChange}
      />
      <BooleanBox
        id="isRenting"
        label="Is Renting?"
        isChecked={data.isRenting}
        handleChange={handleChange}
      />
      <BooleanBox
        id="hasSocialSecurityNumber"
        label="Has Social Security Number?"
        isChecked={data.hasSocialSecurityNumber}
        handleChange={handleChange}
      />
      <BooleanBox
        id="hasDriversLicence"
        label="Has Driver’s License?"
        isChecked={data.hasDriversLicence}
        handleChange={handleChange}
      />
      <BooleanBox
        id="hasPassport"
        label="Has Passport?"
        isChecked={data.hasPassport}
        handleChange={handleChange}
      />
    </div>
  );
};

export default IdentitySection;
