export default function AuthInput({ type, placeholder, value, onChange, name,className = "", }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      className={`form-control auth-input mb-1 ${className}`}
    />
  );
}