import { children } from "react";

export function Button({ children, onClick, className, type, ...props }) {
  return (
    <button type={type} onClick={onClick} className={className} {...props}>
      {children}
    </button>
  );
}

export function BigButton({ id, children, ...props }) {
  const className = "btn_primary";
  const handleClick = (e) => console.log(`BigButton clicked`, BigButton);
  const type = "button";
  const bigButtonProps = {
    ...props,
    id,
    children,
    className,
    type,
    onClick: handleClick,
  };
  return <Button {...bigButtonProps} />;
}
