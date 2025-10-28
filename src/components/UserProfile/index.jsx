import React, { useEffect, useState } from "react";
import styles from "./UserProfile.module.scss";

const UserProfile = ({ isLoading }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch("https://dummyjson.com/users/1")
            .then((res) => res.json())
            .then((data) => setUser(data))
            .catch((error) => console.error("Error fetching user:", error));
    }, []);

    return (
        <>
            {isLoading ? (
                <div className={styles.spinner}></div>
            ) : (
                <div>
                    <div className={styles.userContainer}>
                        <img
                            src={user.image}
                            alt={user.firstName}
                            className={styles.userAvatar}
                        />
                        <h2>
                            {user.firstName} {user.lastName}
                        </h2>
                        <p>
                            <strong>Email:</strong> {user.email}
                        </p>
                        <p>
                            <strong>Phone:</strong> {user.phone}
                        </p>
                        <p>
                            <strong>Age:</strong> {user.age}
                        </p>
                        <p>
                            <strong>Company:</strong> {user.company?.name}
                        </p>
                        <p>
                            <strong>Address:</strong> {user.address?.address},{" "}
                            {user.address?.city}
                        </p>
                    </div>
                </div>
            )}
        </>
    );
};

export default UserProfile;
