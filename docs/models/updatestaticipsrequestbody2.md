# UpdateStaticIpsRequestBody2

## Example Usage

```typescript
import { UpdateStaticIpsRequestBody2 } from "@vercel/sdk/models/updatestaticipsop.js";

let value: UpdateStaticIpsRequestBody2 = {
  regions: [
    "iad1",
  ],
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `builds`                              | *boolean*                             | :heavy_minus_sign:                    | Whether to use Static IPs for builds. |
| `regions`                             | *string*[]                            | :heavy_check_mark:                    | N/A                                   |