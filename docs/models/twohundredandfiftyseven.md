# TwoHundredAndFiftySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFiftySeven } from "@vercel/sdk/models/newprojects.js";

let value: TwoHundredAndFiftySeven = {
  next: {
    dsyncMode: "organization",
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
| `next`                                                                         | [models.UserEventPayload257Next](../models/usereventpayload257next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `organizationId`                                                               | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload257Previous](../models/usereventpayload257previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `teamId`                                                                       | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `teamName`                                                                     | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |