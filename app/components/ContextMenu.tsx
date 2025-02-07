import Link from "next/link";
import { useClickOutside } from "../hooks/useClickOutside";
import { useRef } from "react";
import { logout } from "../auth/actions";
interface Props {
  onClickOutside: () => void;
  show: boolean;
}
const ContextMenu = ({ onClickOutside, show }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const itemClass = "w-full";
  const itemLinkClass = "block w-full hover hover:bg-primary-brighter p-3";
  useClickOutside(ref, onClickOutside);

  const handleLogout = async () => {
    await logout();
    onClickOutside();
  };

  return (
    show && (
      <div
        className="fixed top-14 right-0 w-auto min-w-32 bg-primary shadow-md shadow-slate-600 z-1"
        ref={ref}
      >
        <ul>
          <li className="w-full">
            <Link href="/auth/login" className={itemLinkClass}>
              Login
            </Link>
          </li>
          <li className="w-full">
            <Link href="/auth/signup" className={itemLinkClass}>
              Sign Up
            </Link>
          </li>
          <li
            className={`${itemLinkClass} cursor-pointer`}
            onClick={handleLogout}
          >
            Logout
          </li>
        </ul>
      </div>
    )
  );
};

export default ContextMenu;
