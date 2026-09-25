# Store

## Example Usage

```typescript
import { Store } from "@vercel/sdk/models/payloadcity.js";

let value: Store = {
  id: "<id>",
  type: "postgres",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `id`                                                                   | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `name`                                                                 | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `type`                                                                 | [models.UserEventPayload362Type](../models/usereventpayload362type.md) | :heavy_check_mark:                                                     | N/A                                                                    |