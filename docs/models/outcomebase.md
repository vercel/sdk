# OutcomeBase

## Example Usage

```typescript
import { OutcomeBase } from "@vercel/sdk/models/flag.js";

let value: OutcomeBase = {
  type: "entity",
  kind: "<value>",
  attribute: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `type`                                                                         | [models.FlagOutcomeEnvironmentsType](../models/flagoutcomeenvironmentstype.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `kind`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `attribute`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |