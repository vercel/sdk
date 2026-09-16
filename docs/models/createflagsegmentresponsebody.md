# CreateFlagSegmentResponseBody

## Example Usage

```typescript
import { CreateFlagSegmentResponseBody } from "@vercel/sdk/models/createflagsegmentop.js";

let value: CreateFlagSegmentResponseBody = {
  createdAt: 258.51,
  data: {},
  hint: "<value>",
  id: "<id>",
  label: "<value>",
  projectId: "<id>",
  slug: "<value>",
  typeName: "segment",
  updatedAt: 744.1,
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `createdAt`                                                                                | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `createdBy`                                                                                | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `data`                                                                                     | [models.CreateFlagSegmentFeatureFlagsData](../models/createflagsegmentfeatureflagsdata.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `description`                                                                              | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `hint`                                                                                     | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `id`                                                                                       | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `label`                                                                                    | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `projectId`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `slug`                                                                                     | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `typeName`                                                                                 | [models.CreateFlagSegmentTypeName](../models/createflagsegmenttypename.md)                 | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `updatedAt`                                                                                | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `usedByFlags`                                                                              | *string*[]                                                                                 | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `usedBySegments`                                                                           | *string*[]                                                                                 | :heavy_minus_sign:                                                                         | N/A                                                                                        |