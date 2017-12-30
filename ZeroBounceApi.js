class ZeroBounceApi {
    constructor(apiKey){
        var baseUrl = "https://api.zerobounce.net/v1";
        var get = new XMLHttpRequest();
        /**
         * @param apiKey - your private API key
         * */
        this.apiKey = apiKey;

        /**
         * @return the number of credits remaining on your account
         * */
        this.getCredits = function(){
            var uri = baseUrl + "/getcredits" + "?apikey=" + apiKey;
            get.open('GET', uri, false);
            get.send();
            if (get.readyState === 4 && get.status === 200) {
                return get.responseText;
            }
        }

        /**
         * @param email - the email you want to validate
         * @return - a JSONObject with all of the information for the specified email
         * */
        this.validate = function(email){
            var uri = baseUrl + "/validate" + "?apikey=" + apiKey + "&email=" + email;
            get.open('GET', uri, false);
            get.send();
            if (get.readyState == 4 && get.status == 200) {
                return get.responseText;
            }
        }

        /**
         * @param email - the email you want to validate
         * @param ip - the ip to be use for this validation (advanced)
         * @return - a JSONObject with all of the information for the specified email
         * */
        this.validateWithIpAddress = function(email, ipAddress){
            var uri = baseUrl + "/validate" + "?apikey=" + apiKey + "&email=" + email + "&ipAddress=" + ipAddress;
            get.open('GET', uri, false);
            get.send();
            if (get.readyState == 4 && get.status == 200) {
                return get.responseText;
            }
        }
    }
}