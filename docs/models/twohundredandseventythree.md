# TwoHundredAndSeventyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSeventyThree } from "@vercel/sdk/models/usereventpayload260next.js";

let value: TwoHundredAndSeventyThree = {
  justification: "<value>",
  previousStatus: "<value>",
  projectId: "<id>",
  url: "https://grounded-brush.name/",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `approvalScope`                                                  | [models.ApprovalScope](../models/approvalscope.md)               | :heavy_minus_sign:                                               | N/A                                                              |
| `justification`                                                  | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `kind`                                                           | [models.UserEventPayloadKind](../models/usereventpayloadkind.md) | :heavy_minus_sign:                                               | N/A                                                              |
| `previousStatus`                                                 | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `projectId`                                                      | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `url`                                                            | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |