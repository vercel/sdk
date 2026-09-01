# ThreeHundredAndEight

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndEight } from "@vercel/sdk/models/twohundredandseventyone.js";

let value: ThreeHundredAndEight = {
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
| `next`                                                                         | [models.UserEventPayload308Next](../models/usereventpayload308next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload308Previous](../models/usereventpayload308previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |