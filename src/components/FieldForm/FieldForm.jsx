import "./FieldForm.css";

const FieldForm = ({ labelText, type = "text", ph }) => {
  return (
    <div className="fieldForm">
      <label>{labelText}</label>
      <input type={type} placeholder={ph} />
    </div>
  );
};

export default FieldForm;
