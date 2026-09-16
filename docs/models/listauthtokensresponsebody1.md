# ListAuthTokensResponseBody1

## Example Usage

```typescript
import { ListAuthTokensResponseBody1 } from "@vercel/sdk/models/listauthtokensop.js";

let value: ListAuthTokensResponseBody1 = {
  pagination: {
    count: 8246.98,
    next: "<value>",
    prev: "<value>",
  },
  tokens: [],
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `pagination`                                                                                     | [models.ListAuthTokensResponseBodyPagination](../models/listauthtokensresponsebodypagination.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `tokens`                                                                                         | [models.AuthToken](../models/authtoken.md)[]                                                     | :heavy_check_mark:                                                                               | N/A                                                                                              |