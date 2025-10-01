import { useEffect, useState } from "react";
import avatarDefault from "../../../public/image/avatarDefault.png";
import styles from "./Profile.module.scss";
function Profile() {
  const [preView, setPreView] = useState();
  const handle = (e) => {
    const image = e.target.files[0];
    const preViewImg = URL.createObjectURL(image);
    console.log(preViewImg);
    setPreView(preViewImg);
  };
  useEffect(() => {
    return () => {
      URL.revokeObjectURL(preView);
    };
  }, [preView]);
  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>
        <input type="file" accept="image/*" hidden onChange={handle} />
        <img src={preView || avatarDefault} alt="Avatar" />
      </label>
    </div>
  );
}
export default Profile;
