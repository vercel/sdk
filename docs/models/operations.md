# Operations

## Example Usage

```typescript
import { Operations } from "@vercel/sdk/models/updateflagsegmentop.js";

let value: Operations = {
  action: "remove",
  field: "exclude",
  entity: "<value>",
  attribute: "<value>",
  value: {
    value: "<value>",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `action`                                                               | [models.UpdateFlagSegmentAction](../models/updateflagsegmentaction.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `field`                                                                | [models.Field](../models/field.md)                                     | :heavy_check_mark:                                                     | N/A                                                                    |
| `entity`                                                               | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `attribute`                                                            | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `value`                                                                | [models.UpdateFlagSegmentValue](../models/updateflagsegmentvalue.md)   | :heavy_check_mark:                                                     | N/A                                                                    |