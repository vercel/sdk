# BlockHistory

Since June 2023

## Example Usage

```typescript
import { BlockHistory } from "@vercel/sdk/models/userevent.js";

let value: BlockHistory = {
  action: "unblocked",
  createdAt: 5908.37,
  reason: "<value>",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `action`                                                                 | [models.UserEventPayload62Action](../models/usereventpayload62action.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `createdAt`                                                              | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `caseId`                                                                 | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `reason`                                                                 | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `actor`                                                                  | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `statusCode`                                                             | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `comment`                                                                | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |