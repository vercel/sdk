# OneHundred

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundred } from "@vercel/sdk/models/rule.js";

let value: OneHundred = {
  gitOwnerName: "<value>",
  gitRepositoryName: "<value>",
  next: {
    autoAddReviewers: false,
    enabled: false,
  },
  previous: {
    autoAddReviewers: false,
    enabled: true,
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `gitOwnerName`                                         | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `gitRepositoryName`                                    | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `next`                                                 | [models.PayloadNext](../models/payloadnext.md)         | :heavy_check_mark:                                     | N/A                                                    |
| `previous`                                             | [models.PayloadPrevious](../models/payloadprevious.md) | :heavy_check_mark:                                     | N/A                                                    |