export class Device {
    constructor(id, type, name, status) {
        this.id = id
        this.type = type
        this.name = name
        this.status = status
    }
}

export class Sensor extends Device {
    constructor(id, type, name, status, payload) {
        super(id, type, name, status)
        this.payload = payload
    }
}