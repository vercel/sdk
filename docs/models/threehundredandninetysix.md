# ThreeHundredAndNinetySix

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndNinetySix } from "@vercel/sdk/models/threehundredandsixtyone.js";

let value: ThreeHundredAndNinetySix = {
  entitlement: "<value>",
  user: {
    id: "<id>",
    username: "Camryn81",
  },
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `entitlement`                                  | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `user`                                         | [models.PayloadUser](../models/payloaduser.md) | :heavy_check_mark:                             | N/A                                            |