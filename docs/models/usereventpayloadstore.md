# UserEventPayloadStore

## Example Usage

```typescript
import { UserEventPayloadStore } from "@vercel/sdk/models/removedprojects.js";

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
| `type`                                                                 | [models.UserEventPayload330Type](../models/usereventpayload330type.md) | :heavy_check_mark:                                                     | N/A                                                                    |