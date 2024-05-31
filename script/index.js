let button = document.getElementById('btn')
button.addEventListener('click', (event)=>{
    event.preventDefault()
    calculate()
})
function calculate() {
    const prices = document.querySelectorAll('.price');
    const quantities = document.querySelectorAll('.quantity input');
    const totals = document.querySelectorAll('[total]');
    let femaleTotal = 0;
    let maleTotal = 0;
    for (let i = 0; i < prices.length; i++) {
        const price = parseFloat(prices[i].textContent);
        const quantity = parseInt(quantities[i].value);
        const total = price * quantity;
        totals[i].textContent = total.toFixed(2);
        if (i === 0) {
            femaleTotal += total;
        } else if (i === 1) {
            maleTotal += total;
        }
    }
    // Calculate the overall total by adding female and male totals
    const overallTotal = femaleTotal + maleTotal;
    // Display the individual totals and overall total
    const femaleTotalElement = document.querySelector('[female-total]');
    femaleTotalElement.textContent = ` R${femaleTotal.toFixed(2)}`;
    const maleTotalElement = document.querySelector('[male-total]');
    maleTotalElement.textContent = ` R${maleTotal.toFixed(2)}`;
    const overallTotalElement = document.querySelector('[overall-total]');
    overallTotalElement.textContent = `R${overallTotal.toFixed(2)}`;
}






