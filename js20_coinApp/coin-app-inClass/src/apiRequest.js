import { renderCoins } from "./renderData"



export const apiRequest = async (input) => {
    const API_KEY = "coinranking734f14b6d044ed7b30d43d513756abfe54db3b39dc88ddc2"
    const options = { headers: { "x-access-token": API_KEY } }

    const url = `https://api.coinranking.com/v2/coins?search=${input}`
    try {
        const res = await fetch(url, options)
        const json = await res.json()
        if (json.data.coins.lenght === 0) {
            alert("Coin can not be found")
        } else {
            renderCoins(json.data.coins[0])
        }

    } catch (error) {
        console.log(error)
    }
}
