# GetAuthTokenResponseBody

Successful response.

## Example Usage

```typescript
import { GetAuthTokenResponseBody } from "@vercel/sdk/models/getauthtokenop.js";

let value: GetAuthTokenResponseBody = {
  token: {
    activeAt: 1632816536002,
    createdAt: 1632816536002,
    expiresAt: 1632816536002,
    id: "5d9f2ebd38ddca62e5d51e9c1704c72530bdc8bfdd41e782a6687c48399e8391",
    leakedAt: 1632816536002,
    name: "<value>",
    origin: "github",
    prefix: "vcp_",
    revokedAt: 1632816536002,
    suffix: "abc123",
    type: "oauth2-token",
  },
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `token`                                    | [models.AuthToken](../models/authtoken.md) | :heavy_check_mark:                         | Authentication token metadata.             |