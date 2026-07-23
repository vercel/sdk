# TwoHundredAndSeventyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSeventyFour } from "@vercel/sdk/models/twohundredandseven.js";

let value: TwoHundredAndSeventyFour = {
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
| `previous`                                                                     | [models.UserEventPayload274Previous](../models/usereventpayload274previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload274Next](../models/usereventpayload274next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |