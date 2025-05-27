# ListAuthTokensResponseBody

## Example Usage

```typescript
import { ListAuthTokensResponseBody } from "@vercel/sdk/models/listauthtokensop.js";

let value: ListAuthTokensResponseBody = {
  tokens: [
    {
      id: "5d9f2ebd38ddca62e5d51e9c1704c72530bdc8bfdd41e782a6687c48399e8391",
      name: "<value>",
      type: "oauth2-token",
      origin: "github",
      expiresAt: 1632816536002,
      activeAt: 1632816536002,
      createdAt: 1632816536002,
    },
  ],
  pagination: {
    count: 20,
    next: 1540095775951,
    prev: 1540095775951,
  },
};
```

## Fields

| Field                                                                                                                                                           | Type                                                                                                                                                            | Required                                                                                                                                                        | Description                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `tokens`                                                                                                                                                        | [models.AuthToken](../models/authtoken.md)[]                                                                                                                    | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |
| `pagination`                                                                                                                                                    | [models.Pagination](../models/pagination.md)                                                                                                                    | :heavy_check_mark:                                                                                                                                              | This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data. |