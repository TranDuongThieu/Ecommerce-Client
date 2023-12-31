const path = {
    PUBLIC: "/",
    HOME: "",
    ALL: "*",
    LOGIN: "login",
    OUT_SERVICES: "services",
    PRODUCTS: "products",
    FAQ: "faq",
    CONFIRM_REGISTRATION: "confirm/:state",
    RESET_PASSWORD: "resetpassword/:token",
    CHECK_OUT: "checkout",
    COLLECTION: "",
    COLLECTIONS: "collections",
    DETAIL_COLLECTION: ":cid",
    DETAIL_PRODUCT: "products/:pid",
    getDetailProduct: (pid) => `products/${pid}`,
    CART: "cart",
    SEARCH_ORDER : "order",
    //auction
    AUCTION_PRODUCTS: "auction-products",
    DETAIL_AUCTION_PRODUCT: "auction-products/:pid",
    //admin
    ADMIN: "admin",
    DASHBOARD: "dashboard",
    CREATE_PRODUCT: "create-product",
    MANAGE_ORDERS: "manage-orders",
    MANAGE_PRODUCTS: "manage-products",
    MANAGE_USERS: "manage-users",
    EDIT_PRODUCT: "edit-product/:pid",
    CREATE_AUCTION_PRODUCT: "create-auction-product",
    MANAGE_AUCTION_PRODUCTS: "manage-auction-products",
    EDIT_AUCTION_PRODUCT: "edit-auction-product/:pid",

    //member
    MEMBER: "member",
    PERSONAL: "personal",
    MY_PURCHASES: "my-purchases",
    MY_AUCTION: "my-acuction",
};
export default path;
