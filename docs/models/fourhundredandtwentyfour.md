# FourHundredAndTwentyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndTwentyFour } from "@vercel/sdk/models/usereventpayload390type.js";

let value: FourHundredAndTwentyFour = {
  entitlement: "<value>",
  user: {
    id: "<id>",
    username: "Alfonzo_Runolfsdottir",
  },
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `entitlement`                                  | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `user`                                         | [models.PayloadUser](../models/payloaduser.md) | :heavy_check_mark:                             | N/A                                            |