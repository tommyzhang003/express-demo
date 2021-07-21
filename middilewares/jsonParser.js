var getRawBody = require('raw-body')
var contentType = require('content-type')
var Base64 = require('js-base64')
var createError = require('http-errors')

function parse (body) {
    if (body.length === 0) {
        // special-case empty json body, as it's a common client-side mistake
        // TODO: maybe make this configurable or part of "strict" option
        return {}
    }


    try {
        return JSON.parse(body)
    } catch (e) {
    }
}

module.exports = function() {
    return function jsonParse (req, res, next) {
        let encoding = (contentType.parse(req).parameters.charset || 'utf-8').toLowerCase()
        let length = req.headers['content-length']
        getRawBody(req, {
            length: length,
            limit: '50mb',
            encoding: encoding
        }, function (err, string) {
            if (err) return next(err)
            try {
                let exg = new RegExp('^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$');
                if(string.startsWith('{') && string.endsWith('}')) {
                    req.body = parse(string)
                } else if (exg.test(string)) {
                    let str = Base64.decode(string)
                    req.body = parse(str)
                } else {
                    req.body = {}
                }
            } catch (e) {
                next(createError(400, err, {
                    body: str,
                    type: err.type || 'entity.parse.failed'
                }))
            }
            next()
        })
    }
}
