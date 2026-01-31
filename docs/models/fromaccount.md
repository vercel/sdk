# FromAccount

## Example Usage

```typescript
import { FromAccount } from "@vercel/sdk/models/userevent.js";

let value: FromAccount = {
  id: "<id>",
  type: "user",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `id`                                                                   | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `type`                                                                 | [models.UserEventPayload232Type](../models/usereventpayload232type.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `slug`                                                                 | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `username`                                                             | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |