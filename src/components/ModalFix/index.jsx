import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import styles from "./Modal.module.scss";
import clsx from "clsx";

const ModalFix = forwardRef(
  (
    {
      isOpen: _isOpen = false,
      children,
      onRequestClose,
      closeTimeoutMS = 0,
      onAfterOpen,
      onAfterClose,
      overlayClassName,
      className,
      bodyOpenClassName,
      htmlOpenClassName,
      shouldCloseOnOverlayClick = true,
      shouldCloseOnEsc = true,
      ...passProps
    },
    ref
  ) => {
    
    const modalRef = useRef();
    const [isVisible, setIsVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(_isOpen);
   
    useImperativeHandle(ref, () => ({
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
        toggle: () => setIsOpen(prev => !prev),
    }),[]);

    useEffect(() => {
       
          setIsOpen(_isOpen);
       
      }, [_isOpen]);
    

    // Xử lý animation khi mở/đóng modal
    useEffect(() => {
      let timeoutId;

      if (isOpen) {
        // Mở modal
        setIsVisible(true);
       

        // Gọi callback sau khi animation hoàn thành
        timeoutId = setTimeout(() => {
          
          if (typeof onAfterOpen === "function") {
            onAfterOpen();
          }
        }, closeTimeoutMS || 300);
      } else if (isVisible) {
        // Đóng modal
    

        timeoutId = setTimeout(() => {
          setIsVisible(false);
       
          if (typeof onAfterClose === "function") {
            onAfterClose();
          }
        }, closeTimeoutMS || 300);
      }

      return () => {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
      };
    }, [isOpen, closeTimeoutMS, isVisible]);

    // Xử lý phím Escape
    useEffect(() => {
      const handleKeyDown = (event) => {
        if (event.key === "Escape" && shouldCloseOnEsc && isOpen) {
          onRequestClose();
        }
      };

      if (isOpen) {
        document.addEventListener("keydown", handleKeyDown);
      }

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }, [isOpen, shouldCloseOnEsc, onRequestClose]);

    // Xử lý thêm class vào body
    useEffect(() => {
      if (isOpen && bodyOpenClassName) {
        document.body.classList.add(bodyOpenClassName);
      }

      return () => {
        if (bodyOpenClassName) {
          document.body.classList.remove(bodyOpenClassName);
        }
      };
    }, [isOpen, bodyOpenClassName]);

    // Xử lý thêm class vào html
    useEffect(() => {
      if (isOpen && htmlOpenClassName) {
        document.documentElement.classList.add(htmlOpenClassName);
      }

      return () => {
        if (htmlOpenClassName) {
          document.documentElement.classList.remove(htmlOpenClassName);
        }
      };
    }, [isOpen, htmlOpenClassName]);

    // Xử lý click overlay
    const handleOverlayClick = (event) => {
      if (shouldCloseOnOverlayClick && event.target === event.currentTarget) {
        onRequestClose();
      }
    };

    // Không render nếu modal không hiển thị
    if (!isVisible) {
      return null;
    }

    return (
      <div
        {...passProps}
        ref={modalRef}
        className={clsx(styles.modal, className, {
          [styles.isOpen]: isOpen && closeTimeoutMS > 0,
          [styles.isClose]: !isOpen && isVisible,
          [styles.isBasic]: isOpen && closeTimeoutMS === 0,
        })}
      >
        <div className={styles.body}>
          <div
            className={styles.closeButton}
            onClick={onRequestClose}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                onRequestClose();
              }
            }}
            aria-label="Đóng modal"
          >
            <i className="fa-solid fa-x"></i>
          </div>
          {children}
        </div>
        <div
          className={clsx(styles.overlay, overlayClassName)}
          onClick={handleOverlayClick}
        />
      </div>
    );
  }
);

export default ModalFix;
