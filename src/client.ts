import io from "socket.io-client";
import Message from './models';
const socket = io("http://localhost:3000");

class BasicClient {

    initializeListeners = () => {
        socket.on("data", (data : Message) => {
            console.log(data.message);
        })
    }
}

const basic_client = new BasicClient();
export default basic_client;



