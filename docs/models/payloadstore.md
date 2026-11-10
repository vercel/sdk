# PayloadStore

## Example Usage

```typescript
import { PayloadStore } from "@vercel/sdk/models/principalapp.js";

let value: PayloadStore = {
  id: "<id>",
  type: "blob",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `id`                                                                   | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `name`                                                                 | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `type`                                                                 | [models.UserEventPayload402Type](../models/usereventpayload402type.md) | :heavy_check_mark:                                                     | N/A                                                                    |