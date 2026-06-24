# Store

## Example Usage

```typescript
import { Store } from "@vercel/sdk/models/consent.js";

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
| `type`                                                                 | [models.UserEventPayload287Type](../models/usereventpayload287type.md) | :heavy_check_mark:                                                     | N/A                                                                    |