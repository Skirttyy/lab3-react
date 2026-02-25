export default function Button({ children, variant = "primary", ...props }) {
  return (
    <button className={`btn ${variant === "primary" ? "btnPrimary" : "btnSecondary"}`} {...props}>
      {children}
    </button>
  );
}