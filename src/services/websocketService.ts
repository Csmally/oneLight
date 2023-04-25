class WebsocketService {

    ws: WebSocket

    constructor(url: string) {
        this.ws = new WebSocket(url);
        this.ws.onopen = this.onOpen
        this.ws.onmessage = this.onMessage
        this.ws.onerror = this.onError
        this.ws.onclose = this.onClose
    }

    send = (request: any) => {
        this.ws.send(request)
    }

    onMessage = (e: any) => {
        console.log(e.data);
    }

    onError = (e: any) => {
        console.log(e.message);
    }

    onOpen = () => { }

    close = () => {
        this.ws.close()
    }

    onClose = (e: any) => {
        console.log(e.code, e.reason);
    }
}

const ws = new WebsocketService('');
export default ws