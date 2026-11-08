# UserEventPayloadStore

## Example Usage

```typescript
import { UserEventPayloadStore } from "@vercel/sdk/models/principalintegration.js";

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
| `type`                                                                 | [models.UserEventPayload403Type](../models/usereventpayload403type.md) | :heavy_check_mark:                                                     | N/A                                                                    |