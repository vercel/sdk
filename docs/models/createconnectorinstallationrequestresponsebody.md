# CreateConnectorInstallationRequestResponseBody

## Example Usage

```typescript
import { CreateConnectorInstallationRequestResponseBody } from "@vercel/sdk/models/createconnectorinstallationrequestop.js";

let value: CreateConnectorInstallationRequestResponseBody = {
  url: "https://outrageous-punctuation.com/",
  request: "<value>",
  verifier: "<value>",
  expiresAt: 8189.17,
  connector: {
    id: "<id>",
    uid: "<id>",
    type: "<value>",
    name: "<value>",
  },
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `url`                                      | *string*                                   | :heavy_check_mark:                         | N/A                                        |
| `request`                                  | *string*                                   | :heavy_check_mark:                         | N/A                                        |
| `verifier`                                 | *string*                                   | :heavy_check_mark:                         | N/A                                        |
| `deviceCode`                               | *string*                                   | :heavy_minus_sign:                         | N/A                                        |
| `expiresAt`                                | *number*                                   | :heavy_check_mark:                         | N/A                                        |
| `connector`                                | [models.Connector](../models/connector.md) | :heavy_check_mark:                         | N/A                                        |