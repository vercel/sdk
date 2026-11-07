# TwoHundredAndFour

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFour } from "@vercel/sdk/models/payloadinitiator.js";

let value: TwoHundredAndFour = {
  integrationId: "<id>",
  integrationName: "<value>",
  integrationSlug: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `integrationId`    | *string*           | :heavy_check_mark: | N/A                |
| `integrationName`  | *string*           | :heavy_check_mark: | N/A                |
| `integrationSlug`  | *string*           | :heavy_check_mark: | N/A                |