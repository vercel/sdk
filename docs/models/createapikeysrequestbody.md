# CreateApiKeysRequestBody

## Example Usage

```typescript
import { CreateApiKeysRequestBody } from "@vercel/sdk/models/createapikeysop.js";

let value: CreateApiKeysRequestBody = {
  purpose: "<value>",
  projectId: "prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB",
  name: "API Key for App 123",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `purpose`                                                                | *string*                                                                 | :heavy_check_mark:                                                       | The API key's purpose, which restricts how it can be used.               |                                                                          |
| `projectId`                                                              | *string*                                                                 | :heavy_minus_sign:                                                       | An optional project to restrict the API key to.                          | prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB                                         |
| `name`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | An optional name for the API key.                                        | API Key for App 123                                                      |
| `expiresAt`                                                              | *number*                                                                 | :heavy_minus_sign:                                                       | The API key's expiration, expressed as a UNIX timestamp in milliseconds. |                                                                          |
| `aiGatewayQuota`                                                         | [models.AiGatewayQuota](../models/aigatewayquota.md)                     | :heavy_minus_sign:                                                       | Optional AI Gateway quota configuration for the API key.                 |                                                                          |