# ThreeHundredAndSeventyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSeventyFour } from "@vercel/sdk/models/usereventpayload328previous.js";

let value: ThreeHundredAndSeventyFour = {
  next: {
    issuerMode: "team",
  },
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload374Next](../models/usereventpayload374next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload374Previous](../models/usereventpayload374previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |