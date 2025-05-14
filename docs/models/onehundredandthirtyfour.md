# OneHundredAndThirtyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndThirtyFour } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndThirtyFour = {
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
  edgeConfigDigest: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `edgeConfigId`     | *string*           | :heavy_check_mark: | N/A                |
| `edgeConfigSlug`   | *string*           | :heavy_check_mark: | N/A                |
| `edgeConfigDigest` | *string*           | :heavy_check_mark: | N/A                |