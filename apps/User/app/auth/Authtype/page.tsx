"use client";

import { useSession } from "next-auth/react";
import Loading from "@repo/ui/Loader";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import PlainButton from "@repo/ui/Button";
import Authcard from "../../../components/AuthCard";
import { Authtype } from "@repo/data/AuthtypeDataJson";
import { useState } from "react";
import UpdateAccount from "../../../lib/actions/UpdateAccount";

const Page = () => {
  const Router = useRouter();
  const [selectedValue, setSelectedValue] = useState<number>(0);
  const [loading, setloading] = useState<boolean>(false);

  const { data: session, status } = useSession();

  const handleChange = (index: number) => {
    setSelectedValue(index);
  };

  const HandleSubmit = async () => {
    const Email = session?.user.email || "";
    const Value = Authtype[selectedValue]?.title;

    try {
      setloading(true);
      const response = await UpdateAccount(Email, Value);
      if (response.Authenticated) {
        toast.success("Account Created Successfully");
        Router.push("/dash/myprofile");
      } else {
        toast.error("Something Went Wrong try again");
      }
    } catch (e) {
      console.error("Error in AuthType Updation :- ");
      toast.error(`Please try again ${e}`);
    } finally {
      setloading(false);
    }
  };

  return (
    <div>
      {status === "loading" ? (
        <div>
          <Loading />
        </div>
      ) : (
        !session?.user.Authenticated &&
        (loading ? (
          <Loading />
        ) : (
          <div className="mt-8   flex flex-col gap-8">
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-2xl font-semibold">
                Hey {session?.user.name}
              </h1>
              <p className="text-richblack-100">Choose your Role</p>
            </div>
            <div className="space-y-4 px-4 md:px-0 md:space-y-6 lg:space-y-8">
              {Authtype.map((element, index) => (
                <Authcard
                  title={element.title}
                  Subtitle={element.subtitle}
                  Content={element.content}
                  index={index}
                  selectedValue={selectedValue}
                  onChange={handleChange}
                />
              ))}
            </div>
            <div className="flex flex-col items-center  w-full">
              <PlainButton
                active={true}
                width_Button="full"
                onClick={HandleSubmit}
              >
                Submit
              </PlainButton>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Page;
