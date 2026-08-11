# TwoHundredAndNinetyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndNinetyOne } from "@vercel/sdk/models/usereventpayload242next.js";

let value: TwoHundredAndNinetyOne = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {},
  next: {
    issuerMode: "team",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload291Previous](../models/usereventpayload291previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload291Next](../models/usereventpayload291next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |