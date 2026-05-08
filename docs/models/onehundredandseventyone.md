# OneHundredAndSeventyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSeventyOne } from "@vercel/sdk/models/payloadgituserid.js";

let value: OneHundredAndSeventyOne = {
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
| `action`                                                                   | [models.UserEventPayload171Action](../models/usereventpayload171action.md) | :heavy_check_mark:                                                         | N/A                                                                        |