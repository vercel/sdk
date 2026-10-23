# TwoHundredAndNinetySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndNinetySeven } from "@vercel/sdk/models/usereventpayload256next.js";

let value: TwoHundredAndNinetySeven = {
  next: {
    functionDefaultTimeout: 3608.49,
  },
  previous: {
    functionDefaultTimeout: 4483.22,
  },
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload297Next](../models/usereventpayload297next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload297Previous](../models/usereventpayload297previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |