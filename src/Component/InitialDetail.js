import initialStyle from "../CSS/InitialDetail.module.css";

function InitialDetail(props) {

  // Show few Initial Details about user after data is fetched.
  if (props?.userName) {
    const userImg = props.userImg;
    const userName = `${props.userName.title} ${props.userName.first} ${props.userName.last}`;
    const userEmail = props.userEmail;

    return (
      <center className={`${initialStyle["initial-detail"]}`}>
        <img src={userImg} alt="User" className={initialStyle.userImg} />
        <p className={initialStyle.userName}>{userName}</p>
        <p className={initialStyle.userEmail}>{userEmail}</p>
      </center>
    );
  }
  // show "Loading..." until data is fetched.
  else {
    return <center className={`${initialStyle.loading} `}>Loading...</center>;
  }
}

export default InitialDetail;
