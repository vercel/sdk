# Data

## Example Usage

```typescript
import { Data } from "@vercel/sdk/models/segment.js";

let value: Data = {};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `exclude`                                                                  | Record<string, Record<string, [models.ExcludeT](../models/excludet.md)[]>> | :heavy_minus_sign:                                                         | N/A                                                                        |
| `include`                                                                  | Record<string, Record<string, [models.Include](../models/include.md)[]>>   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `rules`                                                                    | [models.SegmentRules](../models/segmentrules.md)[]                         | :heavy_minus_sign:                                                         | N/A                                                                        |