import TextBox from "./TextBox";
import BooleanBox from "./BooleanBox";

const FinancialSection = ({ data, setFinancialData }) => {
  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setIdentityData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="grouping-box">
      <h2>Financial Info</h2>
      <TextBox
        id="bankName"
        label="Bank Name"
        value={data.bankName}
        handleChange={handleChange}
      />
      <TextBox
        id="creditScore"
        label="Credit Score"
        value={data.creditScore}
        handleChange={handleChange}
      />
      <BooleanBox
        id="hasVenmo"
        label="Has Venmo?"
        isChecked={data.hasVenmo}
        handleChange={handleChange}
      />
      <BooleanBox
        id="hasCashApp"
        label="Has Cash App?"
        isChecked={data.hasCashApp}
        handleChange={handleChange}
      />
      <BooleanBox
        id="hasPaypal"
        label="Has PayPal?"
        isChecked={data.hasPaypal}
        handleChange={handleChange}
      />
      <BooleanBox
        id="hasCreditCard"
        label="Has Credit Card?"
        isChecked={data.hasCreditCard}
        handleChange={handleChange}
      />
      <BooleanBox
        id="hasCrypto"
        label="Has Crypto?"
        isChecked={data.hasCrypto}
        handleChange={handleChange}
      />
    </div>
  );
};

export default FinancialSection;
