# UpdateStaticIpsRequestBody1

## Example Usage

```typescript
import { UpdateStaticIpsRequestBody1 } from "@vercel/sdk/models/updatestaticipsop.js";

let value: UpdateStaticIpsRequestBody1 = {
  builds: true,
  regions: [
    "iad1",
  ],
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `builds`                              | *boolean*                             | :heavy_check_mark:                    | Whether to use Static IPs for builds. |
| `regions`                             | *string*[]                            | :heavy_minus_sign:                    | N/A                                   |