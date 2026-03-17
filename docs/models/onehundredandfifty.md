# OneHundredAndFifty

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFifty } from "@vercel/sdk/models/payloadteampermissions.js";

let value: OneHundredAndFifty = {
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
| `action`                                                                   | [models.UserEventPayload150Action](../models/usereventpayload150action.md) | :heavy_check_mark:                                                         | N/A                                                                        |