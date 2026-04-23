document.addEventListener("DOMContentLoaded", () => {
    const fromCurrency = document.getElementById("fromCurrency");
    const toCurrency = document.getElementById("toCurrency");
    const startDate = document.getElementById("startDate");
    const endDate = document.getElementById("endDate");
    const fromError = document.getElementById("fromError");
    const toError = document.getElementById("toError");
    const startError = document.getElementById("startError");
    const endError = document.getElementById("endError");
    const showBtn = document.getElementById("showResults");
    const clearBtn = document.getElementById("clearForm");

    let chart = null;

    // Set "To Date" to today by default
    const today = new Date().toISOString().split('T')[0];
    toDate.value = today;

    showBtn.addEventListener("click", () => {
        clearErrors();

        const from = fromCurrency.value;
        const to = toCurrency.value;
        const start = startDate.value;   
        const end = endDate.value;       

        let valid = true;
        if (!from) { fromError.textContent = "Required"; valid = false; }
        if (!to) { toError.textContent = "Required"; valid = false; }
        if (!start) { startError.textContent = "Required"; valid = false; }
        if (!end) { endError.textContent = "Required"; valid = false; }
        
        if (!valid) return;

        // Massive.com / Polygon API Settings
        const apiKey = "gceGVkrlWmEWUN9ONAaUX0aPokVhcR51"; 
        const ticker = `C:${from}${to}`;
        const url = `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/${start}/${end}?adjusted=true&sort=asc&apiKey=${apiKey}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                // IMPORTANT: Massive.com results are stored in data.results
                if (!data.results || data.results.length === 0) {
                    alert("No Data Found. Try Date Range From Previous Month.");
                    return;
                }

                // Map results: 't' is time (ms), 'c' is closing price
                let points = data.results.map(item => ({
                    x: item.t, 
                    y: item.c
                }));

                drawChart(points, from, to);
            })
            .catch(err => {
                alert("API Connection Error. Try Again in 60 Seconds.");
            });
    });

    clearBtn.addEventListener("click", () => {
        // Reset Inputs
        fromCurrency.value = "";
        toCurrency.value = "";
        startDate.value = "";
        endDate.value = today;

        // Reset Errors
        clearErrors();

        // Destroy Chart
        if (chart) {
            chart.destroy();
            chart = null;
        }
    });

    function clearErrors() {
        [fromError, toError, startError, endError].forEach(el => el.textContent = "");
    }

    function drawChart(points, from, to) {
        const ctx = document.getElementById("chart").getContext('2d');
        if (chart) chart.destroy();

        chart = new Chart(ctx, {
            type: "line",
            data: {
                datasets: [{
                    label: `${from} to ${to}`,
                    data: points,
                    borderColor: "#2c3e50",
                    backgroundColor: "rgba(44, 62, 80, 0.1)",
                    borderWidth: 2,
                    fill: true,
                    tension: 0.1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    x: {
                        type: "time",
                        time: { unit: "day" },
                        title: { display: true, text: "Date" }
                    },
                    y: {
                        title: { display: true, text: "Exchange Rate" }
                    }
                }
            }
        });
    }
});