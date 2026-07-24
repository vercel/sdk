# TwoHundredAndEightySix

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndEightySix } from "@vercel/sdk/models/twohundredandeightyfour.js";

let value: TwoHundredAndEightySix = {
  projectId: "<id>",
  projectName: "<value>",
  next: {
    skewProtectionMaxAge: 5437.16,
  },
  previous: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload286Next](../models/usereventpayload286next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload286Previous](../models/usereventpayload286previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |