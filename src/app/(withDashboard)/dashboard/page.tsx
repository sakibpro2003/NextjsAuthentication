import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <div>
      <h1 className="text-4xl text-center mt-10">
        Welcome To {session?.user?.name}
      </h1>
      <h1>User email: {session?.user?.email}</h1>
      {/* <Image
        src={session?.user?.image}
        width={100}
        height={100}
        alt="user profile picture"
      /> */}
    </div>
  );
};

export default DashboardPage;
