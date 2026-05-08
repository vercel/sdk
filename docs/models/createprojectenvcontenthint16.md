# CreateProjectEnvContentHint16

## Example Usage

```typescript
import { CreateProjectEnvContentHint16 } from "@vercel/sdk/models/createprojectenvop.js";

let value: CreateProjectEnvContentHint16 = {
  type: "integration-store-secret",
  storeId: "<id>",
  integrationId: "<id>",
  integrationProductId: "<id>",
  integrationConfigurationId: "<id>",
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `type`                       | *"integration-store-secret"* | :heavy_check_mark:           | N/A                          |
| `storeId`                    | *string*                     | :heavy_check_mark:           | N/A                          |
| `integrationId`              | *string*                     | :heavy_check_mark:           | N/A                          |
| `integrationProductId`       | *string*                     | :heavy_check_mark:           | N/A                          |
| `integrationConfigurationId` | *string*                     | :heavy_check_mark:           | N/A                          |