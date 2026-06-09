# OneHundredAndFiftySix

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFiftySix } from "@vercel/sdk/models/connectdatatransfer.js";

let value: OneHundredAndFiftySix = {
  projectId: "<id>",
  type: "script",
  resourceUrl: "https://mealy-other.name",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `projectId`                                                      | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `type`                                                           | [models.UserEventPayloadType](../models/usereventpayloadtype.md) | :heavy_check_mark:                                               | N/A                                                              |
| `resourceUrl`                                                    | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |