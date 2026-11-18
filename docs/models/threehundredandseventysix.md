# ThreeHundredAndSeventySix

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSeventySix } from "@vercel/sdk/models/threehundredandseventyfive.js";

let value: ThreeHundredAndSeventySix = {
  next: {
    skewProtectionMaxAge: 1251.84,
  },
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload376Next](../models/usereventpayload376next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload376Previous](../models/usereventpayload376previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |