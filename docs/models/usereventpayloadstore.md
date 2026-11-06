# UserEventPayloadStore

## Example Usage

```typescript
import { UserEventPayloadStore } from "@vercel/sdk/models/store.js";

let value: UserEventPayloadStore = {
  id: "<id>",
  type: "integration",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `id`                                                                   | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `name`                                                                 | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `type`                                                                 | [models.UserEventPayload399Type](../models/usereventpayload399type.md) | :heavy_check_mark:                                                     | N/A                                                                    |