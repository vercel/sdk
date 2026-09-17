# OneHundredAndTwelve

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndTwelve } from "@vercel/sdk/models/onehundredandtwo.js";

let value: OneHundredAndTwelve = {
  configurationId: "<id>",
  integrationId: "<id>",
  integrationName: "<value>",
  integrationSlug: "<value>",
  ownerId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `configurationId`  | *string*           | :heavy_check_mark: | N/A                |
| `integrationId`    | *string*           | :heavy_check_mark: | N/A                |
| `integrationName`  | *string*           | :heavy_check_mark: | N/A                |
| `integrationSlug`  | *string*           | :heavy_check_mark: | N/A                |
| `ownerId`          | *string*           | :heavy_check_mark: | N/A                |
| `projectIds`       | *string*[]         | :heavy_minus_sign: | N/A                |