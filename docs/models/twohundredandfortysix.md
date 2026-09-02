# TwoHundredAndFortySix

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFortySix } from "@vercel/sdk/models/siftroute.js";

let value: TwoHundredAndFortySix = {
  projectId: "<id>",
  projectName: "<value>",
  action: "disabled",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `projectId`                                                                | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `projectName`                                                              | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `action`                                                                   | [models.UserEventPayload246Action](../models/usereventpayload246action.md) | :heavy_check_mark:                                                         | N/A                                                                        |