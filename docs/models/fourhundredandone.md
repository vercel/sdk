# FourHundredAndOne

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndOne } from "@vercel/sdk/models/threehundredandsixtysix.js";

let value: FourHundredAndOne = {
  entitlement: "<value>",
  user: {
    id: "<id>",
    username: "Selina_Cronin",
  },
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `entitlement`                                  | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `user`                                         | [models.PayloadUser](../models/payloaduser.md) | :heavy_check_mark:                             | N/A                                            |