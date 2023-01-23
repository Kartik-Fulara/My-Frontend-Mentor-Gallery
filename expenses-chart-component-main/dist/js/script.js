

window.onload = init = () => {
    const graph = document.getElementById('graph');

    const data = [
        {
            "day": "mon",
            "price": 15.25,
            "max": false,
        },
        {
            "day": "tue",
            "price": 32.65,
            "max": false,
        },
        {
            "day": "wed",
            "price": 52.36,
            "max": false,
        },
        {
            "day": "thu",
            "price": 31.07,
            "max": false,
        },
        {
            "day": "fri",
            "price": 20.65,
            "max": false,
        },
        {
            "day": "sat",
            "price": 35.85,
            "max": false,
        },
        {
            "day": "sun",
            "price": 22.65,
            "max": false,
        },
    ];

    // find max price and replace max value with true
    const maxPrice = Math.max(...data.map((item) => item.price));
    const maxPriceIndex = data.findIndex((item) => item.price === maxPrice);
    data[maxPriceIndex].max = true;



    graph.innerHTML = `
<tbody>
		${data.map((item) => `
        <tr style="height:${item.price + 10}%" >
            <th class="price" scope="row">$${item.price}</th>
            <th class="bar ${item.max ? "bg-cyan" : "bg-soft-red"}"></th>
            <th class="day" scope="row">${item.day}</th>
		</tr>
        `).join('')}
	</tbody>
`;
}