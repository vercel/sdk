# EightyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { EightyThree } from "@vercel/sdk/models/fiftytwo.js";

let value: EightyThree = {
  gitOwnerName: "<value>",
  gitRepositoryName: "<value>",
  next: {
    autoAddReviewers: true,
    enabled: true,
  },
  previous: {
    autoAddReviewers: true,
    enabled: false,
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `gitOwnerName`                                         | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `gitRepositoryName`                                    | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `next`                                                 | [models.Next](../models/next.md)                       | :heavy_check_mark:                                     | N/A                                                    |
| `previous`                                             | [models.PayloadPrevious](../models/payloadprevious.md) | :heavy_check_mark:                                     | N/A                                                    |