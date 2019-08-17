# Rainbow Authorization Client

Client for loading authorization data from the authorization service

## API

### AuthorizationClient

The client provides the interface for loading the security context for the process.

#### Constructor

the constructor expects two configuration parameters: the first is the host of the authorization server, the second is the name of the service to fetch permissions for.

```javascript
import AuthorizationClient from '../es-moodules/rainbow-industries/rainbow-authorization-client/AuthorizationClient.js';

const client = new AuthorizationClient({
    host: 'host.of.auth.server',
    serviceName: 'my-super-service',
});
```

### async client.getSecurityContext() Method

This method loads the context for the given tokens provided by the client via the authorization header. Multiple tokens ma be passed. A SecurityCotnext instance will be returned which can be sued to query permissions and user / service or app infos

.
```javascript
const securityContext = await client.getSecurityContext();
```


### SecurityContext

This class is used to query the permissions and user / service / app infos.


#### securityContext.isActionAllowed(controllerName, actionName) Method

Checks if a given action is allowed on the current service and controller

```javascript
const isAllowed = securityContext.isActionAllowed(controllerName, actionName);
```


#### async securityContext.loadsubjectInfo() Method

Loads the subject infos from the different services (aps, users, services). Must be called before querying an other infos about subjects.

```javascript
await securityContext.loadsubjectInfo();
```
