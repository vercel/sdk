# OneHundredAndSeven

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSeven } from "@vercel/sdk/models/projectanalytics.js";

let value: OneHundredAndSeven = {
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
| `action`                                                                   | [models.UserEventPayload107Action](../models/usereventpayload107action.md) | :heavy_check_mark:                                                         | N/A                                                                        |