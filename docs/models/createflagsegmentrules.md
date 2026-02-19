# CreateFlagSegmentRules

## Example Usage

```typescript
import { CreateFlagSegmentRules } from "@vercel/sdk/models/createflagsegmentop.js";

let value: CreateFlagSegmentRules = {
  id: "<id>",
  conditions: [
    {
      lhs: {
        type: "<value>",
        kind: "<value>",
        attribute: "<value>",
      },
      cmp: "regex",
    },
  ],
  outcome: {
    type: "<value>",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `id`                                                                             | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `conditions`                                                                     | [models.CreateFlagSegmentConditions](../models/createflagsegmentconditions.md)[] | :heavy_check_mark:                                                               | N/A                                                                              |
| `outcome`                                                                        | *models.CreateFlagSegmentOutcome*                                                | :heavy_check_mark:                                                               | N/A                                                                              |