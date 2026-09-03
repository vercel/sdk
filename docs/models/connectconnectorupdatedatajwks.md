# ConnectConnectorUpdateDataJwks

Inline authorization server JSON Web Key Set.

## Example Usage

```typescript
import { ConnectConnectorUpdateDataJwks } from "@vercel/sdk/models/connectconnectorupdatedata.js";

let value: ConnectConnectorUpdateDataJwks = {
  keys: [
    {
      kty: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `keys`                                                                                 | [models.ConnectConnectorUpdateDataKeys](../models/connectconnectorupdatedatakeys.md)[] | :heavy_check_mark:                                                                     | JSON Web Keys published by the authorization server.                                   |
| `additionalProperties`                                                                 | Record<string, *any*>                                                                  | :heavy_minus_sign:                                                                     | N/A                                                                                    |