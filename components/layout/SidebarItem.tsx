import { useRouter } from "next/router";
import React, { useCallback } from "react";
import { IconType } from "react-icons";
import useCurrentUser from "@/hooks/useCurrentUser";
import useLoginModal from "@/hooks/useLoginModal";

interface SidebarItemProps {
  label: string;
  href?: string;
  icon: IconType;
  onClick?: () => void;
  auth?: boolean;
}
const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  href,
  icon: Icon,
  onClick,
  auth,
}) => {
  const loginModal = useLoginModal();
  const { data: currentUser } = useCurrentUser();
  const router = useRouter();
  const handleClick = useCallback(() => {
    if (onClick) {
      return onClick();
    }

    if (auth && !currentUser) {
      loginModal.onOpen();
    } else if (href) {
      router.push(href);
    }
  }, [router, onClick, href, currentUser, auth, loginModal]);

  return (
    <div onClick={handleClick} className="flex flex-row items-center m-1">
      {/* phone */}
      <div
        className="
    relative
    rounded-md
    h-14
    w-14
    flex
    items-center
    justify-center
    p-4
    hover:bg-stone-400
    transition duration-300 ease-in-out hover:scale-110
    hover:bg-opacity-10
    cursor-pointer
    lg:hidden
    
    "
      >
        <Icon size={28} color="white" />
      </div>
      <div
        className="
      relative
      hidden
      lg:flex
      items-center
      gap-4
      p-4
      rounded-md
      hover:bg-stone-400
      hover:bg-opacity-10
      cursor-pointer
      transition duration-300 ease-in-out hover:scale-110
      "
      >
        <Icon size={24} color="white" />
        <p className=" hidden lg:block text-white text-xl">{label}</p>
      </div>
    </div>
  );
};

export default SidebarItem;
