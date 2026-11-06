# FourHundredAndTwentyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndTwentyNine } from "@vercel/sdk/models/store.js";

let value: FourHundredAndTwentyNine = {
  entitlement: "<value>",
  user: {
    id: "<id>",
    username: "Cathrine.OConnell11",
  },
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `entitlement`                                  | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `user`                                         | [models.PayloadUser](../models/payloaduser.md) | :heavy_check_mark:                             | N/A                                            |