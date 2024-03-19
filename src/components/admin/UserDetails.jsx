import { useContext } from "react";
import myContext from "../../context/myContext";

const UserDetail = () => {
  const context = useContext(myContext);
  const { getAllUser } = context;
  return (
    <div>
      <div>
        <div className="py-5 flex justify-between items-center">
          <h1 className=" text-xl text-green-300 font-bold">All Users</h1>
        </div>

        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border border-collapse sm:border-separate border-green-100 text-green-400">
            <tbody>
              <tr>
                <th
                  scope="col"
                  className="h-12 px-6 text-md border-l first:border-l-0 border-green-100 text-slate-700 bg-slate-100 font-bold fontPara"
                >
                  No.
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 text-md border-l first:border-l-0 border-green-100 text-slate-700 bg-slate-100 font-bold fontPara"
                >
                  Name
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 text-md border-l first:border-l-0 border-green-100 text-slate-700 bg-slate-100 font-bold fontPara"
                >
                  Email
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 text-md border-l first:border-l-0 border-green-100 text-slate-700 bg-slate-100 font-bold fontPara"
                >
                  Uid
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 text-md border-l first:border-l-0 border-green-100 text-slate-700 bg-slate-100 font-bold fontPara"
                >
                  Role
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 text-md border-l first:border-l-0 border-green-100 text-slate-700 bg-slate-100 font-bold fontPara"
                >
                  Date
                </th>
              </tr>
              {getAllUser.map((value, index) => {
                return (
                  <tr key={index} className="text-green-300">
                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-green-100 stroke-slate-500 text-black ">
                      {index + 1}
                    </td>

                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-green-100 stroke-slate-500 text-black first-letter:uppercase ">
                      {value.name}
                    </td>

                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-green-100 stroke-slate-500 text-black cursor-pointer ">
                      {value.email}
                    </td>

                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-green-100 stroke-slate-500 text-black  cursor-pointer ">
                      {value.uid}
                    </td>

                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-green-100 stroke-slate-500 text-black  cursor-pointer ">
                      {value.role}
                    </td>

                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-green-100 stroke-slate-500 text-black cursor-pointer ">
                      {value.date}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
