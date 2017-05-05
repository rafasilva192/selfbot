const config = require('../../config/config.json')

class ValidationService {
    isOwner(id) {
        return config.owner === id
    }

    hasPrefix(msg) {
        return msg && msg.length > 0 && config.prefix === msg.slice(0, 1)
    }
}

module.exports = new ValidationService()
