# OneHundredAndFiftyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFiftyOne } from "@vercel/sdk/models/payloadactivedashboardviews.js";

let value: OneHundredAndFiftyOne = {
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
| `action`                                                                   | [models.UserEventPayload151Action](../models/usereventpayload151action.md) | :heavy_check_mark:                                                         | N/A                                                                        |