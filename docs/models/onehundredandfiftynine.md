# OneHundredAndFiftyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFiftyNine } from "@vercel/sdk/models/payloadactivedashboardviews.js";

let value: OneHundredAndFiftyNine = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {
    functionDefaultMemoryType: "<value>",
  },
  next: {
    functionDefaultMemoryType: "<value>",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload159Previous](../models/usereventpayload159previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload159Next](../models/usereventpayload159next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |