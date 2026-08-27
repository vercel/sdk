# SeventySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { SeventySeven } from "@vercel/sdk/models/twentytwo.js";

let value: SeventySeven = {
  gitOwnerName: "<value>",
  gitRepositoryName: "<value>",
  previous: {
    enabled: true,
    autoAddReviewers: true,
  },
  next: {
    enabled: false,
    autoAddReviewers: false,
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `gitOwnerName`                                         | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `gitRepositoryName`                                    | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `previous`                                             | [models.PayloadPrevious](../models/payloadprevious.md) | :heavy_check_mark:                                     | N/A                                                    |
| `next`                                                 | [models.Next](../models/next.md)                       | :heavy_check_mark:                                     | N/A                                                    |