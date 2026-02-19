# CreateFlagSegmentData

The data of the segment

## Example Usage

```typescript
import { CreateFlagSegmentData } from "@vercel/sdk/models/createflagsegmentop.js";

let value: CreateFlagSegmentData = {};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `rules`                                                                                                    | [models.CreateFlagSegmentRules](../models/createflagsegmentrules.md)[]                                     | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `include`                                                                                                  | Record<string, Record<string, [models.CreateFlagSegmentInclude](../models/createflagsegmentinclude.md)[]>> | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `exclude`                                                                                                  | Record<string, Record<string, [models.CreateFlagSegmentExclude](../models/createflagsegmentexclude.md)[]>> | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |