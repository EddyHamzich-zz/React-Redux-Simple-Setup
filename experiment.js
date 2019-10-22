async function getData() {
    const stocksData = await Promise.all(
        [
        "data1",
        "data2"
        ]
    )
    .then( ([TSLA, AAPL]) => ({TSLA, AAPL}) );
    
    console.log(stocksData);
}

getData();