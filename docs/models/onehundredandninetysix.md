# OneHundredAndNinetySix

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndNinetySix } from "@vercel/sdk/models/usereventpayload161next.js";

let value: OneHundredAndNinetySix = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {},
  next: {
    issuerMode: "global",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload196Previous](../models/usereventpayload196previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload196Next](../models/usereventpayload196next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |