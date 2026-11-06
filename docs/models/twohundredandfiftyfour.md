# TwoHundredAndFiftyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFiftyFour } from "@vercel/sdk/models/usereventpayload217provider.js";

let value: TwoHundredAndFiftyFour = {
  justification: "<value>",
  previousStatus: "<value>",
  projectId: "<id>",
  url: "https://colorless-councilman.name",
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