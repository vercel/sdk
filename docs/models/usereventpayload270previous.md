# UserEventPayload270Previous

## Example Usage

```typescript
import { UserEventPayload270Previous } from "@vercel/sdk/models/factorsorigin.js";

let value: UserEventPayload270Previous = {
  envId: "preview",
  perimeterId: "<id>",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `enableBuilds`                                                                       | *boolean*                                                                            | :heavy_minus_sign:                                                                   | Explicit opt-in; missing values are false.                                           |
| `enableFunctions`                                                                    | *boolean*                                                                            | :heavy_minus_sign:                                                                   | Explicit opt-in; missing values are false. Authorization does not enable a workload. |
| `envId`                                                                              | *models.PayloadEnvId*                                                                | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `perimeterId`                                                                        | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |