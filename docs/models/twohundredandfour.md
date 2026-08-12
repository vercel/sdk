# TwoHundredAndFour

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFour } from "@vercel/sdk/models/oneorigin.js";

let value: TwoHundredAndFour = {
  projectId: "<id>",
  type: "script",
  resourceUrl: "https://insistent-gloom.info",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `projectId`                                                      | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `type`                                                           | [models.UserEventPayloadType](../models/usereventpayloadtype.md) | :heavy_check_mark:                                               | N/A                                                              |
| `resourceUrl`                                                    | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |