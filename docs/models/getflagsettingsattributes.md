# GetFlagSettingsAttributes

## Example Usage

```typescript
import { GetFlagSettingsAttributes } from "@vercel/sdk/models/getflagsettingsop.js";

let value: GetFlagSettingsAttributes = {
  key: "<key>",
  type: "<value>",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `key`                                                                | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `type`                                                               | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `labels`                                                             | [models.GetFlagSettingsLabels](../models/getflagsettingslabels.md)[] | :heavy_minus_sign:                                                   | N/A                                                                  |