# OneHundredAndEight

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndEight } from "@vercel/sdk/models/usereventpayload72action.js";

let value: OneHundredAndEight = {
  gitOwnerName: "<value>",
  gitRepositoryName: "<value>",
  next: {
    autoAddReviewers: true,
    enabled: true,
  },
  previous: {
    autoAddReviewers: false,
    enabled: false,
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