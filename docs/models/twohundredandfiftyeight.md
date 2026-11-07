# TwoHundredAndFiftyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFiftyEight } from "@vercel/sdk/models/factors1.js";

let value: TwoHundredAndFiftyEight = {
  projectId: "<id>",
  resourceUrl: "https://helpless-bowler.net/",
  type: "script",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `projectId`                                                      | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `resourceUrl`                                                    | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `type`                                                           | [models.UserEventPayloadType](../models/usereventpayloadtype.md) | :heavy_check_mark:                                               | N/A                                                              |