# SixtyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { SixtyFour } from "@vercel/sdk/models/userevent.js";

let value: SixtyFour = {
  integrationId: "<id>",
  configurationId: "<id>",
  integrationSlug: "<value>",
  integrationName: "<value>",
  ownerId: "<id>",
  billingPlanId: "<id>",
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
| `billingPlanId`    | *string*           | :heavy_check_mark: | N/A                |
| `billingPlanName`  | *string*           | :heavy_minus_sign: | N/A                |