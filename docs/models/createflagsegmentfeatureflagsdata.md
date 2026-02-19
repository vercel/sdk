# CreateFlagSegmentFeatureFlagsData

## Example Usage

```typescript
import { CreateFlagSegmentFeatureFlagsData } from "@vercel/sdk/models/createflagsegmentop.js";

let value: CreateFlagSegmentFeatureFlagsData = {};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `rules`                                                                                                                            | [models.CreateFlagSegmentFeatureFlagsRules](../models/createflagsegmentfeatureflagsrules.md)[]                                     | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `include`                                                                                                                          | Record<string, Record<string, [models.CreateFlagSegmentFeatureFlagsInclude](../models/createflagsegmentfeatureflagsinclude.md)[]>> | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `exclude`                                                                                                                          | Record<string, Record<string, [models.CreateFlagSegmentFeatureFlagsExclude](../models/createflagsegmentfeatureflagsexclude.md)[]>> | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |