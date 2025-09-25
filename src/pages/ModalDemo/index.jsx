import { useState } from "react";
import Modal from "../../components/Modal";
function ModalDemo() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <button
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
            >
                Open Modal
            </button>
            <Modal
                isOpen={isOpen}
                onRequestClose={() => {
                    setIsOpen(!isOpen);
                }}
            >
                <h2>Modal</h2>
                <button
                    onClick={() => {
                        setIsOpen(false);
                    }}
                >
                    Close
                </button>
            </Modal>
        </div>
    );
}
export default ModalDemo;
