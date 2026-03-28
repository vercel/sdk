# ListAuthTokensResponseBody1

## Example Usage

```typescript
import { ListAuthTokensResponseBody1 } from "@vercel/sdk/models/listauthtokensop.js";

let value: ListAuthTokensResponseBody1 = {
  tokens: [
    {
      id: "5d9f2ebd38ddca62e5d51e9c1704c72530bdc8bfdd41e782a6687c48399e8391",
      name: "<value>",
      type: "oauth2-token",
      prefix: "vcp_",
      suffix: "abc123",
      origin: "github",
      createdAt: 1632816536002,
      activeAt: 1632816536002,
      expiresAt: 1632816536002,
      revokedAt: 1632816536002,
      leakedAt: 1632816536002,
    },
  ],
  pagination: {
    count: 6317.01,
    next: "<value>",
    prev: "<value>",
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `tokens`                                                                                         | [models.AuthToken](../models/authtoken.md)[]                                                     | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `pagination`                                                                                     | [models.ListAuthTokensResponseBodyPagination](../models/listauthtokensresponsebodypagination.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |