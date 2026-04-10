# PayloadStore

## Example Usage

```typescript
import { PayloadStore } from "@vercel/sdk/models/twohundredandtwentyeight.js";

let value: PayloadStore = {
  id: "<id>",
  type: "integration",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `id`                                                                   | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `name`                                                                 | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `type`                                                                 | [models.UserEventPayload234Type](../models/usereventpayload234type.md) | :heavy_check_mark:                                                     | N/A                                                                    |