# FourHundredAndThirtyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndThirtyFour } from "@vercel/sdk/models/usereventpayload404type.js";

let value: FourHundredAndThirtyFour = {
  entitlement: "<value>",
  user: {
    id: "<id>",
    username: "Sydnee.Borer",
  },
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `entitlement`                                  | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `user`                                         | [models.PayloadUser](../models/payloaduser.md) | :heavy_check_mark:                             | N/A                                            |