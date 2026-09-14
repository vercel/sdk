# ThreeHundredAndFourteen

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFourteen } from "@vercel/sdk/models/twohundredandseventyseven.js";

let value: ThreeHundredAndFourteen = {
  projectId: "<id>",
  projectName: "<value>",
  next: {
    skewProtectionAllowedDomains: [
      "<value 1>",
      "<value 2>",
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
| `next`                                                                         | [models.UserEventPayload314Next](../models/usereventpayload314next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload314Previous](../models/usereventpayload314previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |