# TwoHundredAndFiftyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFiftyFour } from "@vercel/sdk/models/microfrontends2.js";

let value: TwoHundredAndFiftyFour = {
  enabled: false,
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