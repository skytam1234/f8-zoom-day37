import ProductList from "../../components/ProductList";
import UserProfile from "../../components/UserProfile";
import withLoading from "../../HOC/withLoading";
const UserProfileF = withLoading(UserProfile);
const ProductListF = withLoading(ProductList);
function HocDemo() {
    return (
        <>
            <UserProfileF />
            <ProductListF />
        </>
    );
}
export default HocDemo;
