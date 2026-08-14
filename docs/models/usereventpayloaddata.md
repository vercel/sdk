# UserEventPayloadData

## Example Usage

```typescript
import { UserEventPayloadData } from "@vercel/sdk/models/payloadbudget.js";

let value: UserEventPayloadData = {
  planSlug: "v0_business",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `planSlug`                                                               | [models.PlanSlug](../models/planslug.md)                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `reason`                                                                 | [models.UserEventPayload61Reason](../models/usereventpayload61reason.md) | :heavy_minus_sign:                                                       | N/A                                                                      |