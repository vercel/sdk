# UserEventPayload288Next

## Example Usage

```typescript
import { UserEventPayload288Next } from "@vercel/sdk/models/twohundredandsixtyseven.js";

let value: UserEventPayload288Next = {
  envId: "<id>",
  perimeterId: "<id>",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `enableBuilds`                                                                       | *boolean*                                                                            | :heavy_minus_sign:                                                                   | Explicit opt-in; missing values are false.                                           |
| `enableFunctions`                                                                    | *boolean*                                                                            | :heavy_minus_sign:                                                                   | Explicit opt-in; missing values are false. Authorization does not enable a workload. |
| `envId`                                                                              | *models.EnvId*                                                                       | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `perimeterId`                                                                        | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |