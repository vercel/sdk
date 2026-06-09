# GetConnectorTokenRequestBody

## Example Usage

```typescript
import { GetConnectorTokenRequestBody } from "@vercel/sdk/models/getconnectortokenop.js";

let value: GetConnectorTokenRequestBody = {};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `subject`                                                          | *models.Subject*                                                   | :heavy_minus_sign:                                                 | N/A                                                                |
| `installationId`                                                   | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `audience`                                                         | *string*[]                                                         | :heavy_minus_sign:                                                 | N/A                                                                |
| `scopes`                                                           | *string*[]                                                         | :heavy_minus_sign:                                                 | N/A                                                                |
| `resources`                                                        | *string*[]                                                         | :heavy_minus_sign:                                                 | N/A                                                                |
| `authorizationDetails`                                             | [models.AuthorizationDetails](../models/authorizationdetails.md)[] | :heavy_minus_sign:                                                 | N/A                                                                |
| `validityBufferMs`                                                 | *number*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |