import { useState } from "react";
import ProductList from "../../components/ProductList";
import UserProfile from "../../components/UserProfile";
import withLoading from "../../HOC/withLoading";

const UserProfileWithLoading = withLoading(UserProfile);
const ProductListWithLoading = withLoading(ProductList);

function HOCDemo() {
    const [userLoading, setUserLoading] = useState(true);
    const [productLoading, setProductLoading] = useState(true);

    return (
        <div style={{ padding: "20px" }}>
            <h1>HOC Demo - Higher-Order Component Pattern</h1>
            <p>
                HOC là một hàm nhận vào một component và trả về component mới
                với tính năng thêm
            </p>

            <div
                style={{
                    marginTop: "20px",
                    marginBottom: "20px",
                    padding: "16px",
                    background: "#f5f5f5",
                    borderRadius: "8px",
                }}
            >
                <h3>Điều khiển</h3>
                <div style={{ display: "flex", gap: "12px", marginTop: "12px" }}>
                    <button
                        onClick={() => setUserLoading(!userLoading)}
                        style={{
                            padding: "8px 16px",
                            background: "#4a90d9",
                            color: "white",
                            border: "none",
                            borderRadius: "4px",
                            cursor: "pointer",
                        }}
                    >
                        {userLoading ? "Hiện" : "Ẩn"} User Profile
                    </button>
                    <button
                        onClick={() => setProductLoading(!productLoading)}
                        style={{
                            padding: "8px 16px",
                            background: "#4a90d9",
                            color: "white",
                            border: "none",
                            borderRadius: "4px",
                            cursor: "pointer",
                        }}
                    >
                        {productLoading ? "Hiện" : "Ẩn"} Product List
                    </button>
                </div>
            </div>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "20px",
                }}
            >
                <div>
                    <h3>User Profile</h3>
                    <UserProfileWithLoading isLoading={userLoading} />
                </div>
                <div>
                    <h3>Product List</h3>
                    <ProductListWithLoading isLoading={productLoading} />
                </div>
            </div>

            <div
                style={{
                    marginTop: "24px",
                    padding: "16px",
                    background: "#fff3cd",
                    borderRadius: "8px",
                    borderLeft: "4px solid #ffc107",
                }}
            >
                <h3>Cách hoạt động:</h3>
                <ul style={{ margin: "8px 0 0 0", paddingLeft: "20px" }}>
                    <li>
                        <code>withLoading(Component)</code> trả về một component
                        mới
                    </li>
                    <li>
                        Nếu <code>isLoading=true</code>, hiển thị spinner thay vì
                        component
                    </li>
                    <li>
                        Nếu <code>isLoading=false</code>, hiển thị component bình
                        thường
                    </li>
                    <li>
                        Component gốc không cần xử lý logic loading
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default HOCDemo;
