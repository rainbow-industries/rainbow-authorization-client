


export default class SecurityContext {

    hasUsers() {
        return false;
    }


    getUsers() {
        return [];
    }


    hasService() {
        return false;
    }


    getServices() {
        return [];
    }



    async loadsubjectInfo() {
        
    }



    isActionAllowed(controlelr, action) {
        return true;    
    }
}