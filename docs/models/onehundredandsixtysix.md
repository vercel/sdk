# OneHundredAndSixtySix

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSixtySix } from "@vercel/sdk/models/usereventpayload138type.js";

let value: OneHundredAndSixtySix = {
  projectId: "<id>",
  url: "https://hasty-digestive.biz/",
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