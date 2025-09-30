const products = [
    { id: "fc-1888", name: "flux capacitor" },
    { id: "fc-2050", name: "power laces" },
    { id: "fs-1987", name: "time circuits" },
    { id: "ac-2000", name: "low voltage reactor" },
    { id: "jj-1969", name: "warp equalizer" }
];

const productSelect = document.getElementById("product");

const placeholder = document.createElement("option");
placeholder.textContent = "Select a Product ...";
placeholder.disabled = true;
placeholder.selected = true;
productSelect.appendChild(placeholder);

products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
});
