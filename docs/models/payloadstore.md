# PayloadStore

## Example Usage

```typescript
import { PayloadStore } from "@vercel/sdk/models/usereventfactors1.js";

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
| `type`                                                                 | [models.UserEventPayload334Type](../models/usereventpayload334type.md) | :heavy_check_mark:                                                     | N/A                                                                    |