# UpdateFlagSegmentRules

## Example Usage

```typescript
import { UpdateFlagSegmentRules } from "@vercel/sdk/models/updateflagsegmentop.js";

let value: UpdateFlagSegmentRules = {
  id: "<id>",
  conditions: [],
  outcome: {
    type: "<value>",
    base: {
      type: "<value>",
      kind: "<value>",
      attribute: "<value>",
    },
    passPromille: 4257.66,
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `id`                                                                             | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `conditions`                                                                     | [models.UpdateFlagSegmentConditions](../models/updateflagsegmentconditions.md)[] | :heavy_check_mark:                                                               | N/A                                                                              |
| `outcome`                                                                        | *models.UpdateFlagSegmentOutcome*                                                | :heavy_check_mark:                                                               | N/A                                                                              |