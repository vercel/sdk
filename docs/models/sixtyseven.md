# SixtySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { SixtySeven } from "@vercel/sdk/models/userevent.js";

let value: SixtySeven = {
  integrationId: "<id>",
  configurationId: "<id>",
  integrationSlug: "<value>",
  integrationName: "<value>",
  ownerId: "<id>",
  confirmedScopes: [
    "<value>",
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `integrationId`    | *string*           | :heavy_check_mark: | N/A                |
| `configurationId`  | *string*           | :heavy_check_mark: | N/A                |
| `integrationSlug`  | *string*           | :heavy_check_mark: | N/A                |
| `integrationName`  | *string*           | :heavy_check_mark: | N/A                |
| `ownerId`          | *string*           | :heavy_check_mark: | N/A                |
| `projectIds`       | *string*[]         | :heavy_minus_sign: | N/A                |
| `confirmedScopes`  | *string*[]         | :heavy_check_mark: | N/A                |