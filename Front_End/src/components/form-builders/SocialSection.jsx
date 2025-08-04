import TextBox from "./TextBox";
import BooleanBox from "./BooleanBox";

const SocialSection = ({ data, setSocialData }) => {

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setSocialData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="grouping-box">
      <h2>Social Info</h2>
      <TextBox
        id="motherMaidenName"
        label="Mother’s Maiden Name"
        value={data.motherMaidenName}
        handleChange={handleChange}
      />
      <TextBox
        id="fatherMiddleName"
        label="Father’s Middle Name"
        value={data.fatherMiddleName}
        handleChange={handleChange}
      />
      <TextBox
        id="firstVehicle"
        label="First Vehicle"
        value={data.firstVehicle}
        handleChange={handleChange}
      />
      <TextBox
        id="numOfSiblings"
        label="Number of Siblings"
        value={data.numOfSiblings}
        handleChange={handleChange}
      />
      <TextBox
        id="elementarySchool"
        label="Elementary School"
        value={data.elementarySchool}
        handleChange={handleChange}
      />
      <TextBox
        id="firstPetsName"
        label="First Pet’s Name"
        value={data.firstPetsName}
        handleChange={handleChange}
      />
      <BooleanBox
        id="hasLinkedIn"
        label="Has LinkedIn?"
        isChecked={data.hasLinkedIn}
        handleChange={handleChange}
      />
      <BooleanBox
        id="hasFacebook"
        label="Has Facebook?"
        isChecked={data.hasFacebook}
        handleChange={handleChange}
      />
      <BooleanBox
        id="hasInstagram"
        label="Has Instagram?"
        isChecked={data.hasInstagram}
        handleChange={handleChange}
      />
      <BooleanBox
        id="hasTwitter"
        label="Has Twitter?"
        isChecked={data.hasTwitter}
        handleChange={handleChange}
      />
      <BooleanBox
        id="hasTikTok"
        label="Has TikTok?"
        isChecked={data.hasTikTok}
        handleChange={handleChange}
      />
      <BooleanBox
        id="hasSnapchat"
        label="Has Snapchat?"
        isChecked={data.hasSnapchat}
        handleChange={handleChange}
      />
      <BooleanBox
        id="hasYouTube"
        label="Has YouTube?"
        isChecked={data.hasYouTube}
        handleChange={handleChange}
      />
      <BooleanBox
        id="hasGithub"
        label="Has GitHub?"
        isChecked={data.hasGithub}
        handleChange={handleChange}
      />
    </div>
  );
};

export default SocialSection;
