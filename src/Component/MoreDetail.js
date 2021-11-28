import moreStyle from "../CSS/MoreDetail.module.css";

function MoreDetail(props) {
  // Show Details about user after data is fetched.
  if (props?.userName) {
    const userImg = props.userImg;
    const userName = `${props.userName.title} ${props.userName.first} ${props.userName.last}`;
    const location = props.userLocation;
    const userAddress = `${location.street.number} ${location.street.name}, ${location.city}, ${location.country}`;
    const userEmail = props.userEmail;
    const userTel = props.userTel;

    // Date format from ISO Standard to locale format
    const dob = new Intl.DateTimeFormat(navigator.language, {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(props.dob.date));
    const userDob = `${dob}`;

    // Accept image and name, all required user details in fields array.
    const fields = [
      { label: "DOB", value: userDob },
      { label: "Address", value: userAddress },
      { label: "Email", value: userEmail },
      { label: "Tel", value: userTel },
    ];

    return (
      <div className={`${moreStyle["more-detail"]}`}>
        <img src={userImg} alt="User" className={moreStyle.userImg} />

        <div className={moreStyle.content}>
          <p className={moreStyle.userName}>{userName}</p>
          {fields.map((field) => {
            return (
              <p className={moreStyle.property} key={field.label}>
                <span className={moreStyle.label}>{field.label}</span>
                <span className={moreStyle.value}>{field.value}</span>
              </p>
            );
          })}
        </div>
      </div>
    );
  }

  // Show "Loading..." until data is fetched.
  else {
    return <center className={`${moreStyle.loading}`}>Loading...</center>;
  }
}

export default MoreDetail;
