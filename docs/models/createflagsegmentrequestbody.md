# CreateFlagSegmentRequestBody

## Example Usage

```typescript
import { CreateFlagSegmentRequestBody } from "@vercel/sdk/models/createflagsegmentop.js";

let value: CreateFlagSegmentRequestBody = {
  slug: "<value>",
  label: "<value>",
  data: {},
  hint: "<value>",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `slug`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `createdBy`                                                        | *string*                                                           | :heavy_minus_sign:                                                 | The entity who created the segment                                 |
| `label`                                                            | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `description`                                                      | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `data`                                                             | [models.CreateFlagSegmentData](../models/createflagsegmentdata.md) | :heavy_check_mark:                                                 | The data of the segment                                            |
| `hint`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |