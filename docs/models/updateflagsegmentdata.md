# UpdateFlagSegmentData

The data of the segment

## Example Usage

```typescript
import { UpdateFlagSegmentData } from "@vercel/sdk/models/updateflagsegmentop.js";

let value: UpdateFlagSegmentData = {};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `rules`                                                                                                    | [models.UpdateFlagSegmentRules](../models/updateflagsegmentrules.md)[]                                     | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `include`                                                                                                  | Record<string, Record<string, [models.UpdateFlagSegmentInclude](../models/updateflagsegmentinclude.md)[]>> | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `exclude`                                                                                                  | Record<string, Record<string, [models.UpdateFlagSegmentExclude](../models/updateflagsegmentexclude.md)[]>> | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |