# CreateLogDrainSource1

## Example Usage

```typescript
import { CreateLogDrainSource1 } from "@vercel/sdk/models/createlogdrainop.js";

let value: CreateLogDrainSource1 = {
  kind: "self-served",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `defaultFor`                                             | [models.SourceDefaultFor](../models/sourcedefaultfor.md) | :heavy_minus_sign:                                       | Informational marker for a system-owned default drain.   |
| `kind`                                                   | *"self-served"*                                          | :heavy_check_mark:                                       | N/A                                                      |