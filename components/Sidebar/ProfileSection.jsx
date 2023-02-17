import React from "react";
import ProfileIcon from "../../assets/svgs/ProfileIcon.svg";
import SignOutIcon from "../../assets/svgs/SignOutIcon.svg";

const ProfileSection = () => {
  return (
    <div>
      <ProfileIcon />
      <div>
        <span>Test User</span>
        <span>demouser@test.com</span>
      </div>
      <SignOutIcon />
    </div>
  );
};

export default ProfileSection;
