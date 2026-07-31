# OneHundredAndNinetySix

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndNinetySix } from "@vercel/sdk/models/querytype.js";

let value: OneHundredAndNinetySix = {
  projectId: "<id>",
  type: "script",
  resourceUrl: "https://astonishing-descendant.biz",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `projectId`                                                      | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `type`                                                           | [models.UserEventPayloadType](../models/usereventpayloadtype.md) | :heavy_check_mark:                                               | N/A                                                              |
| `resourceUrl`                                                    | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |