# TwoHundredAndSixty

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSixty } from "@vercel/sdk/models/usereventpayloadlasteditedbyprincipal.js";

let value: TwoHundredAndSixty = {
  next: {
    dsyncMode: "team",
  },
  organizationId: "<id>",
  previous: {
    dsyncMode: "organization",
  },
  teamId: "<id>",
  teamName: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload260Next](../models/usereventpayload260next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `organizationId`                                                               | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload260Previous](../models/usereventpayload260previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `teamId`                                                                       | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `teamName`                                                                     | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |