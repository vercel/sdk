# OneHundredAndNinetySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndNinetySeven } from "@vercel/sdk/models/usereventpayload162next.js";

let value: OneHundredAndNinetySeven = {
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
| `previous`                                                                     | [models.UserEventPayload197Previous](../models/usereventpayload197previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload197Next](../models/usereventpayload197next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |