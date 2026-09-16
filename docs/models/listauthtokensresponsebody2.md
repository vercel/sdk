# ListAuthTokensResponseBody2

## Example Usage

```typescript
import { ListAuthTokensResponseBody2 } from "@vercel/sdk/models/listauthtokensop.js";

let value: ListAuthTokensResponseBody2 = {
  pagination: {
    count: 20,
    next: 1540095775951,
    prev: 1540095775951,
  },
  tokens: [],
};
```

## Fields

| Field                                                                                                                                                           | Type                                                                                                                                                            | Required                                                                                                                                                        | Description                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pagination`                                                                                                                                                    | [models.Pagination](../models/pagination.md)                                                                                                                    | :heavy_check_mark:                                                                                                                                              | This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data. |
| `tokens`                                                                                                                                                        | [models.AuthToken](../models/authtoken.md)[]                                                                                                                    | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |