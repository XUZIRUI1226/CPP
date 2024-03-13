<template>
    <div class = "container"> 
            <form id="myform"> 

                <h2>Add Coins</h2>

                <div class="formli">
                    <label for="coin1"> Coin Name: </label>
                    <input type="text" id="coin1" required="" placeholder="Enter Coin"> <br><br> 

                    <label for="ticker1"> Ticker: </label>
                    <input type="text" id="ticker1" required="" placeholder="Valid Ticker"> <br><br> 

                    <label for="buy1"> Buy Price: </label>
                    <input type="number" id="buy1" required="" placeholder="Buy Price"> <br><br> 

                    <label for="quant1"> Buy Quantity: </label>
                    <input type="number" id="quant1" required="" placeholder="Quantity"> <br><br>

                    <div class="save">
                        <button id="savebutton" type="button" v-on:click="savetofs()"> Save </button><br><br>
                    </div>
                </div>

            </form>
    </div>

</template>

<script> 
    import firebaseApp from '../firebase.js';
    import { getFirestore } from 'firebase/firestore';
    import { doc, setDoc } from 'firebase/firestore';
    const db = getFirestore(firebaseApp);

    export default {
        methods: {
            async savetofs() {
                console.log("IN AC")
                let coin = document.getElementById("coin1").value
                let ticker = document.getElementById("ticker1").value
                let buyPrice = document.getElementById("buy1").value
                let buyQuantity = document.getElementById("quant1").value

                alert(" Saving your data for Coin : " + coin)

                try{
                    const docRef = await setDoc(doc(db, "Portfolio", coin), {
                        Coin: coin, Ticker: ticker, Buy_Price: buyPrice, Buy_Quantity: buyQuantity
                    })
                    console.log(docRef)
                    document.getElementById('myform').reset();
                    this.$emit("added")
                }
                catch(error) {
                    console.error("Error adding document: ", error);
                }
            }
        }
    }

</script>

<style scoped> 
.container{
    width: 100%;
}

h2{
    background-color:cornflowerblue;
}
.formli{
    display: block;
    text-align: center;
    width: 100%;
}
form {
    text-align: center;
    align-items: center;
    margin: auto;
}
input:hover {
    box-shadow: 3px 3px grey;
    border-radius: 2px
}
.save{
    text-align: center;
}
</style>