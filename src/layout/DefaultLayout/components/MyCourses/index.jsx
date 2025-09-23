import styles from "./MyCourses.module.scss";
import { useState, useEffect, useRef } from "react";
function MyCourses() {
    const [isOpen, setIsOpen] = useState(false);
    const [courses, setCourses] = useState([]);
    const dropdown = useRef();
    useEffect(() => {
        const courses = [
            { id: 1, title: "JavaScript Cơ Bản", progress: "50%" },
            { id: 2, title: "React JS", progress: "20%" },
            { id: 3, title: "Node.js", progress: "80%" },
            { id: 4, title: "HTML CSS Pro", progress: "100%" },
        ];
        setCourses(courses);
        const hangdle = (e) => {
            if (dropdown.current && !dropdown.current.constant(e.target())) {
                setIsOpen(false);
            }
        };
        document.addEventListener("click", hangdle);
        return () => {
            document.removeEventListener("click", hangdle);
        };
    }, [isOpen, courses]);
    return (
        <div className={styles.myCourses} ref={dropdown}>
            <button
                className={styles.toggleButton}
                onClick={() => setIsOpen(!isOpen)}
            >
                Khóa học của tôi
            </button>
            {isOpen && (
                <div className={styles.dropdown}>
                    <div className={styles.dropdownHeader}>
                        <h4>Khóa học của tôi</h4>
                    </div>
                    <div className={styles.courseList}>
                        {courses.map((course) => (
                            <a
                                href="#"
                                key={course.id}
                                className={styles.courseItem}
                            >
                                <div className={styles.courseInfo}>
                                    <span className={styles.courseTitle}>
                                        {course.title}
                                    </span>
                                    <span className={styles.courseProgressText}>
                                        {course.progress}
                                    </span>
                                </div>
                                <div className={styles.progressBar}>
                                    <div
                                        className={styles.progressValue}
                                        style={{ width: course.progress }}
                                    ></div>
                                </div>
                            </a>
                        ))}
                    </div>
                    <div className={styles.dropdownFooter}>
                        <a href="#">Xem tất cả</a>
                    </div>
                </div>
            )}
        </div>
    );
}
export default MyCourses;
