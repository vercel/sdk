# TwoHundredAndSixtyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSixtyEight } from "@vercel/sdk/models/usereventpayload238prevproject.js";

let value: TwoHundredAndSixtyEight = {
  projectId: "<id>",
  resourceUrl: "https://dismal-knight.com",
  type: "script",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `projectId`                                                      | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `resourceUrl`                                                    | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `type`                                                           | [models.UserEventPayloadType](../models/usereventpayloadtype.md) | :heavy_check_mark:                                               | N/A                                                              |