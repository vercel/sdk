# OneHundredAndEightyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndEightyEight } from "@vercel/sdk/models/preventautoblocking.js";

let value: OneHundredAndEightyEight = {
  projectId: "<id>",
  url: "https://similar-scale.biz",
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
| `kind`                                                           | [models.UserEventPayloadKind](../models/usereventpayloadkind.md) | :heavy_minus_sign:                                               | N/A                                                              |