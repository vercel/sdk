# ConnectConnectorUpdateDataTypePhoton

## Example Usage

```typescript
import { ConnectConnectorUpdateDataTypePhoton } from "@vercel/sdk/models/connectconnectorupdatedata.js";

let value: ConnectConnectorUpdateDataTypePhoton = {};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `projectSecret`                                     | *string*                                            | :heavy_minus_sign:                                  | Photon project secret.                              |
| `webhookSecret`                                     | *string*                                            | :heavy_minus_sign:                                  | Photon webhook verification secret.                 |
| `repairWebhook`                                     | *boolean*                                           | :heavy_minus_sign:                                  | Whether Connect should recreate the Photon webhook. |