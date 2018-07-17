[ZeroBounce](https://www.zerobounce.net>) JavaScript API v1

This is a JavaScript wrapper class example for the ZeroBounce API v1.

Please use version 2: https://github.com/zerobounce/zerobounce-javascript-api-v2

##### Example usage:

```javascript
var ZeroBounceApi = new ZeroBounceApi(apiKey)
ZeroBounceApi.apiKey
ZeroBounceApi.getCredits()
ZeroBounceApi.validate("some@email.com")
ZeroBounceApi.validateWithIpAddress("some@email.com", "some.ip.address")
```
