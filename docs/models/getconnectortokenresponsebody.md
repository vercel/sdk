# GetConnectorTokenResponseBody

## Example Usage

```typescript
import { GetConnectorTokenResponseBody } from "@vercel/sdk/models/getconnectortokenop.js";

let value: GetConnectorTokenResponseBody = {
  token: "<value>",
  expiresAt: 3906.53,
  connector: {
    id: "<id>",
    uid: "<id>",
    type: "<value>",
  },
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `token`                                               | *string*                                              | :heavy_check_mark:                                    | N/A                                                   |
| `expiresAt`                                           | *number*                                              | :heavy_check_mark:                                    | N/A                                                   |
| `connector`                                           | [models.Connector](../models/connector.md)            | :heavy_check_mark:                                    | N/A                                                   |
| `name`                                                | *string*                                              | :heavy_minus_sign:                                    | N/A                                                   |
| `installationId`                                      | *string*                                              | :heavy_minus_sign:                                    | N/A                                                   |
| `tenantId`                                            | *string*                                              | :heavy_minus_sign:                                    | N/A                                                   |
| `externalSubject`                                     | *string*                                              | :heavy_minus_sign:                                    | N/A                                                   |
| `metadata`                                            | Record<string, *any*>                                 | :heavy_minus_sign:                                    | Driver-specific metadata (e.g., botUserId for Slack). |