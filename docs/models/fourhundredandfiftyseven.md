# FourHundredAndFiftySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFiftySeven } from "@vercel/sdk/models/fourhundredandthirtynine.js";

let value: FourHundredAndFiftySeven = {
  entitlement: "<value>",
  user: {
    id: "<id>",
    username: "Arianna.Bernhard",
  },
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `entitlement`                                  | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `user`                                         | [models.PayloadUser](../models/payloaduser.md) | :heavy_check_mark:                             | N/A                                            |