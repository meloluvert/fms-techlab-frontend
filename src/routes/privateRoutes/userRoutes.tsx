import { Profile } from "../../pages/User/Profile/ViewProfile";

  import { ProfileEdit } from "../../pages/User/Profile/EditProfile";
import { ProfileEditPassword } from "../../pages/User/Profile/EditPassword";
export const userRoutes = [
  {
    path: "/profile/",
    element: <Profile />,
  },
  {
    path: "/profile/edit",
    element: <ProfileEdit />,
  },
  {
    path: "/profile/edit/password",
    element: <ProfileEditPassword />,
  },
];
