import { useState } from "react";
import Modal from "../../components/Modal";
import styles from "./ModalDemo.module.scss";
function ModalDemo() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);
    return (
        <>
            <div className={styles["modal-item"]}>
                <button
                    onClick={() => {
                        setIsOpen(true);
                    }}
                >
                    Basic Modal
                </button>
                <Modal
                    isOpen={isOpen}
                    onRequestClose={() => {
                        setIsOpen(false);
                    }}
                >
                    <h2>Basic Modal</h2>
                    <button>Basic Modal</button>
                </Modal>
            </div>
            <div className={styles["modal-item"]}>
                <button
                    onClick={() => {
                        setIsOpen1(true);
                    }}
                >
                    Modal với Animation
                </button>
                <Modal
                    isOpen={isOpen1}
                    onRequestClose={() => {
                        setIsOpen1(false);
                    }}
                    closeTimeoutMS={300}
                >
                    <h2>Modal với Animation</h2>
                    <button>Modal với Animation</button>
                </Modal>
            </div>
            <div className={styles["modal-item"]}>
                <button
                    onClick={() => {
                        setIsOpen2(true);
                    }}
                >
                    Modal không đóng khi click overlay
                </button>
                <Modal
                    isOpen={isOpen2}
                    onAfterOpen={() => console.log("Modal đã mở")}
                    onAfterClose={() => console.log("Modal đã đóng")}
                    onRequestClose={() => {
                        setIsOpen2(false);
                    }}
                    closeTimeoutMS={1000}
                    overlayClassName="custom-overlay"
                    className="custom-modal"
                    bodyOpenClassName="modal"
                    htmlOpenClassName="modal-open"
                    shouldCloseOnEsc={true}
                >
                    <h2>Modal không đóng khi click overlay</h2>
                    <button>Modal không đóng khi click overlay</button>
                </Modal>
            </div>
            <div className={styles["modal-item"]}>
                <button
                    onClick={() => {
                        setIsOpen3(true);
                    }}
                >
                    Modal không đóng khi nhấn Esc
                </button>
                <Modal
                    isOpen={isOpen3}
                    onAfterOpen={() => console.log("Modal đã mở")}
                    onAfterClose={() => console.log("Modal đã đóng")}
                    onRequestClose={() => {
                        setIsOpen3(false);
                    }}
                    closeTimeoutMS={1000}
                    overlayClassName="custom-overlay"
                    className="custom-modal"
                    bodyOpenClassName="modal"
                    htmlOpenClassName="modal-open"
                    shouldCloseOnOverlayClick={true}
                >
                    <h2>Modal không đóng khi nhấn Esc</h2>
                    <button>Modal không đóng khi nhấn Esc</button>
                </Modal>
            </div>
            <div className={styles["modal-item"]}>
                <button
                    onClick={() => {
                        setIsOpen4(true);
                    }}
                >
                    Modal với custom className
                </button>
                <Modal
                    isOpen={isOpen4}
                    onRequestClose={() => {
                        setIsOpen4(false);
                    }}
                    closeTimeoutMS={1000}
                    overlayClassName="custom-overlay"
                    className={styles["custom-modal"]}
                    bodyOpenClassName="modal"
                    htmlOpenClassName="modal-open"
                    shouldCloseOnOverlayClick={true}
                    shouldCloseOnEsc={true}
                >
                    <h2>Modal với custom className</h2>
                    <button>Modal với custom className</button>
                </Modal>
            </div>
            <div className={styles["modal-item"]}>
                <button
                    onClick={() => {
                        setIsOpen5(true);
                    }}
                >
                    Modal với callbacks
                </button>
                <Modal
                    isOpen={isOpen5}
                    onAfterOpen={() => console.log("Modal đã mở")}
                    onAfterClose={() => console.log("Modal đã đóng")}
                    onRequestClose={() => {
                        setIsOpen5(false);
                    }}
                    closeTimeoutMS={1000}
                    overlayClassName="custom-overlay"
                    bodyOpenClassName="modal"
                    htmlOpenClassName="modal-open"
                    shouldCloseOnOverlayClick={true}
                    shouldCloseOnEsc={true}
                >
                    <h2>Modal với callbacks</h2>
                    <button>Modal với callbacks</button>
                </Modal>
            </div>
        </>
    );
}
export default ModalDemo;
