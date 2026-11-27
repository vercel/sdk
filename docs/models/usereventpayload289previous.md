# UserEventPayload289Previous

## Example Usage

```typescript
import { UserEventPayload289Previous } from "@vercel/sdk/models/usereventpayloaddsyncmode.js";

let value: UserEventPayload289Previous = {
  envId: "<id>",
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