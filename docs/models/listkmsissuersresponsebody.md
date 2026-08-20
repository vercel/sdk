# ListKmsIssuersResponseBody

## Example Usage

```typescript
import { ListKmsIssuersResponseBody } from "@vercel/sdk/models/listkmsissuersop.js";

let value: ListKmsIssuersResponseBody = {
  issuers: [],
  pagination: {
    count: 9369.28,
    next: "<value>",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `issuers`                                                                | [models.Issuers](../models/issuers.md)[]                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `pagination`                                                             | [models.ListKmsIssuersPagination](../models/listkmsissuerspagination.md) | :heavy_check_mark:                                                       | N/A                                                                      |