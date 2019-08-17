import SecurityContext from './SecurityContext.js';


export default class AuthorizationClient {


    constructor({
        host,
        serviceName,
    }) {
        this.serviceName = serviceName;
        this.host = host;
    }




    async getSecurityContext(tokens) {
        return new SecurityContext();
    }
}
