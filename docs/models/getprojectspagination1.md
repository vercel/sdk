# GetProjectsPagination1

This object contains information related to the pagination of the current request using continuation tokens. Since CosmosDB doesn't support going to previous pages, only count and next are provided.

## Example Usage

```typescript
import { GetProjectsPagination1 } from "@vercel/sdk/models/getprojectsrouteprojectsresponse200applicationjsonresponsebodymitigate.js";

let value: GetProjectsPagination1 = {
  count: 20,
  next: "JBSWY3DPEHPK3PXP",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `count`                                                                                                  | *number*                                                                                                 | :heavy_check_mark:                                                                                       | Amount of items in the current page.                                                                     | 20                                                                                                       |
| `next`                                                                                                   | *string*                                                                                                 | :heavy_check_mark:                                                                                       | Continuation token that must be used to request the next page. Base32 encoded for safe URL transmission. | JBSWY3DPEHPK3PXP                                                                                         |