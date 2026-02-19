# UpdateFlagSettingsRequestBody

## Example Usage

```typescript
import { UpdateFlagSettingsRequestBody } from "@vercel/sdk/models/updateflagsettingsop.js";

let value: UpdateFlagSettingsRequestBody = {};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `enabled`                                                                      | *boolean*                                                                      | :heavy_minus_sign:                                                             | N/A                                                                            |
| `entities`                                                                     | [models.UpdateFlagSettingsEntities](../models/updateflagsettingsentities.md)[] | :heavy_minus_sign:                                                             | N/A                                                                            |
| `environments`                                                                 | *string*[]                                                                     | :heavy_minus_sign:                                                             | The environments to sync                                                       |