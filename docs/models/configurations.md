# Configurations

## Example Usage

```typescript
import { Configurations } from "@vercel/sdk/models/userevent.js";

let value: Configurations = {
  integrationId: "<id>",
  configurationId: "<id>",
  integrationSlug: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `integrationId`    | *string*           | :heavy_check_mark: | N/A                |
| `configurationId`  | *string*           | :heavy_check_mark: | N/A                |
| `integrationSlug`  | *string*           | :heavy_check_mark: | N/A                |
| `integrationName`  | *string*           | :heavy_minus_sign: | N/A                |