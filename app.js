import { createApp, ref, onMounted } from "vue";

const app = {
    setup() {
        const result = ref([]);
        const error = ref(null);

        async function getData() {
            try {
                const response = await fetch("https://yrgo-web-services.netlify.app/bookings");

                if (!response.ok) {
                    throw new Error(`Status: ${response.status}`);
                }
                
                const data = await response.json();
                console.log("API data: ", data)
                result.value = data;

                console.log(data);

            } catch (e) {
                error.value = e.message;
                console.error("Get error: ", e);
            }
                
        }

        onMounted(() => {
            getData();

        });
        return { result, error };
    }   
};


            
createApp(app).mount("#app");
