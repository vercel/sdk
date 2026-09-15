# TwoHundredAndFiftyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFiftyTwo } from "@vercel/sdk/models/usereventpayloadnext.js";

let value: TwoHundredAndFiftyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  action: "enabled",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `projectId`                                                                | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `projectName`                                                              | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `action`                                                                   | [models.UserEventPayload252Action](../models/usereventpayload252action.md) | :heavy_check_mark:                                                         | N/A                                                                        |