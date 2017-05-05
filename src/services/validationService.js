const config = require('../../config/config.json')

class ValidationService {
    isOwner(id) {
        return config.owner === id
    }
}

module.exports = ValidationService
