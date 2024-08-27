import { currentUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hook";

const MeetingRoomsPage = () => {
  const user = useAppSelector(currentUser);

  return (
    <div>
      <h2>{user?.email}</h2>
    </div>
  );
};

export default MeetingRoomsPage;
