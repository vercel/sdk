# UserEventPayloadData

## Example Usage

```typescript
import { UserEventPayloadData } from "@vercel/sdk/models/piiredaction.js";

let value: UserEventPayloadData = {
  planSlug: "v0_business",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `planSlug`                                                               | [models.PlanSlug](../models/planslug.md)                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `reason`                                                                 | [models.UserEventPayload65Reason](../models/usereventpayload65reason.md) | :heavy_minus_sign:                                                       | N/A                                                                      |