export default function AuthInput({ type, placeholder, value, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="form-control auth-input mb-3"
    />
  );
}