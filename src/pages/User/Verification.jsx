import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { verifyAccount } from "../../Redux/authSlice";

const VerifyAccount = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [data, setData] = useState({ verificationToken: useParams().verificationToken });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!data.verificationToken) {
      toast.error("Invalid Link");
      return;
    }

    const res = await dispatch(verifyAccount(data));

    if (res.payload.success) {
      navigate("/login");
    }
  };

  return (
    <>
      <div className="flex items-center justify-center h-[120vh]"      >
        <form className="flex flex-col justify-center gap-6 rounded-lg p-4 text-white w-80 h-[26rem] shadow-[0_0_10px_black]">
          <h3 className="text-center text-2xl font-bold">Verify Account</h3>

          <button
            className="w-full bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer"
            onClick={handleFormSubmit}
          >
            Verify
          </button>
        </form>
      </div>
    </>
  );
};

export default VerifyAccount;
