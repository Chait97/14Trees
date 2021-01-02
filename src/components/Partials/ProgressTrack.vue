<template>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h1 class="md:text-7xl text-4xl font-bold green-text" ref="infoElement">
            <span><ICountUp :delay=10 :endVal="donors" :options="countOptions" ref="counter"/></span>
            <span class="text-gray-700 dark:text-gray-300 font-light"> donors have pledged </span>
                <br/>
            <span><ICountUp :delay=10 :endVal="trees" :options="countOptions" ref="counter"/></span>
            <span class="text-gray-700 dark:text-gray-300 font-light"> trees so far.</span>
        </h1>
    </div>
</template>

<script>
import { parseTSV } from "~/utils"
import ICountUp from 'vue-countup-v2'

export default {  
    props: {
        url: String,
        waitForScroll: Boolean
    },
    components: {
        ICountUp
    },
    data: function() {
        let dataMap = null;
        let observer = null;
        return { 
            showFloatScroll: false,
            expandModal: false, 
            dataMap: null,
            observed: false,
            trees: 0,
            progress: 0,
            donors: 0,
            infoMap: new Map(),
            spreadsheetSrc:  'https://docs.google.com/spreadsheets/d/e/2PACX-1vTlCcF1rcpIXxGqhcAOo8JKS0V_QokU8pzDd1xFrTUOEmtNP7fVcnNkszhDOHFuLPKASYEyNU_rGmj0/pub?gid=0&single=true&output=tsv',
            countOptions: {
                startVal: 0, duration: this.waitForScroll? 1.5 : 0.5,
                useEasing: true, useGrouping: true, separator: ',',
                decimal: '.', prefix: '', suffix: ''
            }
        }
    },
    created() {
        if (process.isClient) {
            let options = {root: document.getElementById('scroll-page'), threshold:1.0}
            if (this.waitForScroll)
                this.observer = new IntersectionObserver(this.onObserved, options)
        }
    },
    async mounted() {
        if (process.isClient) {
            if (this.waitForScroll)
                this.observer.observe(this.$refs.infoElement)
            try {
                const response = await fetch(this.spreadsheetSrc, {cache: 'force-cache'} )
                this.dataMap = parseTSV(await response.text())
                if(this.observed || !this.waitForScroll) {
                    this.countAnimate()
                }
            } catch (e) {
                console.log(e)
            }
        }
    },
    beforeDestroy() {
        this.observer?.disconnect();
    },
	methods : {
        onObserved(entries) {
            if(process.isClient) {
                entries.forEach( ({target, isIntersecting, intersectionRatio}) => {
                   if (!isIntersecting || intersectionRatio == 0) {
                        return;
                    }
                    this.observed = true
                    this.observer.unobserve(target);
                    this.countAnimate()
                });
            }
        },
        countAnimate() {
            this.donors = parseInt(this.dataMap?.get("Donors"))
            this.trees = parseInt(this.dataMap?.get("Trees Pledged"))
            this.$refs.counter.start()
        },
        triggerAnimation() {
            this.$refs.counter.reset()
            this.countAnimate()
        }
    }
}

</script>