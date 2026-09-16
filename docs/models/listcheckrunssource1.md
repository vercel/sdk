# ListCheckRunsSource1

## Example Usage

```typescript
import { ListCheckRunsSource1 } from "@vercel/sdk/models/listcheckrunsop.js";

let value: ListCheckRunsSource1 = {
  integrationConfigurationId: "<id>",
  integrationId: "<id>",
  kind: "integration",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `externalResourceId`                                                   | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `integrationConfigurationId`                                           | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `integrationId`                                                        | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `kind`                                                                 | [models.ListCheckRunsSourceKind](../models/listcheckrunssourcekind.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `resourceId`                                                           | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |