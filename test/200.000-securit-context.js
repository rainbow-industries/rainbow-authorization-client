import section from '../es-modules/distributed-systems/section-tests/1.x/index.js';
import AuthorizationClient from '../AuthorizationClient.js';
import assert from 'assert';


section('AuthorizationClient', (section) => {
    section.test('load context', async () => {
        const client = new AuthorizationClient({});
        const context = await client.getSecurityContext();

        assert(context);
        assert.equal(context.isActionAllowed(), true);
    });
});