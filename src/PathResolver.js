import axios from "axios";

const serverPath = "http://localhost:8081";
const productsPath = serverPath + "/products";
const categoryPath = serverPath + "/categories";
const offersPath = serverPath + "/offers";
const customersPath = serverPath + "/customers";
const cardsPath = serverPath + "/cards";
const transactionPath = serverPath + "/transactions";
const couponsPath = serverPath + "/coupons";
const shoppingCartPath = serverPath + "/shopping-cart";
const ordersPath = serverPath + "/orders";
const locationsPath = serverPath + "/locations";

//products

async function getProducts() {
    return axios.get(productsPath);
}

async function addProduct(requestBody) {
    return axios.post(productsPath + "/add", requestBody);
}

async function updateProduct(id, requestBody) {
    return axios.post(productsPath + "/" + id, requestBody);
}

async function removeProduct(id) {
    return axios.delete(productsPath + "/" + id);
}

async function getProduct(id) {
    return axios.get(productsPath + "/" + id);
}

async function getCategories() {
    return axios.get(categoryPath);
}

async function getCategory(id) {
    return axios.get(categoryPath + "/" + id);
}

//offers

async function getOffers() {
    return axios.get(offersPath);
}

async function getOffer(id) {
    return axios.get(offersPath + "/" + id);
}

async function removeOffer(id) {
    return axios.delete(offersPath + "/" + id);
}

async function addOffer(requestBody) {
    return axios.post(offersPath + "/add", requestBody);
}

async function updateOffer(id, requestBody) {
    return axios.put(offersPath + "/" + id, requestBody);
}

//customers

async function getCustomers() {
    return axios.get(customersPath, {withCredentials: true});
}

async function getCustomer(id) {
    return axios.get(customersPath + "/" + id);
}

async function closeCustomer(id) {
    return axios.post(customersPath + "/" + id + "/close");
}

async function blockCustomer(id) {
    return axios.post(customersPath + "/" + id + "/block");
}

async function unblockCustomer(id) {
    return axios.post(customersPath + "/" + id + "/unblock");
}

async function addCustomer(requestBody) {
    return axios.post(customersPath + "/enroll", requestBody);
}

async function updateCustomer(id, requestBody) {
    return axios.put(customersPath + "/" + id, requestBody);
}

//cards

async function getCards() {
    return axios.get(cardsPath);
}

async function getCard(id) {
    return axios.get(cardsPath + "/" + id);
}

async function addCard(requestBody) {
    return axios.post(cardsPath + "/add", requestBody);
}

async function blockCard(id) {
    return axios.post(cardsPath + "/" + id + "/block");
}

async function closeCard(id) {
    return axios.post(cardsPath + "/" + id + "/close");
}

//transactions

async function getTransactions() {
    return axios.get(transactionPath);
}

async function getTransaction(id) {
    return axios.get(transactionPath + "/" + id);
}

//coupons

async function getCoupons() {
    return axios.get(couponsPath);
}

async function getCoupon(id) {
    return axios.get(couponsPath + "/" + id);
}

//carts
async function createCart(requestBody) {
    return axios.post(shoppingCartPath + "/create", requestBody);
}

async function getCarts() {
    return axios.get(shoppingCartPath);
}

async function getCart(id) {
    return axios.get(shoppingCartPath + "/" + id);
}

async function addToCart(id, requestBody) {
    return axios.post(shoppingCartPath + "/add/" + id, requestBody);
}

async function removeFromCart(id, pId) {
    return axios.post(shoppingCartPath + "/" + id + "/remove/" + pId);
}

async function placeOrder(id, cId, requestBody) {
    return axios.post(shoppingCartPath + "/" + id + "/" + cId, requestBody);
}

//orders
async function getOrders() {
    return axios.get(ordersPath);
}

async function getOrder(id) {
    return axios.get(ordersPath + "/" + id);
}

//locations

async function getLocations() {
    return axios.get(locationsPath);
}

async function getLocation(id) {
    return axios.get(locationsPath + "/" + id);
}

async function removeLocation(id) {
    return axios.delete(locationsPath + "/" + id);
}

async function addLocation(requestBody) {
    return axios.post(locationsPath + "/add", requestBody);
}

async function updateLocation(id, requestBody) {
    return axios.put(locationsPath + "/" + id, requestBody);
}

async function signIn(requestBody) {
    return axios.post(serverPath + "/signIn", requestBody, {withCredentials: true});
}

async function signUp(requestBody) {
    return axios.post(serverPath + "/signUp", requestBody);
}

async function signOut() {
    const token = getCookie("csrfToken");
    return axios.post(serverPath + "/signOut", {}, {headers: {'Csrf-Token': token}, withCredentials: true});
}

function getCookie(cookieName) {
    let cookiesStr = document.cookie.split(";");
    for (let i = 0; i < cookiesStr.length; i++) {
        let spl = cookiesStr[i].trim().split("=");
        if (spl[0].trim() === cookieName) {
            return spl[1].trim();
        }
    }
    return "";
}


export {
    getProducts, getCategories, getProduct, getCategory, addProduct, updateProduct, removeProduct,

    getOffers, getOffer, removeOffer, addOffer, updateOffer,

    getCustomers, getCustomer, closeCustomer, addCustomer, updateCustomer, blockCustomer, unblockCustomer,

    getCards, getCard, addCard, blockCard, closeCard,

    getTransaction, getTransactions,

    getCoupons, getCoupon,

    createCart, getCarts, getCart, addToCart, placeOrder, removeFromCart,

    getOrders, getOrder,

    getLocations, getLocation, addLocation, updateLocation, removeLocation,

    signIn, signUp, signOut
}
