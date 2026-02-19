# UpdateFlagRequestBody

## Example Usage

```typescript
import { UpdateFlagRequestBody } from "@vercel/sdk/models/updateflagop.js";

let value: UpdateFlagRequestBody = {};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `createdBy`                                                                           | *string*                                                                              | :heavy_minus_sign:                                                                    | The user who created this patch                                                       |
| `message`                                                                             | *string*                                                                              | :heavy_minus_sign:                                                                    | Additional message for this version                                                   |
| `variants`                                                                            | [models.UpdateFlagVariants](../models/updateflagvariants.md)[]                        | :heavy_minus_sign:                                                                    | The variants of the flag                                                              |
| `environments`                                                                        | Record<string, [models.UpdateFlagEnvironments](../models/updateflagenvironments.md)>  | :heavy_minus_sign:                                                                    | The configuration for the flag in different environments                              |
| `seed`                                                                                | *number*                                                                              | :heavy_minus_sign:                                                                    | A random seed to prevent split points in different flags from having the same targets |
| `description`                                                                         | *string*                                                                              | :heavy_minus_sign:                                                                    | A description of the flag                                                             |
| `state`                                                                               | [models.UpdateFlagState](../models/updateflagstate.md)                                | :heavy_minus_sign:                                                                    | N/A                                                                                   |