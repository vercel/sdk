# OneHundredAndFortySix

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFortySix } from "@vercel/sdk/models/projectanalytics.js";

let value: OneHundredAndFortySix = {
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
| `previous`                                                                     | [models.UserEventPayload146Previous](../models/usereventpayload146previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload146Next](../models/usereventpayload146next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |