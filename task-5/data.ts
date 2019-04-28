namespace A5 {
    export interface HeteroData {
        product: string;
        price: number;
        type: string;
    }

    export interface HomoData {
        [key: string]: HeteroData[];
    }

    export let shopData: HomoData = {
        "IceCream": [
            { product: "Chocolate", price: 1, type: "checkbox"},
            { product: "Strawberry", price: 1, type: "checkbox"},
            { product: "Vanilla", price: 1, type: "checkbox"},
            { product: "Melon", price: 1, type: "checkbox"},
            { product: "Hazelnut", price: 1, type: "checkbox"},
            { product: "Banana", price: 1, type: "checkbox"}
        ],

        "Extras": [
            { product: "Cream", price: 0.50, type: "checkbox"},
            { product: "Caramel", price: 0.50, type: "checkbox"},
            { product: "Sprinkles", price: 0.50, type: "checkbox"},
            { product: "White Chocolate", price: 0.50, type: "checkbox"}
        ],

        "Container": [
            { product: "Cone", price: 0, type: "radio"},
            { product: "Cup", price: 0, type: "radio"}
        ],

        "DeliveryOptions": [
            { product: "Delivery", price: 2, type: "radio"},
            { product: "Pickup", price: 0, type: "radio"}
        ]
    };
}
