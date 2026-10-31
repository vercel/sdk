# Member

## Example Usage

```typescript
import { Member } from "@vercel/sdk/models/userevent.js";

let value: Member = {
  id: "<id>",
  kind: "user",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `id`                                                                 | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `kind`                                                               | [models.UserEventPayload25Kind](../models/usereventpayload25kind.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `name`                                                               | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |