# ListCheckRunsSource1

## Example Usage

```typescript
import { ListCheckRunsSource1 } from "@vercel/sdk/models/listcheckrunsop.js";

let value: ListCheckRunsSource1 = {
  kind: "integration",
  integrationId: "<id>",
  integrationConfigurationId: "<id>",
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `kind`                       | *"integration"*              | :heavy_check_mark:           | N/A                          |
| `integrationId`              | *string*                     | :heavy_check_mark:           | N/A                          |
| `integrationConfigurationId` | *string*                     | :heavy_check_mark:           | N/A                          |
| `resourceId`                 | *string*                     | :heavy_minus_sign:           | N/A                          |
| `externalResourceId`         | *string*                     | :heavy_minus_sign:           | N/A                          |