import { addToCart } from "../addToCart.js";
import { quantityToggle } from "../quantityToggle.js";

const productTemplate = document.querySelector("#productTemplate");

export const showProductContainer = (products) => {
    // Instead of hardcoding categories, we use a mapping of category names to container IDs.
    const categoryContainers = {
        "New Arrivals": document.querySelector("#new_arrivals_product_container"),
        "Best Seller": document.querySelector("#best_seller_product_container"),
        "Eyeglass": document.querySelector("#eyeglasses_product_container"),
        "Sunglass": document.querySelector("#sunglasses_product_container"),
        // Add more categories and their corresponding container IDs here.
        //== "Lens": document.querySelector("#reading_glass_product_container"),
        //== "Water": document.querySelector("#contact_lens_product_container"),
    };

    if (!productTemplate || !products) {
        return false;
    }

    products.forEach((curProd) => {
        const { category, description, id, image, name, price } = curProd;

        // Get the target container from the mapping using the product's category.
        // This replaces the previous if-else or switch-case logic.
        let targetContainer = categoryContainers[category];

        // If the product's category does not have a target container, skip the current iteration
        if (!targetContainer) return;

        const productClone = document.importNode(productTemplate.content, true);

        productClone.querySelector("#cardValue").setAttribute('id', `card${id}`);
        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productImage").src = image;
        productClone.querySelector(".productImage").alt = name;
        productClone.querySelector(".productDescription").textContent = description;
        productClone.querySelector(".productPrice").textContent = `${price}`;

        productClone.querySelector(".stockElement").addEventListener('click', (event) => {
            quantityToggle(event, id);
        });

        productClone.querySelector('.add_to_cart_btn').addEventListener('click', (event) => {
            addToCart(event, id);
        });

        targetContainer.append(productClone);
    });
};
