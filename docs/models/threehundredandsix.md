# ThreeHundredAndSix

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSix } from "@vercel/sdk/models/twohundredandsixty.js";

let value: ThreeHundredAndSix = {
  projectId: "<id>",
  projectName: "<value>",
  next: {
    skewProtectionAllowedDomains: [
      "<value 1>",
    ],
  },
  previous: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload306Next](../models/usereventpayload306next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload306Previous](../models/usereventpayload306previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |