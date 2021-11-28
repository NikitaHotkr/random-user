import React, { useEffect, useState } from "react";
import storeData from "../State/store";
import InitialDetail from "./InitialDetail";
import MoreDetail from "./MoreDetail";
import cardStyle from "../CSS/Card.module.css";
import { Link, Routes, Route } from "react-router-dom";

function Card() {
  const [userData, setUserData] = useState(null);

  // fetch data from Redux Store into UserData
  useEffect(function () {
    async function loadData() {
      const data = await storeData();
      setUserData(data);
    }
    loadData();
  }, []);

// console.log(userData);
console.log("playing with creating new branch");
  // Based on URL path, card details are changed. 
  return (
    <div className={cardStyle.card}>
      <Link to={`/detail`} className={cardStyle.noStyle}>
        <Routes>
          <Route
            path="/"
            element={
              <InitialDetail
                userImg={userData?.picture?.medium}
                userName={userData?.name}
                userEmail={userData?.email}
              />
            }
          ></Route>
        </Routes>
      </Link>

      <Routes>
        <Route
          path={`/detail`}
          element={
            <MoreDetail
              userImg={userData?.picture?.large}
              userName={userData?.name}
              dob={userData?.dob}
              userLocation={userData?.location}
              userEmail={userData?.email}
              userTel={userData?.cell}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default Card;
