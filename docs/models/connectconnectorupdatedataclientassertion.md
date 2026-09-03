# ConnectConnectorUpdateDataClientAssertion

`private_key_jwt` client assertion settings.

## Example Usage

```typescript
import { ConnectConnectorUpdateDataClientAssertion } from "@vercel/sdk/models/connectconnectorupdatedata.js";

let value: ConnectConnectorUpdateDataClientAssertion = {};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                       | *string*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | OAuth client assertion type. Defaults to urn:ietf:params:oauth:client-assertion-type:jwt-bearer. An empty string clears the configured type. |
| `ttl`                                                                                                                                        | *number*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | Client assertion lifetime in seconds.                                                                                                        |
| `claims`                                                                                                                                     | Record<string, *any*>                                                                                                                        | :heavy_minus_sign:                                                                                                                           | Additional claims included in the client assertion.                                                                                          |