import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

import TextBox from "../form-builders/TextBox.jsx";
import BooleanBox from "../form-builders/BooleanBox.jsx";

const NewUserDataForm = () => {
    const location = useLocation();
    const { userId } = location.state || {};
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        userId: userId,
        social: {
            motherMaidenName: "",
            fatherMiddleName: "",
            firstVehicle: "",
            numOfSiblings: 0,
            elementarySchool: "",
            firstPetsName: "",
            hasLinkedIn: false,
            hasFaceBook: false,
            hasInstagram: false,
            hasTwitter: false,
            hasTikTok: false,
            hasSnapchat: false,
            hasYouTube: false,
            hasGithub: false
        },
        financial:{
            bankName:"",
            creditScore: 0,
            hasVenmo: false,
            hasCashApp: false,
            hasPaypal: false,
            hasCreditCard: false,
            hasCrypto: false
         },
        identity: {
            firstName: "",
            lastName: "",
            address: "",
            zipCode: "",
            state: "",
            dob: "",
            phoneNumber: "",
            email: "",
            isRenting: false,
            hasSocialSecurityNumber: false,
            hasDriversLicence: false,
            hasPassport: false
        },
    });
  const handleChange = (section, field) => (e) => {
		const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
		setFormData((prev) => ({
			...prev,
			[section]: {
				...prev[section],
				[field]: value,
			},
		}));
	};

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8080/api/user_info/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            
            const data = await response.json();
            console.log("Form submitted successfully:", data);
            navigate("/Training-Room");
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return(
        <>
        <form onSubmit={handleSubmit} className="new-user-data-form">
       <div className= "grouping-box">
        <h2>Social Information</h2>
        <TextBox
        id="motherMaidenName"
        label="Mother's Maiden Name:"
        value={formData.social.motherMaidenName}
        handleChange={handleChange("social", "motherMaidenName")}
        />
        <TextBox
        id="fatherMiddleName"
        label="Father's Middle Name:"
        value={formData.social.fatherMiddleName}
        handleChange={handleChange("social", "fatherMiddleName")}
        />
        <TextBox
        id="firstVehicle"
        label="First Vehicle:"
        value={formData.social.firstVehicle}
        handleChange={handleChange("social", "firstVehicle")}
        />
        <TextBox
        id="numOfSiblings"
        label="Number of Siblings:"
        type="number"
        value={formData.social.numOfSiblings}
        handleChange={handleChange("social", "numOfSiblings")}
        />
        <TextBox
        id="elementarySchool"
        label="Elementary School:"
        value={formData.social.elementarySchool}
        handleChange={handleChange("social", "elementarySchool")}
        />
        <TextBox
        id="firstPetsName"
        label="First Pet's Name:"
        value={formData.social.firstPetsName}
        handleChange={handleChange("social", "firstPetsName")}
        />
        <div className= "boolean-boxes">
        <BooleanBox
        id="hasLinkedIn"
        label="LinkedIn:"
        checked={formData.social.hasLinkedIn}
        handleChange={handleChange("social", "hasLinkedIn")}
        />
        <BooleanBox
        id="hasFaceBook"
        label="Facebook:"
        checked={formData.social.hasFacebook}
        handleChange={handleChange("social", "hasFaceBookk")}
        />
        <BooleanBox
        id="hasInstagram"
        label="Instagram:"
        checked={formData.social.hasInstagram}
        handleChange={handleChange("social", "hasInstagram")}
        />
        <BooleanBox
        id="hasTwitter"
        label="Twitter:"
        checked={formData.social.hasTwitter}
        handleChange={handleChange("social", "hasTwitter")}
        />
        <BooleanBox
        id="hasTikTok"
        label="TikTok:"
        checked={formData.social.hasTikTok}
        handleChange={handleChange("social", "hasTikTok")}
        />
        <BooleanBox
        id="hasSnapchat"
        label="Snapchat:"
        checked={formData.social.hasSnapchat}
        handleChange={handleChange("social", "hasSnapchat")}
        />
        <BooleanBox
        id="hasYouTube"
        label="YouTube:"
        checked={formData.social.hasYouTube}
        handleChange={handleChange("social", "hasYouTube")}
        />
        <BooleanBox
        id="hasGithub"
        label="GitHub:"
        checked={formData.social.hasGithub}
        handleChange={handleChange("social", "hasGithub")}
        />
        </div>
        </div>
        <div className= "grouping-box">
        <h2>Financial Information</h2>
        <TextBox
        id="bankName"
        label="Bank Name:"
        value={formData.financial.bankName}
        handleChange={handleChange("financial", "bankName")}
        />
        <TextBox
        id="creditScore"
        label="Credit Score:"
        type="number"
        value={formData.financial.creditScore}
        handleChange={handleChange("financial", "creditScore")}
        />
        <div className= "boolean-boxes">
        <BooleanBox
        id="hasVenmo"
        label="Venmo:"
        checked={formData.financial.hasVenmo}
        handleChange={handleChange("financial", "hasVenmo")}
        />
        <BooleanBox
        id="hasCashApp"
        label="Cash App:"
        checked={formData.financial.hasCashApp}
        handleChange={handleChange("financial", "hasCashApp")}
        />
        <BooleanBox
        id="hasPaypal"
        label="PayPal:"
        checked={formData.financial.hasPaypal}
        handleChange={handleChange("financial", "hasPaypal")}
        />
        <BooleanBox
        id="hasCreditCard"
        label="Credit Card:"
        checked={formData.financial.hasCreditCard}
        handleChange={handleChange("financial", "hasCreditCard")}
        />
        <BooleanBox
        id="hasCrypto"
        label="Crypto:"
        checked={formData.financial.hasCrypto}
        handleChange={handleChange("financial", "hasCrypto")}
        />
        </div>
        </div>
        <div className= "grouping-box">
        <h2>Identity Information</h2>
        <TextBox
        id="firstName"
        label="First Name:"
        value={formData.identity.firstName}
        handleChange={handleChange("identity", "firstName")}
        />
        <TextBox
        id="lastName"
        label="Last Name:"
        value={formData.identity.lastName}
        handleChange={handleChange("identity", "lastName")}
        />
        <TextBox
        id="address"
        label="Address:"
        value={formData.identity.address}
        handleChange={handleChange("identity", "address")}
        />
        <TextBox
        id="zipCode"
        label="Zip Code:"
        value={formData.identity.zipCode}
        handleChange={handleChange("identity", "zipCode")}
        />
        <TextBox
        id="state"
        label="State:"
        value={formData.identity.state}
        handleChange={handleChange("identity", "state")}
        />
        <TextBox
        id="dob"
        label="Date of Birth:"
        type="date"
        value={formData.identity.dob}
        handleChange={handleChange("identity", "dob")}
        />
        <TextBox
        id="phoneNumber"
        label="Phone Number:"
        value={formData.identity.phoneNumber}
        handleChange={handleChange("identity", "phoneNumber")}
        />
        <TextBox
        id="email"
        label="Email:"
        value={formData.identity.email}
        handleChange={handleChange("identity", "email")}
        />
        <div className= "boolean-boxes">
        <BooleanBox
        id="isRenting"
        label="Is Renting?"
        checked={formData.identity.isRenting}
        handleChange={handleChange("identity", "isRenting")}
        />
        <BooleanBox
        id="hasSocialSecurityNumber"
        label="Has Social Security Number?"
        checked={formData.identity.hasSocialSecurityNumber}
        handleChange={handleChange("identity", "hasSocialSecurityNumber")}
        />
        <BooleanBox
        id="hasDriversLicence"
        label="Has Driver's Licence?"
        checked={formData.identity.hasDriversLicence}
        handleChange={handleChange("identity", "hasDriversLicence")}
        />
        <BooleanBox
        id="hasPassport"
        label="Has Passport?"
        checked={formData.identity.hasPassport}
        handleChange={handleChange("identity", "hasPassport")}
        />
        </div>
        </div>
        <button type="submit">Submit</button>
        </form>
        </>
    );



}

export default NewUserDataForm;