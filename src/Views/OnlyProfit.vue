<template> 
    <h1>View Your Profits</h1>
    <ProfitDisplay/>
    
</template>

<script>
import ProfitDisplay from '@/components/ProfitDisplay.vue'

export default {
    name: 'OnlyProfit',
    components:{
        ProfitDisplay
    }
}
</script>