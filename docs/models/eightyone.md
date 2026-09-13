# EightyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { EightyOne } from "@vercel/sdk/models/thirtythree.js";

let value: EightyOne = {
  gitOwnerName: "<value>",
  gitRepositoryName: "<value>",
  previous: {
    enabled: false,
    autoAddReviewers: false,
  },
  next: {
    enabled: true,
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