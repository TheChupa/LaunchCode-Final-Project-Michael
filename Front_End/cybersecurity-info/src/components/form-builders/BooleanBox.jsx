const BooleanBox = ({ id, name, label, isChecked, handleChange }) =>    
{
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type="checkbox"
        className="checkbox"
        id={id}
        name={name}
        checked={isChecked}
        onChange={handleChange}
      />
    </div>
  );
}
export default BooleanBox;