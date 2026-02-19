# CreateFlagSegmentResponseBody

## Example Usage

```typescript
import { CreateFlagSegmentResponseBody } from "@vercel/sdk/models/createflagsegmentop.js";

let value: CreateFlagSegmentResponseBody = {
  id: "<id>",
  label: "<value>",
  slug: "<value>",
  createdAt: 258.51,
  updatedAt: 744.1,
  projectId: "<id>",
  typeName: "segment",
  data: {},
  hint: "<value>",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `description`                                                                              | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `createdBy`                                                                                | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `usedByFlags`                                                                              | *string*[]                                                                                 | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `usedBySegments`                                                                           | *string*[]                                                                                 | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `id`                                                                                       | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `label`                                                                                    | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `slug`                                                                                     | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `createdAt`                                                                                | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `updatedAt`                                                                                | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `projectId`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `typeName`                                                                                 | [models.CreateFlagSegmentTypeName](../models/createflagsegmenttypename.md)                 | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `data`                                                                                     | [models.CreateFlagSegmentFeatureFlagsData](../models/createflagsegmentfeatureflagsdata.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `hint`                                                                                     | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |