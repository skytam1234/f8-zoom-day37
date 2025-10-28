import { useState } from "react";

function withLoading(Component) {
    const WrappedComponent = () => {
        const [isLoading, setIsLoading] = useState(true);

        const toggleLoading = () => {
            setIsLoading((prev) => !prev);
        };
        return (
            <>
                <button
                    onClick={() => {
                        toggleLoading();
                    }}
                >
                    Toggle
                </button>
                <Component isLoading={isLoading} />
            </>
        );
    };
    return WrappedComponent;
}
export default withLoading;
