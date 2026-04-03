# SamplingRules

## Example Usage

```typescript
import { SamplingRules } from "@vercel/sdk/models/updateprojectbotfilter.js";

let value: SamplingRules = {
  rate: 6993.73,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `rate`                                                   | *number*                                                 | :heavy_check_mark:                                       | Sampling rate from 0 to 1                                |
| `env`                                                    | [models.UpdateProjectEnv](../models/updateprojectenv.md) | :heavy_minus_sign:                                       | Environment to apply sampling to                         |
| `requestPath`                                            | *string*                                                 | :heavy_minus_sign:                                       | Request path prefix to apply the sampling rule to        |