# GetDrainsSource1

## Example Usage

```typescript
import { GetDrainsSource1 } from "@vercel/sdk/models/getdrainsop.js";

let value: GetDrainsSource1 = {
  kind: "self-served",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `defaultFor`                                                               | [models.GetDrainsSourceDefaultFor](../models/getdrainssourcedefaultfor.md) | :heavy_minus_sign:                                                         | Informational marker for a system-owned default drain.                     |
| `kind`                                                                     | *"self-served"*                                                            | :heavy_check_mark:                                                         | N/A                                                                        |