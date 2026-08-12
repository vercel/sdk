# TwoHundredAndThree

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndThree } from "@vercel/sdk/models/oneorigin.js";

let value: TwoHundredAndThree = {
  projectId: "<id>",
  url: "https://our-ruin.name",
  previousStatus: "<value>",
  justification: "<value>",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `projectId`                                                      | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `url`                                                            | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `previousStatus`                                                 | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `justification`                                                  | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `approvalScope`                                                  | [models.ApprovalScope](../models/approvalscope.md)               | :heavy_minus_sign:                                               | N/A                                                              |
| `kind`                                                           | [models.UserEventPayloadKind](../models/usereventpayloadkind.md) | :heavy_minus_sign:                                               | N/A                                                              |