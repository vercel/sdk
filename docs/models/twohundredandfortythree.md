# TwoHundredAndFortyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFortyThree } from "@vercel/sdk/models/usereventpayload216provider.js";

let value: TwoHundredAndFortyThree = {
  enabled: true,
  organizationId: "<id>",
  organizationSlug: "<value>",
  previousEnabled: false,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `enabled`          | *boolean*          | :heavy_check_mark: | N/A                |
| `organizationId`   | *string*           | :heavy_check_mark: | N/A                |
| `organizationSlug` | *string*           | :heavy_check_mark: | N/A                |
| `previousEnabled`  | *boolean*          | :heavy_check_mark: | N/A                |