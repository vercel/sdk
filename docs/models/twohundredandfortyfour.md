# TwoHundredAndFortyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFortyFour } from "@vercel/sdk/models/usereventpayload217provider.js";

let value: TwoHundredAndFortyFour = {
  enabled: true,
  organizationId: "<id>",
  organizationSlug: "<value>",
  previousEnabled: true,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `enabled`          | *boolean*          | :heavy_check_mark: | N/A                |
| `organizationId`   | *string*           | :heavy_check_mark: | N/A                |
| `organizationSlug` | *string*           | :heavy_check_mark: | N/A                |
| `previousEnabled`  | *boolean*          | :heavy_check_mark: | N/A                |