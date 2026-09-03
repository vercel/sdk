# PrivateLinkEndpointStatus

The current state of the endpoint. - `creating`: the endpoint is being created. - `pending-acceptance`: waiting for the endpoint service owner to accept the connection. Only occurs for services that require manual acceptance. - `provisioning`: the connection was accepted and AWS is finishing setup. - `available`: the endpoint is fully provisioned and ready to use. - `rejected`: the endpoint service owner rejected the connection. - `failed`: the endpoint could not be provisioned. - `deleting`: the endpoint is being deleted.

## Example Usage

```typescript
import { PrivateLinkEndpointStatus } from "@vercel/sdk/models/privatelinkendpoint.js";

let value: PrivateLinkEndpointStatus = "available";
```

## Values

```typescript
"available" | "creating" | "deleting" | "failed" | "pending-acceptance" | "provisioning" | "rejected"
```