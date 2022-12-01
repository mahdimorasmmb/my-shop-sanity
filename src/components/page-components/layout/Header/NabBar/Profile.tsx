import Image from "next/image";
import React from "react";
import { UserIcon } from "@heroicons/react/outline";

const Profile = () => {
  const session = false;

  if (session && session?.user.image) {
    return (
      <Image
        src={session?.user.image}
        alt=""
        className="cursor-pointer rounded-full"
        width={34}
        height={34}
        //   onClick={()=>signOut}
      />
    );
  }
  return (
    <UserIcon className="h-6 w-6 cursor-pointer rounded-full opacity-75 transition hover:opacity-100" />
  );
};

export default Profile;
