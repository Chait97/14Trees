<template>
    <section>
        <iframe 
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ3ydfOEdfXhiFHKn7lSzM5AxkJa-WvKPm-11aX1-I8TNL9GkfRiR1N5r_QvBCkkKzLeUggY3rLAdS7/pubhtml?gid=2032290651&single=true"
            width="320px" height="600px" scrolling="no"
            class="ring-8 ring-gray-800 ring-opacity-50 overflow-hidden m-12 rounded-lg"
        />
        <p class="mx-auto px-12">Result: {{res}}</p>
        <button @click="fetchSheetData" class="btn-action bg-gray-400 h-12 w-64 p-8 m-12 font-extralight text-3xl">Get Data</button>
    </section>
</template>

<script>

export default {  
    data: function() {
        let res = "null";
        return { 
            showFloatScroll: false,
            expandModal: false, 
            res: res,
            gapi: Object,
            gapi_API_KEY: 'AIzaSyCBdGfB0-6QKAO7_RyothzDgl29W1eXhHg',
            gapi_CLIENT_ID: '511039438775-2e3j9u5os2td1og7kl6ve7r0nqegjsbn.apps.googleusercontent.com',
            sheets_DISCOVERY: 'https://sheets.googleapis.com/$discovery/rest?version=v4',
            spreadsheetId:  '1QMsX9QxPoa0ku7rj9nGuXOLu9Oy8NPivqUq7Ga24IbI'
        }
    },
    async mounted() {
        try {
            await this.$loadScript('https://apis.google.com/js/api.js')
            this.$window.gapi.load('client', this.initClient)
        } catch (e) {
            console.log(e)
        }
    },
    props: {
        url: String,
    },
    computed: {
    },
	methods : {
        async initClient() {
            let gapi = this.$window.gapi;
            let gsettings = {
                    apiKey: this.gapi_API_KEY,
                    clientId: this.gapi_CLIENT_ID,
                    discoveryDocs: this.sheets_DISCOVERY,
                    scope: 'https://www.googleapis.com/auth/spreadsheets.readonly'
            }
            try {
                await gapi.client.init(gsettings)
            } catch (e) {
                console.log(e)
            }
        },
        async fetchSheetData() {
            try {
                let gapi = this.$window.gapi;
                let response = await gapi.client.sheets.spreadsheets.values.get({
                    spreadsheetId: this.spreadsheetId,
                    range: "Sheet1!A3:A7"
                })
                this.res = response.result;
                let numRows = result.values ? result.values.length : 0;
            } catch (e) {console.log(e)}
        }
	}
}
</script>