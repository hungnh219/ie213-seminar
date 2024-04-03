import { useState } from "react";
import Button from "./components/Button";
import DelButton from "./components/DelButton";
import Cell from "./components/Cell.js";
import Popup from "./components/Popup.js";
import data from "./data.js";

export default function App() {
  // const [people, setPeople] = useState(data);
  const people = data;
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupTitle, setPopupTitle] = useState("");

  const openPopup = (title) => {
    setIsPopupOpen(true);
    setPopupTitle(title);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleFindClick = () => {
    //xử lí tìm kiếm
    console.log('Done');
  }

  const handleNewUserClick = () => {
    openPopup("New User Form");
  };

  const handleChangeClick = (person) => {
    openPopup(`Change Employee (${person.firstname})`);
  };

  const handleDeleteClick = (person) => {
    // Xử lý xóa nhân viên khỏi bảng
    console.log(`Deleted ${person.id}`);
  };

  return (
    <div className="flex flex-col justify-center mt-10">
      <div className="flex justify-center">
        <input type="search" placeholder="Enter search content" className="w-1/3 mx-2 px-2 outline-none border-2 border-black rounded"/>
        <div className="w-1/6 flex justify-between ">
          <Button title={"Find"} onClick={() => {
            handleFindClick();
          }}/>
          <Button title={"New User"} onClick={handleNewUserClick} />
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <table className="table-auto border-spacing-2 w-full border-collapse border border-slate-400">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-300">First Name</th>
              <th className="py-2 px-4 border-b border-gray-300">Last Name</th>
              <th className="py-2 px-4 border-b border-gray-300">Email</th>
              <th className="py-2 px-4 border-b border-gray-300">Phone</th>
              <th className="py-2 px-4 border-b border-gray-300">Birthday</th>
              <th className="py-2 px-4 border-b border-gray-300"></th>
              <th className="py-2 px-4 border-b border-gray-300"></th>
            </tr>
          </thead>
          <tbody>
            {people.map((person) => {
              return (
                <tr key={person.id}>
                  <Cell content={person.firstname} />
                  <Cell content={person.lastname} />
                  <Cell content={person.email} />
                  <Cell content={person.phone} />
                  <Cell content={person.birthday} />
                  <Cell
                    content={
                      <Button
                        title="Change"
                        onClick={() => {
                          handleChangeClick(person);
                        }}
                      />
                    }
                  />
                  <Cell
                    content={
                      <DelButton
                        title="Delete"
                        onClick={() => {
                          handleDeleteClick(person);
                        }}
                      />
                    }
                  />
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Popup title={popupTitle} isOpen={isPopupOpen} onClose={closePopup} />
    </div>
  );
}
