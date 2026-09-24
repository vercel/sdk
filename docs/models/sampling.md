# Sampling

## Example Usage

```typescript
import { Sampling } from "@vercel/sdk/models/fourhundredandthirteen.js";

let value: Sampling = {
  rate: 1983.19,
  type: "head_sampling",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `env`                                                                  | [models.Env](../models/env.md)                                         | :heavy_minus_sign:                                                     | N/A                                                                    |
| `rate`                                                                 | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `requestPath`                                                          | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `type`                                                                 | [models.UserEventPayload415Type](../models/usereventpayload415type.md) | :heavy_check_mark:                                                     | N/A                                                                    |