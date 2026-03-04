# OneHundredAndSixtyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSixtyEight } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndSixtyEight = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {},
  next: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload168Previous](../models/usereventpayload168previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload168Next](../models/usereventpayload168next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |