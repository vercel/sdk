# ThreeHundredAndEightyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndEightyFive } from "@vercel/sdk/models/payloadcity.js";

let value: ThreeHundredAndEightyFive = {
  entitlement: "<value>",
  user: {
    id: "<id>",
    username: "Yvonne74",
  },
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `entitlement`                                  | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `user`                                         | [models.PayloadUser](../models/payloaduser.md) | :heavy_check_mark:                             | N/A                                            |