# FourHundredAndNineteen

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndNineteen } from "@vercel/sdk/models/usereventpayload387scope.js";

let value: FourHundredAndNineteen = {
  entitlement: "<value>",
  user: {
    id: "<id>",
    username: "Brook_Fritsch",
  },
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `entitlement`                                  | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `user`                                         | [models.PayloadUser](../models/payloaduser.md) | :heavy_check_mark:                             | N/A                                            |