# UserEventPayloadData

## Example Usage

```typescript
import { UserEventPayloadData } from "@vercel/sdk/models/eighteen.js";

let value: UserEventPayloadData = {
  planSlug: "v0_business",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `planSlug`                                                               | [models.PlanSlug](../models/planslug.md)                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `reason`                                                                 | [models.UserEventPayload64Reason](../models/usereventpayload64reason.md) | :heavy_minus_sign:                                                       | N/A                                                                      |