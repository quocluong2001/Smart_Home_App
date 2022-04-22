const formatData = (description, data) => {
    //* Array of data
    if (data.constructor === Array) {
        if (description === 'temp sensor' || description === 'light sensor') {
            return data[0].value
        } else if (
            (description === 'light' && data[0].value === "0") ||
            (description === 'fan' && data[0].value === "2") ||
            (description === 'door' && data[0].value === "4")
        ) {
            return false
        }

        return true
    }

    //* Device object
    else if (typeof data === "object") {
        if (description === 'temp sensor' || description === 'light sensor') {
            return data.value
        } else if (
            (description === 'light' && data.value === "0") ||
            (description === 'fan' && data.value === "2") ||
            (description === 'door' && data.value === "4")
        ) {
            return false
        }
    }

    return true
}

export default formatData