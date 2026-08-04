# SeventyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { SeventyTwo } from "@vercel/sdk/models/payloadresources.js";

let value: SeventyTwo = {
  gitOwnerName: "<value>",
  gitRepositoryName: "<value>",
  previous: {
    enabled: true,
    autoAddReviewers: false,
  },
  next: {
    enabled: true,
    autoAddReviewers: true,
  },
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `gitOwnerName`                           | *string*                                 | :heavy_check_mark:                       | N/A                                      |
| `gitRepositoryName`                      | *string*                                 | :heavy_check_mark:                       | N/A                                      |
| `previous`                               | [models.Previous](../models/previous.md) | :heavy_check_mark:                       | N/A                                      |
| `next`                                   | [models.Next](../models/next.md)         | :heavy_check_mark:                       | N/A                                      |