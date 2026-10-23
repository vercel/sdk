# GetDrainSource1

## Example Usage

```typescript
import { GetDrainSource1 } from "@vercel/sdk/models/getdrainop.js";

let value: GetDrainSource1 = {
  kind: "self-served",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `defaultFor`                                           | [models.DefaultFor](../models/defaultfor.md)           | :heavy_minus_sign:                                     | Informational marker for a system-owned default drain. |
| `kind`                                                 | *"self-served"*                                        | :heavy_check_mark:                                     | N/A                                                    |