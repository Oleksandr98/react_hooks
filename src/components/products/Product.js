import {Component, React} from "react";
import {getCategory, getProduct, removeProduct} from "../../PathResolver";
import {withRouter} from "react-router";
import {inject, observer} from "mobx-react";

class Product extends Component {
    removeAndRedirect = (id) => {
        removeProduct(id);
        window.location.href="/products";
    }

    render() {
        const product = this.props.productStore.products.find(x => x.id === parseInt(this.props.match.params.id));
        return (
            <div style={{textAlign: "left"}}>
                <a href="/products">Back to products</a>

                <p>Name: {product?.name}</p>
                <p>Code: {product?.code}</p>
                <p>Description: {product?.description}</p>
                <p>Price: {product?.value} PLN</p>
                <p>Create date: {
                    new Date(product?.createDate).toLocaleString()
                }</p>
                <p>Category: {product?.category?.name}</p>
                <a href={"/products/" + product?.id + "/modify"}>Modify</a>  &nbsp;
                <a href="#" onClick={() => this.removeAndRedirect(product?.id)}>Remove</a>
            </div>);
    }

}

export default inject('productStore')(withRouter(observer(Product)))