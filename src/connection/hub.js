import * as signalR from "@microsoft/signalr";

const connection = new signalR.HubConnectionBuilder()
    .withUrl(import.meta.env.VITE_HUB_URL, {
        withCredentials: true,
        transport: signalR.HttpTransportType.WebSockets | signalR.HttpTransportType.LongPolling
    })
    .withAutomaticReconnect()
    .build();

const startConnection = async () => {
    try {
        if (connection.state === signalR.HubConnectionState.Disconnected) {
            await connection.start();
            console.log("Conectado ao SignalR");
        }
    } catch (err) {
        console.error('Erro na conexão:', err);
        setTimeout(() => startConnection(), 5000); // Tenta reconectar
    }
};

connection.onclose(() => {
    console.log("Conexão encerrada, tentando reconectar...");
    startConnection();
});

startConnection();

export default connection;
